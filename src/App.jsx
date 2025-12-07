import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import More from './components/More.jsx';
const App = () => {
  return (
    <div className="portfolio-app">
      <Navbar/>
      <Home/> 
      <Skills/>
      <Projects/>  
      <More/>
      <Footer/>
    </div>
  );
}

export default App;