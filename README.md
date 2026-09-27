# 💰 Finora — Personal Finance Dashboard

> A modern, responsive personal finance dashboard built with **HTML, CSS, and JavaScript**, featuring a neon glassmorphism interface, transaction tracking, financial analytics, budgets, savings goals, account overview, and browser-based data persistence.

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
* 🔎 Transaction search and filtering
* 📤 Transaction CSV export
* 🌈 Neon glassmorphism UI
* 💾 Local browser storage

Everything currently runs directly in the browser without requiring a backend server or database.

Financial data, preferences, transactions, budgets, and savings goals are persisted locally using the browser's **LocalStorage**.

---

## ✨ Features

### 🏠 Dashboard

The dashboard provides a quick financial overview with:

* Total balance
* Current-month income
* Current-month expenses
* Current savings
* Cash-flow visualization
* Monthly budget progress
* Recent transactions

Financial totals are calculated dynamically from the stored transaction data.

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

Users can also delete existing transactions.

---

### 🔎 Transaction Search & Filtering

The transaction page includes:

* Global transaction search
* Income filter
* Expense filter
* Category filter
* Automatic transaction rendering

Search can match transaction:

* Description
* Category
* Transaction type
* Date

---

### 📊 Financial Analytics

The analytics section provides a quick view of financial activity, including:

* Savings rate
* Average daily spending
* Largest expense
* Transaction count
* Spending by category
* Emergency fund progress

Analytics are calculated from the stored transaction data rather than using fixed dashboard values.

---

### 📋 Budget Monitoring

Finora provides category-based budget tracking.

Budget categories include:

* Food
* Shopping
* Bills
* Transport
* Entertainment
* Healthcare

Each category displays:

* Amount spent
* Budget limit
* Percentage used
* Visual progress indicator

Budget information is stored locally in the browser.

---

### 🎯 Savings Goals

The Savings Goals section allows users to visualize financial targets.

Example goals include:

* 💻 Laptop
* 🛡️ Emergency Fund
* 🌴 Trip Fund

The interface displays:

* Goal name
* Current saved amount
* Target amount
* Completion percentage
* Progress bar
* Goal category

Users can:

* Create new savings goals
* Add money to an existing goal
* Delete a goal

Savings goals are persisted using LocalStorage.

---

### 🏦 Accounts

The Accounts section provides an overview of different money sources.

Example account types include:

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

### 📤 CSV Export

Finora provides an **Export CSV** option on the Transactions page.

The exported file contains:

```text
Description
Category
Date
Amount
Type
```

This allows transaction records to be opened in applications such as Microsoft Excel or Google Sheets.

---

## 🌈 Neon Glassmorphism UI

The interface uses a modern **neon-inspired glassmorphism design**.

The visual system includes:

* Neon purple gradients
* Cyan highlights
* Pink ambient glow
* Glassmorphism cards
* Transparent backgrounds
* Backdrop blur
* Soft shadows
* Neon navigation effects
* Grid-based background pattern
* Hover interactions
* Responsive layouts

The background is created entirely with **CSS gradients and effects**.

### No external background image is required.

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

The sidebar becomes a compact navigation bar and dashboard cards adapt to smaller layouts.

---

## 💾 Data Persistence

Finora uses the browser's built-in:

```text
localStorage
```

Stored application data includes:

* Transactions
* Budgets
* Savings goals
* User profile preferences
* Currency preference
* Theme preference
* Opening balance

No backend server or external database is required.

Because the data is stored locally, information is specific to the browser and device where the application is being used.

---

## 🛠️ Technologies Used

```text
HTML5
CSS3
JavaScript ES6+
LocalStorage
Web APIs
Responsive CSS
```

---

## 📁 Project Structure

```text
Finora/
│
├── index.html
└── README.md
```

Finora can run as a single-page frontend application without a backend.

---

## 🚀 Running the Project

### Option 1 — Open directly

Download the project and open:

```text
index.html
```

in a modern web browser.

### Option 2 — GitHub Pages

The project can be deployed directly using **GitHub Pages**.

No backend server is required.

---

## 🔮 Future Improvements

Possible future improvements include:

* Real backend authentication
* Cloud database support
* Bank account integration
* Advanced interactive charts
* Recurring transactions
* Budget alerts
* Multiple currencies
* Monthly reports
* PDF financial reports
* Account-specific transactions
* Cloud synchronization

---

## 📄 License

This project is licensed under the **MIT License**.
