import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Header/NavTabs';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';


function App() {
  return (
    <Router>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<ProjectGallery />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
