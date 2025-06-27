const express = require('express');
const { getPosts, createPost } = require('../models/postModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, user_id } = req.body;
    const post = await createPost(title, content, user_id);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
