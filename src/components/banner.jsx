import React from 'react';
import './Banner.css'; // Include your CSS file for styling
import banner from'./assets/images/banner.png';
import Scroll from'./assets/images/scroll.gif';

function Banner() {
  return (
    <div className="banner">
        <center>
      <img src="/src/assets\images\banner.png" alt="Banner" />
      <h1 className="writer">I do more than just to write code</h1>
      <hr width="50%" />
      <p>I am a Passionate Web and App Developer From Mumbai</p>
      <div className="scroll">
      <img src={Scroll} alt="Scroll" />
      </div>
      </center>
     
    </div>

  );
}

export default Banner;
