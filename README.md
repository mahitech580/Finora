# 💰 Finora — Personal Finance Dashboard

> A modern, responsive personal finance dashboard built with **HTML, CSS, and JavaScript**, featuring a neon glassmorphism interface, transaction tracking, financial analytics, budgets, savings goals, and browser-based data persistence.

![Finora Banner](https://img.shields.io/badge/Finora-Personal%20Finance-635BFF?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
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
* 🔐 User login and registration
* 🚪 Login session and logout
* 🌈 Neon glassmorphism UI
* 💾 Local browser storage

Everything currently runs directly in the browser without requiring a backend server or database. User accounts, login sessions, transactions, and preferences are persisted locally in the browser.

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

### 🔐 User Authentication

Finora now includes a browser-based authentication flow.

Users can:

* Create a new account
* Log in with their registered email and password
* Stay signed in through a browser session
* Log out from the application
* Use user-specific transaction and profile storage

Authentication is implemented on the client side using browser storage and Web Crypto APIs. It is intended for frontend/demo use and does not replace production server-side authentication.

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
