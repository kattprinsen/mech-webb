import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="app-container">
      <Navbar />
        <Hero />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
