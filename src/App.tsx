import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {useRef} from 'react';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    console.log(aboutRef)
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleSkillsClick = () => {
    console.log(skillsRef)
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleProjectsClick = () => {
    console.log(projectsRef)
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">codyBeumer();</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link onClick={handleAboutClick}>About</Nav.Link>
            <Nav.Link onClick={handleSkillsClick}>Skills</Nav.Link>
            <Nav.Link onClick={handleProjectsClick}>Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid>
        
        <Home />
       
        <br />
        <div ref={aboutRef}>
        <About />
        </div>
        <div ref={skillsRef}>
        <Skills />
        </div>
        <div ref={projectsRef}>
        <Projects />
        </div>
    </Container>
    </>
  );
}

export default App;
