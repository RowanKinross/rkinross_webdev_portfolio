import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headline from './components/Header/Headline'
import NavTabs from './components/Header/NavTabs';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import './app.css'


function App() {
  return (
    <header>
    <Headline>
    </Headline>
    <Router>
      <NavTabs />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<ProjectGallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
    </header>
  );
}

export default App;
