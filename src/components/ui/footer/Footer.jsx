import React from "react";
import "./Footer.css"; // Link to the new CSS file

// Import icons (you'd typically use a library like react-icons)
// For this example, we'll use simple text/emoji or assume icon components exist:
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // NOTE: The Google Translate function should ideally be called in a
  // useEffect hook or from an external script to ensure the necessary
  // library is loaded, but we'll keep the structure similar for now.
  /*
  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }
  */

  return (
    <footer className="new-footer">
      {/* Top Section: Branding & Links */}
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Mohan Yadav</h3>
          <p>Innovating one component at a time.</p>
          <div className="social-links">
            {/* Replace with actual icon components (e.g., FaFacebook) */}
            <a href="https://facebook.com" aria-label="Facebook">
              <span role="img" aria-label="Facebook">
                📘
              </span>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <span role="img" aria-label="Twitter">
                🐦
              </span>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <span role="img" aria-label="LinkedIn">
                🔗
              </span>
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <span role="img" aria-label="GitHub">
                💻
              </span>
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Support & Legal</h4>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Contact</h4>
          <p>Email: mohan.yadav@example.com</p>
          <p>Phone: +91 98765 43210</p>
          {/* Optional: Language Selector */}
          <div className="language-selector">
            <b>Language:</b>
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
      
      <hr className="footer-divider" />

      {/* Bottom Section: Copyright & Disclaimer */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Made By Mohan Yadav. All rights
          reserved.
        </p>
        <p className="disclaimer">
          *This project aims to popularize open-source development and modern web practices.
        </p>
      </div>
    </footer>
  );
};

export default Footer;