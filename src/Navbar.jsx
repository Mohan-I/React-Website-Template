import React, { useState } from "react";
import "./Navbar.css"; // Include your CSS file for styling
import SearchBar from "./components/SearchBar";
import img from './components/assets/images/logo.png';
// import './ContactUsPage';
// import { BrowserRouter, Routes, Route , Link } from 'react-router-dom';
// import Home from './App';
// import About from './About';
// import Services from './Services';
// import ContactUsPage from './ContactUsPage';
// import Nopage from './Nopage';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="cont-0">
              <img className="logo" src={img} width="40px" height="40px" />
              <p>&nbsp;Ctrl&nbsp;+&nbsp;I</p>
              <SearchBar />
            </div>
          </div>
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            {/* <BrowserRouter>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/services">Services</Link>
          <br />
          <Link to="/contactuspage">Contact</Link>
          <Routes>
             
             <Route path='/' element={<Home />}/>
             <Route path='/about' element={<About />}/>
             <Route path='/services' element={<Services />}/>
             <Route path='/contactuspage' element={<ContactUsPage />}/>

           </Routes>
           </BrowserRouter> */}

            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
            <div id="google_translate_element"></div>
          </div>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
