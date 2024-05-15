import React from 'react';

function Comment({ comment }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-2">
      <p className="text-gray-800">{comment.content}</p>
    </div>
  );
}

export default Comment;
