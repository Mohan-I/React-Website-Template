import React from 'react';
import './SocialMediaIcons.css'; // Include your CSS file for styling

import Facebook from'./assets/images/facebook.svg';
import LinkedIN from'./assets/images/linked-in-alt.svg';
import Codepen from'./assets/images/codepen.svg';
import X from'./assets/images/x.svg';
import Instagram from'./assets/images/instagram.svg';


function SocialMediaIcons() {
  return (
    <>
    
    <div className="social-media-icons">
        
      <a href="https://www.facebook.com">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.facebook.com">
        <img src={LinkedIN} alt="LinkedIN" />
      </a>
      <a href="https://www.facebook.com">
        <img src={Codepen} alt="Codepen" />
      </a>
      <a href="https://twitter.com">
        <img src={X} alt="X" />
      </a>
      <a href="https://www.instagram.com">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
   
    </>
  );
}

export default SocialMediaIcons;
