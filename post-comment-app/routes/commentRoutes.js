const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a comment for a post
router.post('/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    post.comments.push({ content });
    await post.save();

    res.status(201).json(post.comments);
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
});

module.exports = router;
