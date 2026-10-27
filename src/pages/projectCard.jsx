// ProjectCard.js - A reusable component to display a project

import React from 'react';


const projectCard = ({ title, imageUrl, description, link }) => {
  return (
    <div className="project-card">
      {/* Link to the project */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <img src={imageUrl} alt={title} className="project-image" />
      </a>

      {/* Project title and description */}
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

projectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default projectCard;