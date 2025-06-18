import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import './App.css';
import Achievements from './pages/Achievements';
import Loader from './components/Loader'
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time (or replace with real async logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
    return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <main>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );

};

export default App;
