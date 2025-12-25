# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
///////////////
# Divar Clone – Portfolio Project

A full-featured clone of **Divar.ir**, built as a **resume-grade portfolio project** to demonstrate real-world front-end development skills, authentication flows, role-based access control, and integration with a custom backend.

This project closely mimics the behavior and user experience of the original Divar platform.

---

## 📌 Project Overview

This application allows users to log in using a mobile number and OTP authentication, browse and create advertisements, and access different parts of the app based on their role (User or Admin).

The project includes both **frontend and backend implementations**, making it a complete, production-like application.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Login with mobile number (OTP-based authentication)
- Access token & refresh token handling
- Secure logout functionality
- Protected routes
- Role-based access control (User / Admin)

### 👤 User Features
- City selection
- View advertisements
- Create new advertisements
- User dashboard
- Account dropdown menu

### 🛠 Admin Features
- Dedicated admin panel
- Admin-only protected routes
- Advertisement management
- User management

> 🔑 **Admin Test Account**  
> Use the following mobile number to log in as an admin:
>
> **09180009988**

---

## 🧰 Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit
- TanStack React Query
- CSS Modules
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (Access & Refresh Tokens)
- OTP Authentication
- Role-Based Authorization (RBAC)

> The backend is fully implemented and included in the repository.

---

## 🔄 Application Flow

1. User enters mobile number
2. OTP is sent from the backend
3. User verifies OTP
4. Access & refresh tokens are stored
5. User profile is fetched
6. Role is determined (User or Admin)
7. Routes are protected based on role

---

## 📁 Project Structure (Frontend)

```txt
src/
├── components/
├── pages/
├── redux/
├── services/
├── utils/
├── routes/
└── styles/
//
▶️ Getting Started
Install dependencies
npm install

Run the project
npm run dev

🧠 Notes

This project is built with a focus on clean architecture and best practices

Authentication and authorization logic are fully functional

The admin panel is protected both on UI and route level

Designed to simulate a real production environment

🎯 Purpose

This project was developed as a portfolio project to showcase practical front-end development skills using modern React tools and real backend integration.