// Blogs.jsx
import React from 'react';
import BlogPost from './BlogPost';
import './Blogs.css'; // Include your CSS file for styling

function Blogs({ posts }) {
  return (
    <div className="blogs">
      {posts.map((post, index) => (
        // Add index to BlogPost to calculate animation delay
        <BlogPost key={index} post={post} index={index} /> 
      ))}
    </div>
  );
}

export default Blogs;