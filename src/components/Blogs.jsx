// Blogs.jsx
import React from 'react';
import BlogPost from './BlogPost';
import './Blogs.css'; // Include your CSS file for styling

function Blogs({ posts }) {
  return (
    <div className="blogs">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
}

export default Blogs;
