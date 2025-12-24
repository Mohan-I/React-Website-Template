import React from "react";
import "./ContactUsPage.css";

function ContactUsPage() {
  return (
    <div className="cyber-container">
      <main className="contact-wrapper">
        <h1 className="glitch-text" data-text="TRANSMISSION_INIT">CONTACT<br />_US</h1>
        
        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="info-card">
            <div className="card-header">SYSTEM_INFO</div>
            <div className="card-body">
              <div className="info-item">
                <span className="label">EMAIL:</span>
                <span className="value">info@neon-net.io</span>
              </div>
              <div className="info-item">
                <span className="label">VOICE:</span>
                <span className="value">+1 (123) 456-7890</span>
              </div>
              <div className="info-item">
                <span className="label">LOC:</span>
                <span className="value">Sector 7, Night City</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="USER_ID" required />
              <div className="bar"></div>
            </div>
            <div className="input-group">
              <input type="email" placeholder="ENCRYPTED_MAIL" required />
              <div className="bar"></div>
            </div>
            <div className="input-group">
              <textarea placeholder="SECURE_MESSAGE" rows="4"></textarea>
              <div className="bar"></div>
            </div>
            <button type="submit" className="cyber-btn">
              SEND_SIGNAL
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactUsPage;