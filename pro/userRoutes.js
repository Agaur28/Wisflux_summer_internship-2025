const express = require('express');
const { getUsers, createUser } = require('../models/userModel');
const { getPostsByUser } = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id/posts', async (req, res) => {
  try {
    const posts = await getPostsByUser(req.params.id);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
