const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// Create a post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get post by ID
router.get('/:postId', async (req, res) => {
  // Implement logic to get post by ID
});

module.exports = router;
