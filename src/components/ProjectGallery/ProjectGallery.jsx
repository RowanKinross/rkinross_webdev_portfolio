import React, { useState } from 'react'
import Project from "../Project/Project";
import projects from "../Project/projects.json"


function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = projects.length;

  const handleClickNext = () => {
    console.log(currentIndex)
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>(prevIndex - 1) % totalItems);
  };

  const getIndices = () => {
    const showProjects = [];
    showProjects.push(projects[((currentIndex - 1) + totalItems) % totalItems]);
    showProjects.push(projects[(currentIndex % totalItems)]);
    showProjects.push(projects[(currentIndex + 1) % totalItems]);
    return showProjects;
  };

  return (
    <div>
    <div className="projects">
      <h2 className="text-center projectGalleryTitle">Project Gallery</h2>
        <div className="carouselContainer">
          {getIndices().map((project, index) => (
            <div key={index} className={`card ${index === 1 ? 'centralProject' : 'sideProject hide'}`}>
              <Project 
              key={project.id} 
              title={project.title} 
              image={project.image} 
              deployed={project.deployed} 
              github={project.github} 
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev buttonSpan" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <div className="carousel-control-prev-icon" aria-hidden="true" onClick={handleClickPrev}></div>
            <div className="visually-hidden">Previous</div>
        </button>
        <button className="carousel-control-next buttonSpan" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <div className="carousel-control-next-icon" aria-hidden="true" onClick={handleClickNext}></div>
            <div className="visually-hidden">Next</div>
        </button>
      </div>
    </div>
  );
};

export default ProjectGallery;