# 💰 Finora — Personal Finance Dashboard

> **A modern, responsive, browser-based personal finance dashboard built with HTML, CSS, and JavaScript.**

Finora helps users track income, expenses, budgets, savings goals, and financial insights through a clean and responsive interface.

The upgraded version adds interactive transaction management, savings goals, dynamic analytics, budget monitoring, dark mode, CSV export, and browser-based data persistence.

---

## ✨ Features

### 📊 Dashboard

* Total balance overview
* Total income
* Total expenses
* Automatic savings calculation
* Savings rate
* Cash-flow visualization
* Recent transactions
* Monthly budget overview
* Automatic budget utilization

### 💳 Transaction Management

* Add transactions
* Edit existing transactions
* Delete transactions
* Income and expense classification
* Category selection
* Transaction dates
* Search transactions instantly
* Filter by type
* Filter by category
* Sort by:

  * Newest
  * Oldest
  * Highest amount
  * Lowest amount

### 💰 Budget Tracking

* Category-based budgets
* Food budget
* Shopping budget
* Bills budget
* Transport budget
* Entertainment budget
* Automatic spending calculation
* Budget utilization percentage
* Remaining budget calculation
* Near-limit warning
* Budget exceeded warning

### 🎯 Savings Goals

* Create custom savings goals
* Set target amount
* Set current saved amount
* Automatic progress percentage
* Add money to existing goals
* Remaining amount calculation
* Goal completion detection
* Delete goals
* Persistent goal storage

### 📈 Analytics

* Savings rate
* Average daily spending
* Largest expense
* Transaction count
* Spending by category
* Expense-to-income ratio
* Financial health indicator
* Dynamic category spending bars

### 🏦 Accounts

Finora includes an account overview for:

* HDFC Savings
* SBI Savings
* Cash Wallet
* Investments

### 🌙 Dark Mode

* Light theme
* Dark theme
* Theme preference support
* Responsive UI in both modes

### 📥 Data Export

Export transaction history as a CSV file directly from the browser.

Example:

```text
Description,Category,Date,Amount,Type
Monthly Salary,Salary,Aug 01 2026,75000,Income
Grocery Store,Food,Aug 04 2026,3200,Expense
```

### 💾 Local Storage

Finora works without a backend.

Data is stored locally in the browser using:

```javascript
localStorage
```

Stored information includes:

* Transactions
* Savings goals
* Profile settings

---

## 🎨 UI Highlights

* Modern finance dashboard
* Clean card-based layout
* Responsive design
* Mobile-friendly navigation
* Interactive modals
* Toast notifications
* Progress indicators
* Transaction action buttons
* Dark mode
* Minimal and professional interface

---

## 🛠️ Tech Stack

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| HTML5        | Application structure     |
| CSS3         | Responsive UI and styling |
| JavaScript   | Application logic         |
| LocalStorage | Browser data persistence  |
| CSV          | Transaction export        |

---

## 📁 Project Structure

```text
Finora/
│
├── index.html
└── README.md
```

The entire application is currently contained inside:

```text
index.html
```

This makes Finora extremely easy to run and deploy.

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/mahitech580/Finora.git
```

### 2. Open the project

```bash
cd Finora
```

### 3. Launch

Simply open:

```text
index.html
```

in your browser.

No:

* Node.js
* Python server
* Database
* API key
* Backend

is required.

---

## 🌐 GitHub Pages

Finora can be deployed directly using GitHub Pages because it is a static HTML/CSS/JavaScript application.

### Deployment

1. Push the project to GitHub.
2. Open the repository.
3. Go to **Settings → Pages**.
4. Select the main branch.
5. Select the root folder.
6. Save.

Your dashboard can then be accessed through your GitHub Pages URL.

---

## 🧠 How It Works

Finora calculates financial metrics dynamically from stored transactions.

### Income

```text
Total Income = Sum of all Income transactions
```

### Expenses

```text
Total Expenses = Sum of all Expense transactions
```

### Savings

```text
Savings = Income − Expenses
```

### Savings Rate

```text
Savings Rate = (Savings / Income) × 100
```

### Budget Utilization

```text
Budget Usage = (Category Spending / Category Budget) × 100
```

These values update automatically when transactions are added, edited, or deleted.

---

## 🔐 Privacy

Finora is designed as a client-side application.

Your transaction and goal data is stored in your browser using LocalStorage.

No personal financial data is sent to a Finora backend because the current project does not use one.

For shared/public computers, clear browser storage after use.

---

## 📱 Responsive Design

Finora adapts to different screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The sidebar automatically changes into a compact mobile navigation layout.

---

## 🔮 Future Improvements

Possible future versions can include:

* Backend API
* User authentication
* MySQL/PostgreSQL database
* Multiple user accounts
* Real bank account integration
* Recurring transactions
* Advanced charts
* Monthly/yearly reports
* PDF financial reports
* Budget creation from the UI
* Account transfers
* Bill reminders
* Notifications
* Financial forecasting
* AI-powered spending insights
* Expense prediction
* Investment tracking

---

## 💡 Project Highlights

This project demonstrates practical frontend development concepts including:

* DOM manipulation
* JavaScript event handling
* CRUD operations
* LocalStorage
* Dynamic UI rendering
* Filtering and sorting
* Form validation
* Modal interfaces
* Responsive CSS
* Data aggregation
* CSV generation
* Client-side application architecture

---

## 🎯 Learning Outcomes

Building Finora provides practical experience with:

```text
HTML
   ↓
CSS
   ↓
JavaScript
   ↓
DOM Manipulation
   ↓
LocalStorage
   ↓
CRUD Operations
   ↓
Data Processing
   ↓
Responsive UI
```

---

## 📌 Current Version

**Finora v2.0**

### v2.0 includes

* Dynamic dashboard
* Transaction CRUD
* Search
* Filters
* Sorting
* Budget monitoring
* Savings goals
* Analytics
* Dark mode
* CSV export
* LocalStorage persistence
* Toast notifications
* Responsive design

---

## 👨‍💻 Author

**Mahendra**

GitHub:
https://github.com/mahitech580

---

## 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026 Mahendra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
```

---

⭐ **If you find Finora useful, consider giving the repository a star!**
