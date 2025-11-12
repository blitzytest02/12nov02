# 12nov02

Node.js tutorial project demonstrating Express.js framework integration with multiple HTTP endpoints.

## Overview

This is an educational tutorial project that shows how to create a simple web server using Node.js and Express.js. The server implements two static endpoints that return plain text responses, demonstrating the fundamentals of Express.js routing and request handling.

## Learning Objectives

- Integrate Express.js framework into a Node.js project
- Create and configure an Express application instance
- Implement multiple HTTP GET endpoints
- Handle HTTP requests and send responses
- Start an HTTP server and bind it to a port

## Prerequisites

- **Node.js**: >= 14.0.0 (project tested with v20.19.5)
- **npm**: Package manager for installing dependencies (comes with Node.js)
- **Available Port**: Port 3000 must be available on your system

## Installation

1. Clone or download this repository to your local machine

2. Navigate to the project directory:
   ```bash
   cd 12nov02
   ```

3. Install dependencies (Express.js and its dependencies):
   ```bash
   npm install
   ```

   This command downloads Express.js version 4.21.2 and all required dependencies into the `node_modules/` directory.

## Usage

### Starting the Server

Run the server using the npm start script:

```bash
npm start
```

Alternatively, you can run the server directly with Node.js:

```bash
node server.js
```

### Expected Output

When the server starts successfully, you should see:

```
Server listening on port 3000
```

The server is now running and ready to accept HTTP requests.

## API Endpoints

The server provides two HTTP GET endpoints:

| Method | Path | Response | Description |
|--------|------|----------|-------------|
| GET | `/` | "Hello world" | Root endpoint returning a greeting |
| GET | `/evening` | "Good evening" | Evening greeting endpoint |

## Testing the Endpoints

### Using curl

Test the root endpoint:
```bash
curl http://localhost:3000/
```
Expected response: `Hello world`

Test the evening endpoint:
```bash
curl http://localhost:3000/evening
```
Expected response: `Good evening`

### Using a Web Browser

Open your web browser and navigate to:
- `http://localhost:3000/` - Should display "Hello world"
- `http://localhost:3000/evening` - Should display "Good evening"

## Project Structure

```
12nov02/
├── server.js           # Main application file with Express server
├── package.json        # Project manifest and dependencies
├── package-lock.json   # Locked dependency versions
├── node_modules/       # Installed dependencies (created by npm install)
├── .gitignore         # Git exclusion patterns
└── README.md          # This file
```

## Code Structure

The `server.js` file contains the complete server implementation:

1. **Express Import**: Imports the Express.js framework
2. **App Initialization**: Creates an Express application instance
3. **Route Definitions**: Defines two GET endpoints (/ and /evening)
4. **Server Startup**: Initializes the HTTP server on port 3000

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js v4.21.2**: Web application framework for Node.js

## Extension Exercises

To expand your learning, try adding:

1. Additional endpoints with different paths
2. Query parameter handling (e.g., `/greet?name=John`)
3. URL parameters (e.g., `/user/:id`)
4. Different HTTP methods (POST, PUT, DELETE)
5. JSON responses instead of plain text
6. Custom middleware for logging requests

## License

MIT