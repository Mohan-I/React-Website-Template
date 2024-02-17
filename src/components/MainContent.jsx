import React from 'react';
import './MainContent.css'; // Include your CSS file for styling
import sm from'./assets/images/sm.webp';
import ppc from'./assets/images/ppc.webp';
import branding from'./assets/images/branding.webp';



function MainContent() {
  return (
    <div className="main-content">
      <div className="template-info">
        <h2 class="writer2">About Our Template</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla nec ex eu urna aliquam convallis. Ut quis justo eget 
          eros lacinia consectetur nec ac nulla. Sed et metus et nunc 
          interdum sagittis. Ut malesuada risus magna, non ultricies 
          eros volutpat nec.
        </p>
      </div>
      <div className="template-images">
        <img src={branding} alt="Template Image 1" />
        <img src={ppc} alt="Template Image 2" />
        <img src={sm} alt="Template Image 3" />
      </div>
    </div>
  );
}

export default MainContent;
