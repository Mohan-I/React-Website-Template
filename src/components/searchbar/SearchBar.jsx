// SearchBar.js
import React, { useEffect, useState } from 'react';
import './SearchBar.css'; // Include your CSS file for styling

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === 'i') {
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
    <div className='container-due'>
    <div className={`search-bar ${isOpen ? 'open' : ''}`}>
     <center>
      <input type="text" className='s-bar' placeholder="Search..." />
    </center>
    </div>
    </div>
    </>
  );
}

export default SearchBar;
