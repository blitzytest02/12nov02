# 12nov02

## Overview

This is a Node.js tutorial project demonstrating Express.js framework integration with multiple HTTP endpoints. The application showcases basic Express.js routing patterns and response handling for educational purposes, providing a foundation for understanding web server development with Node.js.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** >= 14.0.0 (current version in use: v20.19.5)
- **npm** package manager (comes bundled with Node.js)
- An available network port (default: 3000)

## Installation

1. Clone or download this repository to your local machine

2. Install dependencies by running:
   ```bash
   npm install
   ```
   
   This command downloads Express.js and its dependencies into the `node_modules/` directory.

## Usage

Start the server using the npm script:

```bash
npm start
```

**Expected console output:**
```
Server listening on port 3000
```

**Alternative execution method:**
```bash
node server.js
```

The server will bind to `http://localhost:3000` and begin accepting HTTP requests.

## Endpoints

The server provides the following HTTP endpoints:

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | "Hello world" |
| GET | `/evening` | "Good evening" |

## Testing

You can test the endpoints using curl commands:

**Test the root endpoint:**
```bash
curl http://localhost:3000/
```
**Expected response:** `Hello world`

**Test the evening endpoint:**
```bash
curl http://localhost:3000/evening
```
**Expected response:** `Good evening`

Alternatively, open the URLs in your web browser:
- http://localhost:3000/
- http://localhost:3000/evening

## Learning Outcomes

This tutorial demonstrates the following key concepts:

- **Express.js Framework Integration**: Installing and importing Express.js into a Node.js project
- **Routing**: Defining multiple GET endpoints with distinct paths
- **Response Handling**: Using `res.send()` to return plain text responses
- **Server Initialization**: Binding an HTTP server to a specific port with startup logging

## Next Steps

To extend your learning, consider adding:
- URL parameters (e.g., `/greet/:name`)
- Query string handling (e.g., `/search?q=term`)
- Additional HTTP methods (POST, PUT, DELETE)
- Request body parsing for form submissions
- Custom middleware functions
