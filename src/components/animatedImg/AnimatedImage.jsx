import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedImage.css';
import about from '../assets/images/about.gif';

function AnimatedImage() {
  return (
    <div className="cyber-container">
      <motion.div 
        className="neon-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Decorative Scanline Effect */}
        <div className="scanline"></div>
        
        <motion.img 
          src={about}
          alt="Cyber Work" 
          className="cyber-image"
          initial={{ filter: "hue-rotate(90deg) brightness(50%)" }}
          animate={{ filter: "hue-rotate(0deg) brightness(100%)" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        
        {/* Neon Border Accents */}
        <div className="corner-tl"></div>
        <div className="corner-br"></div>
      </motion.div>
    </div>
  );
}

export default AnimatedImage;