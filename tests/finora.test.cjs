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
  vm.runInNewContext(
    helper[0] + '\nresult = [csvCell("Groceries"), csvCell(\\'A "quoted" item\\')];',
    context,
  );

  assert.deepEqual(Array.from(context.result), ['"Groceries"', '"A ""quoted"" item"']);
});

test("CSV cells neutralize formula-leading text, including leading whitespace", () => {
  const helper = appScript.match(/function csvCell\(value\)\s*\{[\s\S]*?\n\}/);
  assert.ok(helper, "csvCell helper should exist");
  const context = {};
  vm.runInNewContext(
    helper[0] + '\nresult = [csvCell("=1+1"), csvCell("  @SUM(A1:A2)"), csvCell("-cmd|/C calc")];',
    context,
  );

  assert.deepEqual(Array.from(context.result), [
    "\\"'=1+1\\"",
    "\\"'  @SUM(A1:A2)\\"",
    "\\"'-cmd|/C calc\\"",
  ]);
});
