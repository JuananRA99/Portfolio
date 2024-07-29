import React, { useRef } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import SpaceCanvas from './components/Space';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Contact } from './components/Contact';
import InspectGLTF from './components/InspectGLTF';
import EducationSection from './components/Educacion';
import Footer from './components/Footer';
function App() {
  const skillsRef = useRef(null);

  return (
    <>
      <NavBar skillsRef={skillsRef} />
      <Banner />
      <SpaceCanvas />
      <InspectGLTF />
      <EducationSection />
      <Skills skillsRef={skillsRef} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;