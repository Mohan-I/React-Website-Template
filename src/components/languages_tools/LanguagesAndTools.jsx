import React from 'react';
import './LanguagesAndTools.css'; // Include your CSS file for styling


function LanguagesAndTools() {
  const data = [
    { name: 'JavaScript', image: './tech/javascript.png', percentage: 80 },
    { name: 'Node JS', image: './tech/nodejs.png', percentage: 70 },
    { name: 'HTML', image: './tech/html.png', percentage: 90 },
    { name: 'CSS', image: './tech/css.png', percentage: 85 },
    { name: 'Tailwind', image: './tech/tailwind.png', percentage: 80 },
    { name: 'Typescript', image: './tech/typescript.png', percentage: 75 },
    { name: 'Git', image: './tech/git.png', percentage: 85 },
    { name: 'Figma', image: './tech/figma.png', percentage: 95 },
    // Add more languages and tools as needed
  ];

  return (
    <div className="languages-and-tools">
      <h2 className='writer2'>Languages & Tools</h2>
      <div className="items">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img src={`/${item.image}`} alt={item.name} />
            <div className="details">
              <p className='lang'><b>{item.name}</b></p>
              <div className="percentage-bar">
                <div className="percentage" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <p className='percent'>{item.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagesAndTools;
