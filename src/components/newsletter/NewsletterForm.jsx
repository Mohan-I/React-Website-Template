// NewsletterForm.js
import React, { useState } from "react";
import "./NewsletterForm.css"; // Include your CSS file for styling

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the newsletter subscription data to the server or perform any other action
    console.log({ email, name, interests });
    // Optionally, reset the form fields
    setEmail("");
    setName("");
    setInterests("");
  };

  return (
    <div className="newsletter-form">
      <h2 className="writer2">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="s-bar"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <input
          className="s-bar"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <textarea
          className="s-bar"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Your Interests (optional)"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterForm;
