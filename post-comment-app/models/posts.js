const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
