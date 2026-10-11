# 🚀 PulseAdmin — Enterprise React Admin & Commerce Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://react-admin-dashboard-iota-rosy.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

An enterprise-ready, responsive, full-featured **Admin & Commerce Dashboard** built with **React 19**, **Vite**, **Redux Toolkit**, and **DummyJSON REST API**.

🔗 **Live Deployment:** [https://react-admin-dashboard-iota-rosy.vercel.app](https://react-admin-dashboard-iota-rosy.vercel.app)

---

## ⚡ Quick Demo Access (For Interviewers & Reviewers)

To evaluate the live application without registering manually:
1. Navigate to [Login Page](https://react-admin-dashboard-iota-rosy.vercel.app/login)
2. Click **"1-Click Demo Admin Login"** to enter the authenticated admin panel instantly.

---

## 🌟 Key Features

* 📊 **Interactive Analytics Dashboard:** Real-time metrics with Chart.js visualizations (earnings, expenses, and pending tasks).
* 📦 **Product Management (Full CRUD):**
  * Search, brand & category filtering, and pagination.
  * Add new products with image upload preview and local persistence.
  * Edit & delete products with SweetAlert2 confirmation dialogs.
  * Direct "Add to Cart" dispatch with Redux Toolkit.
* 👥 **User Management:** View customer directories, contact cards, edit user details, and handle user states.
* 🛒 **Cart & Orders Management:** Redux-powered shopping cart (`MyCart`) with quantity counters, total price calculation, and order tracking.
* 💬 **Content & CMS:** Quotes management, Todos tracking, Blog Posts, and Comments tables.
* 🔐 **Authentication & Protected Routes:** React Router v7 route guards (`ProtectedRoute`) securing all admin routes.
* 📱 **SB Admin 2 Responsive Layout:** Collapsible sidebar, sticky topbar with user dropdown and alert modals.
* 🌐 **Production Vercel Ready:** SPA rewrites configured via `vercel.json` and Netlify `_redirects` to eliminate 404s on page refresh.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 (Hooks, Context, Lazy State) |
| **Build Tool** | Vite 8 (Hot Module Replacement) |
| **Global State** | Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) |
| **Routing** | React Router DOM v7 (Nested & Protected Routes) |
| **UI Framework** | Bootstrap 5 + SB Admin 2 Design System |
| **Data Visualizations** | Chart.js & react-chartjs-2 |
| **Alerts & Modals** | SweetAlert2 |
| **Icons** | React Icons & FontAwesome 5 |
| **API Integration** | Axios & DummyJSON REST API |
| **Deployment** | Vercel (CI/CD Git Deployment) |

---

## 📂 Project Structure

```text
src/
├── api/                  # Axios API instance and endpoint callers
├── components/           # Reusable data tables, modals, navbar & sidebar
├── context/              # Authentication context & persistent session
├── layouts/              # AdminLayout with Topbar, Sidebar & Footer
├── pages/                # Dashboard, Products, Users, Cart, CMS, Landing pages
├── redux/                # Redux Toolkit store, authSlice & cartSlice
├── styles/               # CSS stylesheets & theme variables
├── App.jsx               # Route definitions & ProtectedRoute wrappers
└── main.jsx              # React root entry point
```

---

## ⚙️ Local Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/ayushman1729/react-admin-dashboard.git

# 2. Navigate into project
cd react-admin-dashboard

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production
npm run build
```

---

## 👨‍💻 Author

**Ayushman Singh**
* **GitHub:** [@ayushman1729](https://github.com/ayushman1729)
* **LinkedIn:** [ayushman1729](https://www.linkedin.com/in/ayushman1729/)
