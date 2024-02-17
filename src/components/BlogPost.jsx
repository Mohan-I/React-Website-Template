// BlogPost.jsx
import React from 'react';

function BlogPost({ post }) {
  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} />
      <h2><b>{post.title}</b></h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
