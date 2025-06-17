// Express app with Router and Middleware
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');

// Middleware to parse JSON
app.use(express.json());

// Custom logging middleware
app.use(logger);

// Use user routes
app.use('/user', userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
