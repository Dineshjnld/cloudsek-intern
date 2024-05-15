import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ postId, onCommentSubmit }) {
  const [newComment, setNewComment] = useState('');

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://cloudsek-intern-1.onrender.com/api/posts/${postId}/comments`, { content: newComment });
      const updatedComments = response.data.comments;
      onCommentSubmit(updatedComments);
      setNewComment('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={newComment}
        onChange={handleChange}
        placeholder="Add a comment"
        className="w-full border border-gray-300 rounded-md px-4 py-2 mb-2 resize-none focus:outline-none focus:border-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Add Comment
      </button>
    </form>
  );
}

export default CommentForm;
