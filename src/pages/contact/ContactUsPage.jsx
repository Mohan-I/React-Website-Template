import React from "react";
import "./ContactUsPage.css"; // Include your CSS file for styling
//import mapImage from "../components/assets/images/world.png";
// Import your map image

function ContactUsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div
        className={`ContactUsPage ${isDarkMode ? "dark-mode" : "light-mode"}`}
      >
        <header>
          <div className="container">
            <div className="left">
              <button onClick={toggleDarkMode}>
                {isDarkMode ? "🌕" : "🌙"}
              </button>
            </div>

            <div className="right">
              <Navbar />
            </div>
          </div>
        </header>
        <main>
          {/* The content must go here */}
          <Banner />
          <div className="contact-us-page">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>Email: info@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
            <div className="map">
             {/* // <img src={mapImage} alt="Map" /> */}
            </div>
          </div>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default ContactUsPage;
