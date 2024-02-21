import Project from "../Project/Project";
import projects from "../Project/projects.json"

let i = 0;


function ProjectGallery() {

  function prev() {
    i = i-1
    renderProjects()
  }

  function next() {
    i = i+1
    ProjectGallery()
  }

  return (
    <div className="projects">
      <h2 className="text-center projectGalleryTitle">Project Gallery</h2>

      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner carouselContainer">
        <div className="hide">
          <Project key={projects[i].id} title={projects[i].title} image={projects[i].image} deployed={projects[i].deployed} github={projects[i].github} /> 
        </div>
        <div className="show">
          <Project key={projects[i+1].id} title={projects[i+1].title} image={projects[i+1].image} deployed={projects[i+1].deployed} github={projects[i+1].github} />
        </div>
        <div className="hide">
          <Project key={projects[i+2].id} title={projects[i+2].title} image={projects[i+2].image} deployed={projects[i+2].deployed} github={projects[i+2].github} />
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" 
          // onClick={prev()}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"
          //  onClick={next()}
           >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
