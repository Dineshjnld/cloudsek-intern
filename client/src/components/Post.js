import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

function Post({ post }) {
  const [comments, setComments] = useState(post.comments || []);

  const handleCommentSubmit = (updatedComments) => {
    setComments(updatedComments);
  };

  return (
    <div className="bg-green-100 shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
      <p className="text-black">{post.content}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <CommentForm postId={post._id} onCommentSubmit={handleCommentSubmit} />
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
