import Project from "../Project/Project";
import projects from "../Project/projects.json"

function ProjectGallery() {
  return (
    <div className="projects">
      <h2 className="text-center projectGalleryTitle">Project Gallery</h2>
      <p className="projectsContainer">
      {projects.map((item) => (
        <Project key={item.id} title={item.title} image={item.image} deployed={item.deployed} github={item.github} />
      ))}
      </p>
    </div>
  );
}

export default ProjectGallery;

// [ ] Project Gallery:
// [ ] Must render dynamically 6 instances of the Project component
// [ ] Be sure to store your project data in a JSON file and import it into your project