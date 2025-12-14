// BlogPost.jsx
import React from 'react';

function BlogPost({ post, index }) {
  // Use index to create a staggered entry delay class
  const delayClass = `delay-${index}`;

  return (
    <div className={`blog-post animate-card-in ${delayClass}`}>
      <img src={post.image} alt={post.title} />
      <h2><b>{post.title}</b></h2>
      <p className="blog-content">{post.content}</p>
      {/* Add a subtle footer line */}
      <div className="blog-footer">
          <span className="read-more">Access Data Log &gt;</span>
      </div>
    </div>
  );
}

export default BlogPost;