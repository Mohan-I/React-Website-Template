import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom"
import img from '../../../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    // Only close if the current window width is considered "mobile"
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Handle scroll effect: apply 'scrolled' class after scrolling down 10px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand/Logo Section */}
        <div className="navbar-brand">
          <NavLink to="/" className="brand-link">
            <img 
              className="logo" 
              src={img} 
              alt="MySite Logo" // Generic Alt text
              width="40" 
              height="40" 
            />
            {/* Simplified Brand Name */}
            <span className="brand-name font-main">CASPAIN</span> 
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="nav-link font-mindscape"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
          
          <div className="nav-extra">
            <NavLink to="/login" className="nav-button">Login</NavLink>
            <NavLink to="/signup" className="nav-button">Sign Up</NavLink>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`navbar-toggle ${isOpen ? "active" : ""}`} 
          onClick={toggleNavbar}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;