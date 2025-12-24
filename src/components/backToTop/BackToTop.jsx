import React, { useState, useEffect } from 'react';
import './BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className={`cyber-back-to-top ${isVisible ? 'visible' : ''}`} 
      onClick={scrollToTop}
    >
      <button className="cyber-btn">
        <span></span>
        <p data-title="TOP" data-text="GO!"></p>
        <div className="glitch-overlay"></div>
      </button>
    </div>
  );
}

export default BackToTop;