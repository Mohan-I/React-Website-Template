import React, { useState } from 'react';
import './Accordions.css'; // Include your CSS file for styling

function Accordions({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <center>
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className={`accordion-title ${index === activeIndex ? 'active' : ''}`} onClick={() => onItemClick(index)}>
            {item.title}
          </div>
          <div className={`accordion-content ${index === activeIndex ? 'active' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
    </center>
    </>
  );
}

export default Accordions;
