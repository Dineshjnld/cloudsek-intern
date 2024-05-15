const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Create a comment for a post
router.post('/:postId/comments', async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    const newComment = {
      content: content,
      date: new Date()
    };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json({ comments: post.comments });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
