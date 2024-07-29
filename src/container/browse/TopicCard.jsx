import React from 'react'
import './topiccard.css'

const TopicCard = ({ title, description, imageSrc, count }) => {
    return (
      <div className="topic-card">
        <img src={imageSrc} alt={title} className="topic-image" />
        <div className="topic-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="topic-count">
          <span>{count}</span>
        </div>
      </div>
    );
  };
export default TopicCard