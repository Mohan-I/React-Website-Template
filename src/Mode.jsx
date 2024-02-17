import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function Mode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "body"}>
      {/* <h1>{isDarkMode ? "🌙" : "🌕"}</h1> */}
      <button onClick={toggleMode}>{isDarkMode ? "🌕" : "🌙"}</button>
    </div>
  );
}

export default Mode;
