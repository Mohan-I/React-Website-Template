// MyContribution.js
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './MyContribution.css'; // Custom CSS for styling

function MyContribution({ percentage }) {
  return (
    <div className="my-contribution">
      <div className="progress-bar-container">
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={8}
          styles={{
            path: { stroke: '#007bff' },
            trail: { stroke: '#f0f0f0' },
          }}
        >
          <div className="progress-text">
            <center>
              <img src="./tech/docker.png" width="30%"/>
            <strong>{percentage}%</strong>
            </center>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default MyContribution;
