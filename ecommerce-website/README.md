# Ecommerce Website

A modern, responsive ecommerce website built with React and Vite.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Contributing](#contributing)

## Overview

This is a fully functional ecommerce website that provides users with the ability to browse products, manage their shopping cart, and complete purchases. The application includes user authentication and a responsive design for optimal viewing on all devices.

## Features

- User authentication and authorization
- Product browsing and search functionality
- Shopping cart management
- Product details page with comprehensive information
- Checkout process
- Responsive navigation bar
- Context-based state management for authentication and cart

## Project Structure

```
ecommerce-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the local development URL (typically http://localhost:5173)

3. Browse products, add items to your cart, and proceed to checkout

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Technologies

- React 19.2.0 - JavaScript library for building user interfaces
- Vite 7.3.1 - Next-generation frontend build tool
- React Router DOM 7.13.1 - Client-side routing for React applications
- React Hook Form 7.71.2 - Efficient forms management

## Dependencies

- react: ^19.2.0
- react-dom: ^19.2.0
- react-hook-form: ^7.71.2
- react-router-dom: ^7.13.1

## Dev Dependencies

- @eslint/js: ^9.39.1
- @types/react: ^19.2.7
- @types/react-dom: ^19.2.3
- @vitejs/plugin-react: ^5.1.1
- eslint: ^9.39.1
- eslint-plugin-react-hooks: ^7.0.1
- eslint-plugin-react-refresh: ^0.4.24
- globals: ^16.5.0
- vite: ^7.3.1

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue for any bugs or feature requests.
