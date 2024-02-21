import "./project.css";

function Project({title, image, deployed, github}) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={title}
          src={image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {title}
          </li>
          <li>
            <strong>Deployed Page:</strong> {deployed}
          </li>
          <li>
            <strong>GitHub Repository:</strong> {github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;



// [ ] A list of projects (Challenges or Projects). For each project, make sure you have the following:
// [ ] Project title
// [ ] Link to the deployed version
// [ ] Link to the GitHub repository
// [ ] GIF or screenshot of the deployed application


// [ ] Project:
// [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
  // look at card rendering in past projects
// [ ] Must utilize router props to properly render the right project based on user selection
// [ ] Must render the following info:
// [ ] Project title
// [ ] Link to the deployed version
// [ ] Link to the GitHub repository
// [ ] GIF or screenshot of the deployed application

// 1. team profile generator
// 2. earworm extractor
// 3. readme generator
// 4. weather dashboard
// 5. flight of the conchords trivia quiz
// 6. password generator
