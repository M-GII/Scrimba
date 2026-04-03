# Express Fullstack API with Authentication

## Overview
This project is a fullstack backend application built with Express.js that includes user authentication, session management, and a SQLite database. It demonstrates how to build a structured backend with routes, controllers, and persistent user data.

## Features
- User authentication (login/register)
- Session-based authentication
- SQLite database integration
- RESTful API routes
- Modular structure (routes, controllers, database)
- JSON request and response handling

## Tech Stack
- Node.js
- Express.js
- SQLite
- express-session
- JavaScript (ES6+)

## Getting Started

### 1. Install Dependencies
Navigate into the project folder and run:

```bash
npm install
```

### 2. Run the Server

```bash
npm start
```

or

```bash
node server.js
```

### 3. Server Info
The server runs on:

```text
http://localhost:8000
```

## API Endpoints

### Authentication

#### Register User
```text
POST /auth/register
```

#### Login User
```text
POST /auth/login
```

#### Get Current User
```text
GET /me
```

---

### Products

```text
GET /products
```

Returns all products.

---

### Cart

```text
GET /cart
POST /cart
DELETE /cart/:id
```

Handles user cart operations.

---

## Key Concepts Demonstrated
- Building APIs with Express.js
- Using `express-session` for authentication
- Storing user data in SQLite
- Structuring backend with routers and controllers
- Handling protected routes
- Managing user-specific data (cart)

## Notes
- Uses session-based authentication (not JWT)
- Database is local (SQLite)
- Designed as a learning project for fullstack backend development

## Future Improvements
- Add password hashing (bcrypt)
- Replace sessions with JWT authentication
- Add validation and error handling middleware
- Deploy backend and connect to frontend