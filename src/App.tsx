import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import './App.css';
import Achievements from './pages/Achievements';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
