# Ecommerce Website React

A modern, responsive ecommerce website built with React and Vite.

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
- Fast development experience with Vite
- Code quality maintained with ESLint

## Project Structure

```
ecommerce-website-react/
├── ecommerce-website/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── pages/
│   │   │   ├── Auth.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Home.jsx
│   │   │   └── ProductDetails.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
└── .git/
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-website-react/ecommerce-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at http://localhost:5173

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized build will be generated in the `dist` directory.

## Code Quality

To check code quality with ESLint:

```bash
npm run lint
```

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Technologies

- React 19.2.0 - JavaScript library for building user interfaces
- Vite 7.3.1 - Next-generation frontend build tool with lightning fast build times
- React Router DOM 7.13.1 - Client-side routing for React applications
- React Hook Form 7.71.2 - Efficient forms management with great performance

## Core Dependencies

- react: ^19.2.0 - Core React library
- react-dom: ^19.2.0 - React DOM rendering
- react-hook-form: ^7.71.2 - Form state management
- react-router-dom: ^7.13.1 - Client-side routing

## Development Dependencies

- @eslint/js: ^9.39.1 - ESLint configuration
- @types/react: ^19.2.7 - React type definitions
- @types/react-dom: ^19.2.3 - React DOM type definitions
- @vitejs/plugin-react: ^5.1.1 - React plugin for Vite
- eslint: ^9.39.1 - Code linter
- eslint-plugin-react-hooks: ^7.0.1 - React hooks linter
- eslint-plugin-react-refresh: ^0.4.24 - React refresh support
- globals: ^16.5.0 - Global variable definitions
- vite: ^7.3.1 - Build tool and dev server

## Application Structure

### Pages

- **Home** - Main landing page displaying all products
- **Auth** - User authentication (login/signup)
- **ProductDetails** - Detailed view of a single product
- **Checkout** - Shopping cart and checkout process

### Components

- **Navbar** - Main navigation component with links to key pages
- **ProductCard** - Reusable component for displaying product information

### Context

- **AuthContext** - Manages user authentication state globally
- **CartContext** - Manages shopping cart state globally

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:5173 in your browser
4. Browse products and test the ecommerce functionality

## Best Practices

- Components are organized in logical folders
- Context API is used for global state management
- React Router is used for client-side routing
- Form handling is simplified with React Hook Form
- Code quality is maintained with ESLint

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License

This project is open source and available under the MIT License.

## Support

For support, please open an issue on the repository or contact the development team.
