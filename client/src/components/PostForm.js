import React, { useState } from 'react';
import axios from 'axios';


function PostForm() {
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://cloudsek-intern-1.onrender.com/api/posts', newPost);
      setNewPost({ title: '', content: '' });
      // Optionally, you can fetch the posts again to update the list
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        name="title"
        value={newPost.title}
        onChange={handleChange}
        placeholder="Enter title"
        className="w-full border border-red-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="content"
        value={newPost.content}
        onChange={handleChange}
        placeholder="Enter content"
        className="w-full border border-red-300 rounded-md px-4 py-2 mb-2 resize-none focus:outline-none focus:border-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Create Post
      </button>
    </form>
  );
}

export default PostForm;
