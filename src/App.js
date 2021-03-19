import React from 'react';
import './App.css';
import About from './components/About/About';

import Landing from './components/Landing/page/Landing';
import Project from "./components/Projects/page/Project";
import ReachMe from './components/ReachMe/ReachMe';
import Skills from "./components/Skills/page/Skills";
import Insta from "./components/insta/Insta";


function App() {
  return (
    <div className="container-fluid px-md-5 px-md-3 App">
      <Landing />
      <About />
      <Skills />
      <Project />
      <ReachMe/>
      <Insta />
    </div>
  );
}

export default App;
