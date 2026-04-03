# Node.js Routes and Paths

## Overview
This project demonstrates how routing and file paths work using Node.js without frameworks. It focuses on handling different URL routes, serving static files, and organizing backend logic.

## Features
- Built using Node.js native `http` module
- Basic routing based on URL paths
- Serving static files (HTML, CSS, images)
- Handling different content types
- Modular utility functions

## Tech Stack
- Node.js
- JavaScript (ES6+)

## Getting Started

### 1. Install Dependencies
Navigate into the project folder and run:

```bash
npm install
```

### 2. Run the Server

```bash
node server.js
```

### 3. Server Info
The server runs on:

```text
http://localhost:8000
```

## Routes

### Home Route

```text
GET /
```

Serves the main HTML page.

---

### Static Files

The server serves files from the public directory, such as:

```text
/public/index.html
/public/styles.css
/public/images/
```

These are automatically returned when requested by the browser.

---

### Other Routes

Handles different URL paths and returns appropriate responses based on the route logic defined in `server.js`.

---

### Invalid Route

If a route does not exist, the server returns an error response.

## Key Concepts Demonstrated
- Creating a server using Node.js `http`
- Routing based on URL paths
- Serving static files manually
- Working with file paths in Node.js
- Setting correct content types

## Notes
- No frameworks like Express are used
- Designed to understand core Node.js routing concepts
- Useful foundation before learning Express

## Future Improvements
- Refactor using Express.js for cleaner routing
- Add dynamic routes
- Improve error handling
- Implement middleware patterns