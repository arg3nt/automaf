import React from 'react';
import Navbar from './components/navbar/Navbar';
import PhaseTracker from './components/phaseTracker/PhaseTracker';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Navbar/>
      <PhaseTracker/>
      <div className="nav-spacer"></div>

      <p>Page content goes here :)</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
