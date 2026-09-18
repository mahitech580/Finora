# 💰 Finora — Personal Finance Dashboard

> A modern, responsive personal finance dashboard built with **HTML, CSS, and JavaScript**, featuring a neon glassmorphism interface, transaction tracking, financial analytics, budgets, savings goals, and browser-based data persistence.

![Finora Banner](https://img.shields.io/badge/Finora-Personal%20Finance-635BFF?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square\&logo=javascript\&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-16A36A?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-8B85FF?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🌐 Overview

**Finora** is a frontend personal finance management application designed to provide a clean and interactive way to monitor personal finances.

The application combines:

* 💳 Transaction tracking
* 📊 Financial analytics
* 💰 Income and expense monitoring
* 🎯 Savings goals
* 📋 Budget tracking
* 🏦 Account overview
* ⚙️ Personal settings
* 🌈 Neon glassmorphism UI
* 💾 Local browser storage

Everything currently runs directly in the browser without requiring a backend server or database.

---

## ✨ Features

### 🏠 Dashboard

The dashboard provides a quick financial overview with:

* Total balance
* Total income
* Total expenses
* Current savings
* Cash-flow visualization
* Monthly budget progress
* Recent transactions

The dashboard automatically recalculates financial totals when transactions are added.

---

### 💳 Transaction Management

Finora includes a transaction management interface for recording financial activity.

Users can add:

* Transaction description
* Amount
* Income or Expense
* Category
* Date

Supported categories include:

* 🍔 Food
* 🛍️ Shopping
* 🧾 Bills
* 🚇 Transport
* 🎬 Entertainment
* 💼 Salary
* 📈 Investment
* 🏥 Healthcare

Transactions are stored in the browser using **LocalStorage**.

---

### 🔎 Transaction Search & Filtering

The transaction page includes:

* Global transaction search
* Income filter
* Expense filter
* Category filter
* Automatic transaction rendering

Search works across:

* Description
* Category
* Transaction type

---

### 📊 Financial Analytics

The analytics section provides a quick view of financial activity, including:

* Savings rate
* Average daily spending
* Largest expense
* Transaction count
* Spending by category
* Emergency fund progress

This makes it easier to understand spending patterns from a single interface.

---

### 📋 Budget Monitoring

Finora provides category-based budget tracking.

Current categories include:

* Food
* Shopping
* Transport
* Entertainment

Each category displays:

* Amount spent
* Budget limit
* Percentage used
* Visual progress indicator

---

### 🎯 Savings Goals

The Savings Goals section allows users to visualize financial targets.

Example goals include:

* 💻 MacBook Pro
* 🛡️ Emergency Fund
* 🌴 Goa Trip

The interface displays:

* Goal name
* Current amount
* Target amount
* Completion percentage
* Progress bar

A **New Goal** action is also included for future goal-management expansion.

---

### 🏦 Accounts

The Accounts section provides an overview of different money sources:

* HDFC Savings
* SBI Savings
* Cash Wallet
* Investments

Each account displays its balance and account type.

---

### ⚙️ Settings

Finora includes a personal settings section with:

* Full name
* Email
* Currency preference
* Theme preference

Settings are saved using browser LocalStorage.

---

## 🌈 Neon Glassmorphism UI

The latest version introduces a modern **neon-inspired visual design**.

The interface uses:

* Neon purple gradients
* Cyan highlights
* Pink ambient glow
* Glassmorphism cards
* Transparent backgrounds
* Backdrop blur
* Soft shadows
* Neon navigation effects
* Grid-based background pattern
* Animated hover interactions

The background is created entirely with **CSS gradients and effects**.

### No external background image required.

This keeps the project:

* Lightweight
* Fast
* GitHub Pages compatible
* Easy to customize

---

## 📱 Responsive Design

Finora is designed to work across different screen sizes.

### Desktop

Full sidebar navigation with multi-column dashboard cards.

### Tablet

Cards and dashboard sections automatically adjust to available space.

### Mobile

The sidebar becomes a compact navigation bar and dashboard cards stack into smaller layouts.

---

## 💾 Data Persistence

Finora uses the browser's built-in:

```text
localStorage
```

Transaction data is stored under:

```text
finora_transactions
```

Profile and preference information is also stored locally.

This means data remains available after refreshing the page on the same browser.

> ⚠️ Because the application uses LocalStorage, data is browser-specific and is not synchronized between devices.

---

## 🧮 Financial Calculations

Finora calculates financial metrics dynamically.

### Total Income

```text
Total Income = Sum of all Income Transactions
```

### Total Expenses

```text
Total Expenses = Sum of all Expense Transactions
```

### Savings

```text
Savings = Income - Expenses
```

### Savings Rate

```text
Savings Rate = (Savings / Income) × 100
```

These values are recalculated whenever transaction data changes.

---

## 📊 Cash Flow Visualization

The dashboard includes a visual cash-flow chart displaying:

* Income
* Expenses

The chart is generated dynamically using JavaScript and CSS-based bars.

No chart library is required.

---

## 🛠️ Tech Stack

| Technology          | Purpose                             |
| ------------------- | ----------------------------------- |
| HTML5               | Application structure               |
| CSS3                | UI, responsive design, neon effects |
| JavaScript ES6+     | Application logic                   |
| LocalStorage        | Browser-based persistence           |
| CSS Gradients       | Neon background                     |
| CSS Backdrop Filter | Glassmorphism                       |
| Git                 | Version control                     |
| GitHub Pages        | Static deployment                   |

---

## 📁 Project Structure

```text
Finora/
│
├── index.html
└── README.md
```

The current application is intentionally maintained as a **single-file frontend project**, containing:

* HTML
* CSS
* JavaScript

inside `index.html`.

This makes the project simple to run and deploy.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mahitech580/Finora.git
```

### 2. Open the Project

```bash
cd Finora
```

### 3. Run

Since Finora is a static frontend project, no installation is required.

Simply open:

```text
index.html
```

in your browser.

---

## 🌐 GitHub Pages Deployment

Finora can be deployed directly using GitHub Pages.

### Steps

1. Push the project to GitHub.
2. Open the repository.
3. Go to **Settings**.
4. Select **Pages**.
5. Select the deployment branch.
6. Choose the root folder.
7. Save the configuration.

Your Finora dashboard can then be accessed through the GitHub Pages URL generated by GitHub.

---

## 🔐 Privacy

Finora currently operates entirely on the client side.

There is:

* ❌ No backend server
* ❌ No database
* ❌ No external API
* ❌ No authentication service
* ❌ No bank-account connection

Financial information is stored locally in the browser using LocalStorage.

---

## 🎨 UI Design Highlights

The interface focuses on a modern financial SaaS-style design.

### Visual Elements

* Neon ambient lighting
* Purple/cyan gradient effects
* Frosted glass cards
* Rounded components
* Responsive dashboard
* Minimal navigation
* Financial status colors
* Interactive hover states
* Soft shadows
* Grid background

---

## 🔄 Application Flow

```text
User
 │
 ▼
Finora Dashboard
 │
 ├── Dashboard
 │    ├── Balance
 │    ├── Income
 │    ├── Expenses
 │    ├── Savings
 │    └── Cash Flow
 │
 ├── Transactions
 │    ├── Add Transaction
 │    ├── Search
 │    └── Filters
 │
 ├── Budgets
 │    └── Category Progress
 │
 ├── Analytics
 │    ├── Savings Rate
 │    ├── Spending
 │    └── Financial Health
 │
 ├── Savings Goals
 │
 ├── Accounts
 │
 └── Settings
       │
       ▼
   LocalStorage
```

---

## 💡 Project Highlights

This project demonstrates practical knowledge of:

* DOM manipulation
* JavaScript event handling
* Form handling
* Array methods
* Filtering data
* Dynamic HTML rendering
* LocalStorage
* Responsive CSS
* CSS gradients
* Glassmorphism
* UI component design
* Financial calculations
* Client-side application architecture

---

## 🧠 What I Learned

Building Finora helped strengthen practical skills in:

### Frontend Development

* Creating responsive layouts
* Building reusable UI patterns
* Designing dashboard interfaces
* Creating modern CSS effects

### JavaScript

* DOM manipulation
* Event listeners
* Form processing
* Array filtering and reduction
* Dynamic rendering
* Browser storage

### UI/UX

* Dashboard information hierarchy
* Responsive navigation
* Visual feedback
* Progress indicators
* Glassmorphism design
* Neon visual systems

---

## 🚧 Future Improvements

Potential future versions can introduce:

* 🔐 User authentication
* 🗄️ Database integration
* ☁️ Cloud synchronization
* 💳 Bank account integration
* 📅 Date-range analytics
* 📈 Advanced financial charts
* 📊 Monthly comparison reports
* 🧾 CSV import
* 📤 Advanced CSV export
* 🎯 Persistent savings-goal management
* 💰 Custom budget creation
* 🏦 Account management
* 🔄 Money transfers between accounts
* 🌙 Fully functional dark/light theme switching
* 🔔 Advanced notifications
* 📱 PWA support
* 🤖 AI-powered spending insights

---

## 📌 Current Version

```text
Finora v2.1
```

### Current Build Includes

```text
✓ Neon background
✓ Glassmorphism cards
✓ Responsive UI
✓ Dashboard
✓ Transaction management
✓ Search
✓ Filters
✓ Budget monitoring
✓ Savings goals
✓ Analytics
✓ Accounts
✓ Settings
✓ LocalStorage
✓ Dynamic financial calculations
✓ Cash-flow visualization
```

---

## 👨‍💻 Author

**Mahendra**

Computer Science Engineering Graduate
Python • JavaScript • SQL • AI/ML • Full Stack Development

GitHub:

https://github.com/mahitech580

---

## 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026 Mahendra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

⭐ **If you like the project, consider giving the repository a star!**

Built with **HTML + CSS + JavaScript** by **Mahendra**.
