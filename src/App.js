import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header ';
import Hero from './components/Hero';


function App() {
  return (
    <div className="Portfolio">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
