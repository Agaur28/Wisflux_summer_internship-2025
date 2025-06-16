// Basic Express.js server
const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.json({ status: 'Message received!', data: req.body });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
