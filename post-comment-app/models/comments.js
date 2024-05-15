const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
