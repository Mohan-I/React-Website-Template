import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './WorkExperienceChart.css'; // Include your CSS file for styling

function WorkExperienceChart() {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Company A', 'Company B', 'Company C', 'Company D'],
        datasets: [{
          label: 'Years of Experience',
          data: [5, 3, 2, 4], // Example data, replace with actual years of experience for each company
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="work-experience-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default WorkExperienceChart;
