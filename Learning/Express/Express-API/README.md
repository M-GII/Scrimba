# Express API (Startup Dataset)

## Overview
This project is a RESTful API built with Express.js that serves and filters a dataset of startups. It demonstrates routing, controllers, query parameter filtering, path parameter filtering, and JSON responses in a structured backend application.

## Features
- Built with Express.js
- CORS enabled
- Modular route and controller structure
- Query parameter filtering
- Path parameter filtering
- JSON API responses
- Custom 404 handler for invalid endpoints

## Tech Stack
- Node.js
- Express.js
- JavaScript (ES6+)
- CORS

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

### 3. Server Info
The server runs on:

```text
http://localhost:8000
```

## API Endpoints

### Get All Startups

```text
GET /api
```

Returns the full startup dataset.

### Filter Startups with Query Parameters

```text
GET /api?industry=FinTech
GET /api?country=Canada
GET /api?continent=Europe
GET /api?is_seeking_funding=true
GET /api?has_mvp=false
```

You can also combine filters:

```text
GET /api?continent=Europe&has_mvp=true
GET /api?industry=HealthTech&is_seeking_funding=true
```

### Filter Startups with Path Parameters

```text
GET /api/:field/:term
```

Supported fields:

```text
country
continent
industry
```

Examples:

```text
GET /api/country/Canada
GET /api/continent/Asia
GET /api/industry/FinTech
```

### Invalid Path Parameter Field

If a field other than `country`, `continent`, or `industry` is used, the API returns:

```json
{
  "message": "Search field not allowed. Please use only country, continent, industry"
}
```

### Invalid Endpoint

If an endpoint does not exist, the API returns:

```json
{
  "message": "Endpoint not found. Please check the API documentation."
}
```

## Key Concepts Demonstrated
- Building an API with Express.js
- Using `express.Router()` for modular routes
- Separating logic into controllers
- Handling query parameters with `req.query`
- Handling path parameters with `req.params`
- Filtering data dynamically
- Returning structured JSON responses
- Enabling cross-origin requests with CORS

## Notes
- This project uses a local in-memory dataset
- No database is used in this version
- Designed as a backend learning project to practice Express API fundamentals

## Future Improvements
- Add a real database such as SQLite or MongoDB
- Add POST, PUT, and DELETE endpoints
- Add request validation and better error handling
- Add authentication and protected routes
- Deploy the API