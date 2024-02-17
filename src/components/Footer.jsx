import React from "react";
import "./Footer.css"; // Include your CSS file for styling

function Footer() {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }

  return (
    <>
      <footer className="footer">
        <div class="sde">
          <center>
            <hr width="80%" />
            <h6>Hope This will go long way popularizing</h6>
          </center>
        </div>
        <div className="footer-content">
          <p>© 2024 Made By Mohan Yadav. All rights reserved.</p>
          <p>
            <b>Language:</b>
          </p>
          <div id="google_translate_element"></div>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
