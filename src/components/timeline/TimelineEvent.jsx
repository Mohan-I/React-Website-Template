// TimelineEvent.js
import React from 'react';

function TimelineEvent({ event }) {
  return (
    <div className="timeline-event">
      <div className="date">{event.date}</div>
      <div className="description">{event.description}</div>
    </div>
  );
}

export default TimelineEvent;
