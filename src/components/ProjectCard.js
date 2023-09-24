import React from 'react';

const ProjectCard = ({ link, imageSrc, alt }) => {
  return (
    <div className="shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} className="img-fluid img-thumbnail" width="100%" alt={alt} />
        <div className="overlay rounded"></div>
      </a>
    </div>
  );
};

export default ProjectCard;
