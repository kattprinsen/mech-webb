import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="app-container">
      <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/shop" component={Shop} />
        </Routes>
    </div>
  );
}

export default App;
