# 💰 Finora — Personal Finance Dashboard

> A modern, responsive personal finance dashboard inspired by a personal developer portfolio experience, built with **HTML, CSS, and JavaScript**. Finora combines personal finance tracking with neon UI effects, smooth animations, interactive sections, budgeting, savings goals, analytics, accounts, reports, and browser-based data persistence.

![Finora Banner](https://img.shields.io/badge/Finora-Personal%20Finance-635BFF?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square\&logo=javascript\&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-16A36A?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-8B85FF?style=flat-square)
![GitHub%20Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-181717?style=flat-square\&logo=github)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🌐 Overview

**Finora** is a frontend personal finance management application designed with the interaction style of a modern personal portfolio.

Instead of using a traditional administrative dashboard layout, Finora uses a **single-page section-based experience** with animated navigation, scrolling transitions, neon visuals, interactive cards, hover effects, and responsive layouts.

The application provides tools for:

* 💳 Transaction tracking
* 📊 Financial analytics
* 💰 Income and expense monitoring
* 📋 Budget planning
* 🎯 Savings goals
* 🏦 Account overview
* 📈 Financial reports
* 🔎 Activity filtering
* 📤 CSV export
* ⚙️ Personal settings
* 💾 Local browser persistence

Everything runs directly in the browser without requiring a backend server or external database.

---

## ✨ Main Sections

Finora contains **10 interactive sections**, each connected through the navigation bar.

```text
Home
Overview
Tools
Insights
Planning
Activity
Goals
Accounts
Reports
Settings
```

Navigation automatically highlights the active section while scrolling.

---

# 🏠 Home

The Home section acts as the main introduction to Finora.

It includes:

* Personal finance introduction
* Animated finance-related headline
* Current balance
* Monthly income
* Monthly expenses
* Savings rate
* Quick navigation buttons
* Animated financial visual
* Floating financial information cards

The headline cycles through different finance roles such as:

```text
Personal Finance Hub
Expense Tracker
Budget Planner
Savings Companion
Financial Insights
```

---

# 📊 Overview

The Overview section provides a high-level summary of financial activity.

It displays:

* Current balance
* Income
* Expenses
* Savings
* Transaction count
* Financial activity highlights

The section uses an animated circular visualization to give the page the same interactive feel as a developer portfolio's visual profile section.

---

# 🛠️ Finance Tools

The Tools section presents the major capabilities of Finora through interactive cards.

### Transactions

Record and manage financial activity.

### Budgets

Set spending limits and monitor category usage.

### Savings Goals

Create and track measurable financial targets.

Each tool card includes:

* Icon-based design
* Hover animations
* Neon glow effects
* Navigation buttons
* Smooth transitions

---

# 📈 Insights

The Insights section turns financial information into visual indicators.

It includes:

* Balance visibility
* Transaction search
* Budget tracking
* Analytics coverage
* Financial activity indicators
* Technical-style progress bars
* Circular percentage indicators

The section uses animated progress indicators and neon visual effects inspired by portfolio skill sections.

---

# 📋 Planning

The Planning section focuses on managing financial targets before spending takes place.

It provides:

* Monthly budget overview
* Current spending
* Remaining budget
* Active savings goals
* Planning workflow

The planning workflow is presented as:

```text
Set Limits
     ↓
Track Activity
     ↓
Build Goals
     ↓
Review Reports
```

Animated planning bubbles and timeline elements reinforce the visual style.

---

# 💳 Activity

The Activity section displays recorded financial transactions using an interactive portfolio-style card layout.

Each transaction can display:

* Description
* Category
* Date
* Amount
* Income / Expense type

Supported categories include:

* 🍔 Food
* 🛍️ Shopping
* 🧾 Bills
* 🚇 Transport
* 🎬 Entertainment
* 💼 Salary
* 📈 Investment
* 🏥 Healthcare
* 📚 Education

---

## 🔎 Activity Filtering

Transactions can be filtered using interactive buttons:

```text
All
Income
Expenses
Food
Shopping
Bills
```

The filter system updates the visible transaction cards without reloading the page.

---

## ➕ Adding Transactions

Users can add transactions through the built-in modal.

Each transaction supports:

* Description
* Amount
* Income / Expense
* Category
* Date

After a transaction is added, financial values are recalculated automatically.

---

## 🗑️ Deleting Transactions

Transactions can also be deleted directly from the Activity section.

The dashboard and analytics update immediately after deletion.

---

# 🎯 Goals

The Goals section combines savings goals with monthly budgeting.

Users can:

* Create new savings goals
* Define target amounts
* Set an initial saved amount
* Add additional savings
* Delete goals
* Monitor completion percentage

Example goals:

* 💻 Laptop Fund
* 🛡️ Emergency Fund
* 🌴 Trip Fund

Each goal displays:

```text
Goal Name
Current Saved Amount
Target Amount
Completion %
Progress Bar
Category
```

---

# 💰 Budget Tracking

Finora maintains category-based monthly budgets for:

* Food
* Shopping
* Bills
* Transport
* Entertainment
* Healthcare

Each budget displays:

* Current spending
* Budget limit
* Percentage used
* Visual progress

Budget values can be updated directly within the application.

---

# 🏦 Accounts

The Accounts section provides a visual overview of recorded money sources.

Example accounts include:

* HDFC Savings
* SBI Savings
* Cash Wallet
* Investments

Each account contains:

* Account name
* Account type
* Current balance
* Interactive hover effect

The application also calculates an overall net position using the stored opening balance and recorded transaction activity.

> Account cards are local demo records and are not connected to live banking systems.

---

# 📊 Reports

The Reports section provides a current-month financial summary.

It includes:

* Reporting period
* Total income
* Total expenses
* Savings
* Savings rate
* Transaction count
* Top spending category
* Income vs expense visualization

Reports can also be:

* Exported as CSV
* Printed directly from the browser

---

# 📤 CSV Export

Finora includes transaction export functionality.

The exported CSV contains:

```text
Description
Category
Date
Amount
Type
```

Example:

```text
Monthly Salary,Salary,2026-09-01,60000,Income
Grocery Market,Food,2026-09-04,2850,Expense
Internet Bill,Bills,2026-09-06,999,Expense
```

The generated CSV can be opened in:

* Microsoft Excel
* Google Sheets
* LibreOffice Calc
* Other spreadsheet applications

---

# ⚙️ Settings

The Settings section allows customization of the local Finora workspace.

Available options include:

* Display name
* Email
* Currency preference
* Theme preference
* Opening balance

Settings are stored locally and automatically restored when the application is opened again.

---

# 🌈 Neon Portfolio-Style UI

Finora intentionally follows the same visual language as a modern personal developer portfolio.

The interface includes:

* Neon cyan highlights
* Purple accent lighting
* Pink ambient glow
* Dark background
* Glass-like panels
* Animated gradients
* Grid background
* Neon borders
* Soft glow effects
* Floating elements
* Hover transformations
* Smooth section transitions

The design is created primarily with CSS rather than relying on a large collection of external images.

---

# ✨ Animations & Interactions

The application includes multiple interactive effects.

### Navigation

* Fixed header
* Sticky header state
* Active section detection
* Animated navigation underline
* Responsive mobile navigation

### Home

* Animated rotating headline
* Floating finance cards
* Animated financial orb

### Sections

* Scroll reveal animations
* Scale transitions
* Slide-up effects
* Slide-down effects

### Cards

* Lift-on-hover
* Neon border glow
* Shadow transitions
* Icon transformations

### Buttons

* Glow effects
* Hover movement
* Background transitions
* Smooth color changes

### Circular Indicators

* Animated percentage markers
* Rotating visual rings
* Financial progress indicators

---

# 📱 Responsive Design

Finora is designed for:

### 🖥️ Desktop

Large multi-column layouts with the full navigation bar and detailed visual components.

### 💻 Laptop / Tablet

Layouts automatically resize and sections adapt to available space.

### 📱 Mobile

The navigation switches to a compact menu and the content reorganizes into mobile-friendly layouts.

Responsive behavior is implemented entirely with CSS media queries.

---

# 💾 Data Persistence

Finora uses the browser's built-in:

```text
localStorage
```

Stored data includes:

* Transactions
* Budgets
* Savings goals
* Account data
* Profile information
* Currency preference
* Theme preference
* Opening balance

Data remains available after refreshing or reopening the page in the same browser.

Because LocalStorage is browser-specific, data is stored locally on the current device and browser.

---

# 🔐 No Authentication

Finora intentionally does **not** use a Login or Create Account page.

The application opens directly to the finance interface.

This keeps the project:

* Simple
* Fast
* Frontend-only
* GitHub Pages compatible
* Easy to demonstrate

There is no server-side authentication or account system.

---

# 🛠️ Technologies Used

```text
HTML5
CSS3
JavaScript ES6+
LocalStorage
Web APIs
IntersectionObserver API
Responsive CSS
CSS Animations
CSS Gradients
Boxicons
```

---

# 📁 Project Structure

```text
Finora/
│
├── index.html
└── README.md
```

The current implementation can run as a **single HTML file** containing:

```text
HTML
CSS
JavaScript
```

No backend is required.

---

# 🚀 Running the Project

## Option 1 — Open Locally

Download the project and open:

```text
index.html
```

in Chrome, Edge, Firefox, or another modern browser.

---

## Option 2 — GitHub Pages

Finora can be deployed directly through **GitHub Pages**.

Basic deployment:

```text
GitHub Repository
        ↓
Upload index.html
        ↓
Enable GitHub Pages
        ↓
Open the generated GitHub Pages URL
```

No server-side hosting is required.

---

# 🔮 Future Improvements

Possible future improvements include:

* Backend authentication
* Cloud database integration
* User accounts
* Bank API integration
* Account-specific transaction tracking
* Recurring transactions
* Budget notifications
* Advanced financial charts
* Multiple currency support
* Monthly PDF reports
* Financial forecasting
* Cloud synchronization
* Mobile PWA support
* Expense receipt uploads
* Recurring bill automation

---

# 📸 Project Highlights

Finora demonstrates several frontend development concepts in one project:

```text
Responsive Design
Interactive UI
DOM Manipulation
LocalStorage
Dynamic Rendering
Data Filtering
Form Handling
CSV Generation
CSS Animations
Scroll Animations
Section Navigation
Mobile Navigation
Financial Calculations
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Mahi**

GitHub: [mahitech580](https://github.com/mahitech580)

Finora is part of a portfolio of practical frontend, full-stack, AI/ML, and software development projects.
