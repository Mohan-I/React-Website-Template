// Timeline.js
import React from 'react';
import TimelineEvent from './TimelineEvent.jsx';
import './Timeline.css'; // Include your CSS file for styling

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineEvent key={index} event={event} />
      ))}
    </div>
  );
}

export default Timeline;
