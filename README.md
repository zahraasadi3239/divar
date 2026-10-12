# Divar Clone — React Marketplace Application

A marketplace front-end application inspired by Divar, built with React and modern JavaScript tools. The project focuses on creating an interactive classified-advertisement experience with user authentication flows, advertisement browsing, and separate user and admin interfaces.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/zahraasadi3239/divar
- **Live Demo:** Add the deployed application URL here, if available.

## ✨ Features

### 🔐 Authentication and User Access

- Mobile-number login interface with OTP verification
- Authentication state management
- Protected routes for restricted pages
- Separate user and admin interfaces
- Logout functionality

### 🏷️ Marketplace

- Browse classified advertisements
- Select a city
- Create advertisements
- Access a user dashboard
- Navigate account-related pages

### 🛡️ Admin Interface

- Dedicated admin interface
- Restricted admin routes
- Advertisement management interface
- User management interface

*Some features may depend on the backend service and its configuration.*

## 🛠️ Technologies Used

- **React** — Component-based UI development
- **JavaScript (ES6+)** — Application logic
- **React Router** — Client-side routing
- **Redux Toolkit** — Application state management
- **TanStack React Query** — Server-state management and data fetching
- **CSS Modules** — Component-scoped styling
- **React Toastify** — User notifications
- **Vite** — Development server and build tooling

## 🏗️ Project Structure

The application is organized into reusable components, pages, routing, state management, services, utilities, and styling.

```text
divar/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── routes/
│   └── styles/
├── index.html
├── package.json
└── README.md
```

*This is an illustrative structure. Directory names may differ from the actual repository.*

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### 1. Clone the repository

```bash
git clone https://github.com/zahraasadi3239/divar.git
```

### 2. Navigate to the project directory

```bash
cd divar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## 🔌 Backend Configuration

Features such as OTP authentication, advertisement data, user information, and administrative operations may require a separately configured backend.

Before running the complete application:

- Configure the required API base URL.
- Set up any required environment variables.
- Ensure the backend service is available if the application depends on it.

Never publish passwords, private API keys, access tokens, or real user credentials in the repository.

## 🎯 Project Goals

This project demonstrates practical front-end development concepts, including:

- Building reusable React components
- Managing application state with Redux Toolkit
- Fetching and managing API data with TanStack React Query
- Implementing client-side routing
- Organizing frontend code into maintainable modules
- Building marketplace-style user interfaces
- Integrating frontend features with API services

## 🔮 Future Improvements

- Expand automated test coverage
- Improve accessibility and keyboard navigation
- Refine responsive layouts
- Improve loading, error, and empty states
- Document backend setup and environment variables
- Add screenshots demonstrating the application's main features

## 👩‍💻 Author

**Zahra Asadi**

Front-End Developer focused on building responsive, user-friendly web applications with JavaScript, React, and Next.js.

- **GitHub:** https://github.com/zahraasadi3239

## 📄 License

Add the appropriate license information after confirming the license included in the repository.
