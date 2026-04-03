# RESTful API (Node.js - Destinations API)

## Overview
This project is a RESTful API built using Node.js (without Express) that serves and filters destination data. It demonstrates how to handle HTTP requests, parse URLs, and implement both query and path parameter filtering.

## Features
- Built using Node.js native `http` module
- REST-style routing
- Query parameter filtering
- Path parameter filtering
- JSON response handling

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

## API Endpoints

### Get All or Filtered Data (Query Params)

```text
GET /api
```

Example:

```text
/api?continent=Europe
/api?country=Canada
```

### Filter by Continent (Path Param)

```text
GET /api/continent/:continent
```

Example:

```text
/api/continent/Asia
```

### Filter by Country (Path Param)

```text
GET /api/country/:country
```

Example:

```text
/api/country/Canada
```

### Invalid Route
Returns:

```json
{
  "error": "not found",
  "message": "The requested route does not exist"
}
```

## Key Concepts Demonstrated
- Creating a server using Node.js `http`
- Parsing URLs using the `URL` API
- Handling query parameters vs path parameters
- Sending structured JSON responses

## Notes
- No frontend is included
- No external frameworks like Express are used
- Designed as a backend learning project

## Future Improvements
- Add Express.js for scalable routing
- Integrate a real database such as SQLite or MongoDB
- Add POST, PUT, and DELETE endpoints
- Implement authentication
- Deploy the API