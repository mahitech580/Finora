const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

const html = fs.readFileSync(path.join(__dirname, "../index.html"), "utf8");
const scriptMatch = html.match(/<script\b[^>]*>([\s\S]*?)<\/script>/i);
assert.ok(scriptMatch, "Finora inline application script should exist");
const appScript = scriptMatch[1];

test("inline application script remains valid JavaScript", () => {
  assert.doesNotThrow(() => new vm.Script(appScript, { filename: "finora-inline.js" }));
});

test("CSV cells quote normal content and escape embedded quotes", () => {
  const helper = appScript.match(/function csvCell\(value\)\s*\{[\s\S]*?\n\}/);
  assert.ok(helper, "csvCell helper should exist");
  const context = {};
  const command = helper[0] +
    "\nresult = [csvCell('Groceries'), csvCell('A ' + String.fromCharCode(34) + 'quoted' + String.fromCharCode(34) + ' item')];";
  vm.runInNewContext(command, context);

  const quote = String.fromCharCode(34);
  assert.deepEqual(Array.from(context.result), [
    quote + "Groceries" + quote,
    quote + "A " + quote + quote + "quoted" + quote + quote + " item" + quote,
  ]);
});

test("CSV cells neutralize formula-leading text, including leading whitespace", () => {
  const helper = appScript.match(/function csvCell\(value\)\s*\{[\s\S]*?\n\}/);
  assert.ok(helper, "csvCell helper should exist");
  const context = {};
  vm.runInNewContext(
    helper[0] + "\nresult = [csvCell('=1+1'), csvCell('  @SUM(A1:A2)'), csvCell('-cmd|/C calc')];",
    context,
  );

  const quote = String.fromCharCode(34);
  assert.deepEqual(Array.from(context.result), [
    quote + "'=1+1" + quote,
    quote + "'  @SUM(A1:A2)" + quote,
    quote + "'-cmd|/C calc" + quote,
  ]);
});


function extractFunction(name) {
  const start = html.indexOf("function " + name + "(");
  assert.notEqual(start, -1, name + " should exist");
  const opening = html.indexOf("{", start);
  let depth = 0;

  for (let index = opening; index < html.length; index += 1) {
    if (html[index] === "{") depth += 1;
    if (html[index] === "}") {
      depth -= 1;
      if (depth === 0) return html.slice(start, index + 1);
    }
  }

  throw new Error("Could not find the end of " + name);
}

test("loading remains usable when browser storage reads are blocked", () => {
  const warnings = [];
  const context = {
    STORE_KEY: "finora",
    state: { settings: {} },
    DEFAULT_BUDGETS: { Food: 100 },
    DEFAULT_GOALS: [{ name: "Emergency" }],
    DEFAULT_ACCOUNTS: [{ name: "Cash" }],
    seedTransactions: () => [{ id: 1, d: "Sample" }],
    localStorage: {
      getItem() { throw new Error("storage blocked"); },
    },
    console: {
      warn(...args) { warnings.push(args); },
    },
  };

  vm.runInNewContext(extractFunction("saveState") + "\n" + extractFunction("loadState") + "\nloadState();", context);

  assert.equal(context.state.transactions.length, 1);
  assert.deepEqual(Array.from(context.state.goals, goal => goal.name), ["Emergency"]);
  assert.equal(warnings.length, 1);
});

test("saving does not crash when browser storage writes are blocked", () => {
  const warnings = [];
  const context = {
    STORE_KEY: "finora",
    state: { transactions: [] },
    localStorage: {
      setItem() { throw new Error("storage quota exceeded"); },
    },
    console: {
      warn(...args) { warnings.push(args); },
    },
  };

  assert.doesNotThrow(() => {
    vm.runInNewContext(extractFunction("saveState") + "\nsaveState();", context);
  });
  assert.equal(warnings.length, 1);
});
