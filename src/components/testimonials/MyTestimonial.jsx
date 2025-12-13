// MyTestimonial.js
import React from 'react';
import './MyTestimonial.css'; // Include your CSS file for styling

function MyTestimonial({ text, author, image }) {
  return (
    <div className="my-testimonial">
      {image && <img src={image} alt="Author" className="author-image" />}
      <h2 className="testimonial-text">{text}</h2>
      <h2 className="testimonial-author">{author}</h2>
    </div>
  );
}

export default MyTestimonial;
