// Import Express.js framework
const express = require('express');

// Create Express application instance
const app = express();

// Define first endpoint - returns "Hello world"
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Define second endpoint - returns "Good evening"
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Initialize HTTP server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
