# 🚀 SWIFT Dashboard - React Frontend Project

A clean, responsive dashboard UI built using **React.js**, featuring a profile card and a comment data table with pagination, sorting, searching, and ellipsis truncation for long content. It consumes public APIs to fetch dummy user and comment data.

---

## 📂 Project Structure

```
SWIFT-Dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── CommentCell.js
│ │ ├── CommentTable.css
│ │ ├── CommentTable.js
│ │ ├── Header.css
│ │ ├── Header.js
│ │ ├── Pagination.css
│ │ ├── Pagination.js
│ ├── pages/
│ │ ├── Dashboard.css
│ │ ├── Dashboard.js
│ │ ├── Profile.css
│ │ ├── Profile.js
│ ├── utils/
│ │ ├── localStorageHelper.js
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ ├── index.js
├── package.json
├── README.md


```

---

## 📦 Features

- ✅ Responsive two-column dashboard layout
- ✅ Static user profile card
- ✅ Comment table with:
  - Sorting (Post ID, Name, Email)
  - Search filter
  - Pagination (10 per page)
  - Truncated content with ellipsis
- ✅ No horizontal or vertical scrollbars (fixed height, auto-fit)
- ✅ Clean UI using plain CSS

---

## 🛠️ Tech Stack

- ⚛️ React.js (CRA)
- 🎨 CSS (plain, no framework)
- 📡 JSONPlaceholder API

---

## 🌐 APIs Used

- **User API:** `https://jsonplaceholder.typicode.com/users/1`
- **Comments API:** `https://jsonplaceholder.typicode.com/comments`

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SuryaKumar9595/swift-dashboard.git
cd swift-dashboard
