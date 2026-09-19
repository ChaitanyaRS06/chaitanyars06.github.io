import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ProjectDetails from './components/ProjectDetails'; // Import the new component
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Analytics />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          {/* /projects is intentionally unlisted — restore the Projects import and this route to bring it back */}
          <Route path="/project-details/:projectId" element={<ProjectDetails />} /> {/* Add the new route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;