import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCode, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { Pie } from 'react-chartjs-2';
import './MyStats.css'; // Include your CSS file for styling

function MyStats() {
  // Example data for the pie chart
  const data = {
    labels: ['Work Experience', 'Education', 'Coding Skills'],
    datasets: [
      {
        data: [5, 4, 3], // Example years of experience, education level, coding skills level
        backgroundColor: ['#007bff', '#28a745', '#ffc107'], // Example colors for the pie chart sections
      },
    ],
  };

  return (
    <div className="my-stats">
      <div className="chart-container">
        <Pie data={data} />
      </div>
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Work Experience</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGraduationCap} />
          <p>Education</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCode} />
          <p>Coding Skills</p>
        </div>
      </div>
    </div>
  );
}

export default MyStats;
