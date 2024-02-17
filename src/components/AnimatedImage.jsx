import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedImage.css'; // Include your CSS file for styling
import about from'./assets/images/about.gif';

function AnimatedImage() {
  return (
    <div className="animated-image">
      <motion.img 
        src={about}
        alt="Your Work" 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default AnimatedImage;
