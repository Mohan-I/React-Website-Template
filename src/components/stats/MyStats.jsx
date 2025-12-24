// Stats.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './stats.css';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

function Stats() {
  // Sci-Fi themed pie chart data
  const pieData = {
    labels: ['Quantum Processing', 'Neural Networks', 'Holographic Systems'],
    datasets: [
      {
        data: [35, 40, 25],
        backgroundColor: [
          'rgba(0, 243, 255, 0.8)',
          'rgba(185, 103, 255, 0.8)',
          'rgba(255, 0, 255, 0.8)'
        ],
        borderColor: [
          'rgba(0, 243, 255, 1)',
          'rgba(185, 103, 255, 1)',
          'rgba(255, 0, 255, 1)'
        ],
        borderWidth: 2,
        hoverBorderWidth: 4,
        hoverBorderColor: '#ffffff',
        hoverOffset: 20
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#00f3ff',
          font: {
            family: "'Courier New', monospace",
            size: 14
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(10, 10, 26, 0.9)',
        titleColor: '#00f3ff',
        bodyColor: '#ffffff',
        borderColor: '#00f3ff',
        borderWidth: 1,
        cornerRadius: 4,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 2000,
      easing: 'easeOutQuart'
    }
  };

  // Sci-Fi stats data
  const stats = [
    {
      icon: faBriefcase,
      label: 'Years in Cyber-Systems',
      value: '5+',
      color: '#00ff9d'
    },
    {
      icon: faGraduationCap,
      label: 'Neural Training Level',
      value: 'v4.2',
      color: '#b967ff'
    },
    {
      icon: faCode,
      label: 'Code Modules Active',
      value: '∞',
      color: '#ff00ff'
    }
  ];

  return (
    <>
      {/* Sci-Fi Ribbon Animation */}
      <div className="ribbon-container">
        <svg className="ribbon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 300">
          <defs>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="purple-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none" 
            id="text-path" 
            d="M-100 150 C300 50 500 100 800 120 1100 140 1200 180 1400 150 1600 120 1800 200 2000 150"
          />
          <text className="ribbon__text">
            <textPath href="#text-path" startOffset="0" textAnchor="middle">
              <animate attributeName="startOffset" from="0%" to="-100%" begin="0s" dur="20s" repeatCount="indefinite" />
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY • 
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY •
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY •
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY
            </textPath>
            <textPath href="#text-path" startOffset="50%" textAnchor="middle">
              <animate attributeName="startOffset" from="50%" to="-50%" begin="0s" dur="20s" repeatCount="indefinite" />
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY • 
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY •
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY •
              QUANTUM PROCESSING • NEURAL INTERFACE • HOLOGRAPHIC DISPLAY
            </textPath>
          </text>
        </svg>
        <div className="data-stream"></div>
      </div>

      {/* Stats Component */}
      <div className="stats-container">
        <div className="chart-wrapper">
          <div className="chart-grid"></div>
          <div className="chart-container">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>

        <div className="stats-icons">
          {stats.map((stat, index) => (
            <div key={index} className="icon-card">
              <div className="icon-wrapper">
                <div className="icon-circle"></div>
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className="icon"
                  style={{ color: stat.color }}
                />
              </div>
              <span className="icon-label">{stat.label}</span>
              <span className="stat-value" style={{ color: stat.color }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stats;