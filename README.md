# Divar Clone — React Marketplace Application

A front-end marketplace application inspired by Divar, built with React and modern front-end tools. The project focuses on creating an interactive classified-ads experience, with user authentication flows, advertisement browsing, and role-based interfaces.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/zahraasadi3239/divar
- **Live Demo:** Add the deployed application URL here, if available.

## ✨ Features

### 🔐 Authentication and Authorization

- Mobile-number login interface with OTP verification
- Authentication state management
- Protected routes for restricted pages
- User and admin interface separation
- Logout functionality

### 🏷️ Marketplace Features

- Browse advertisements
- Select a city
- Create advertisements
- Access a user dashboard
- Navigate account-related options

### 🛠️ Admin Interface

- Dedicated admin interface
- Restricted admin routes
- Advertisement management interface
- User management interface

*Feature availability may depend on the backend service and its configuration.*

## 🧰 Technologies Used

- **React** — Component-based UI development
- **React Router** — Client-side routing
- **Redux Toolkit** — Application state management
- **TanStack React Query** — Server-state management and data fetching
- **CSS Modules** — Component-scoped styling
- **React Toastify** — User notifications
- **Vite** — Development server and build tooling

## 🏗️ Project Structure

The frontend source code is organized into reusable components, pages, state management, services, routing, utilities, and styling.

```text
src/
├── components/
├── pages/
├── redux/
├── services/
├── utils/
├── routes/
└── styles/
```

The exact contents of each directory may vary according to the current implementation.

## 🚀 Getting Started

### Prerequisites

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

Open the local URL printed by Vite in your terminal.

## 🔌 Backend Configuration

Some application features, such as OTP authentication, user information, advertisements, and admin operations, may require a backend service.

If a backend is required, configure the appropriate API URL and environment variables according to the project's existing configuration. Do not publish passwords, private API keys, access tokens, or real user credentials in the repository.

## 🎯 Project Goals

This project was developed to practice and demonstrate:

- Building reusable React components
- Managing application state with Redux Toolkit
- Fetching and managing API data with TanStack React Query
- Implementing client-side routing and protected pages
- Organizing frontend code into maintainable modules
- Building marketplace-style user interfaces
- Integrating frontend features with API services

## 🔮 Future Improvements

- Add or improve automated tests
- Improve accessibility and keyboard navigation
- Refine responsive layouts
- Enhance loading, error, and empty states
- Document backend setup and environment variables, if applicable

## 👩‍💻 Author

**Zahra Asadi**

Front-End Developer focused on building responsive web applications with JavaScript, React, and Next.js.

- **GitHub:** https://github.com/zahraasadi3239

## 📄 License

Add the license information here once the repository's license has been confirmed.
