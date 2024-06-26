import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();

    const intervalId = setInterval(fetchPosts, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://cloudsek-intern-1.onrender.com/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCommentSubmit = (postId, updatedComments) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, comments: updatedComments } : post
      )
    );
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} onCommentSubmit={handleCommentSubmit} />
      ))}
    </div>
  );
}

export default PostList;
