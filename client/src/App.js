import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
