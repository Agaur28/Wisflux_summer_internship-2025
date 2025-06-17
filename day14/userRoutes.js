const express = require('express');
const router = express.Router();

// Query parameter example
router.get('/search', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Searching for: ${name}`);
});

// Route parameter example
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

module.exports = router;
