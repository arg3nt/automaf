import React from 'react';
import Navbar from './components/navbar/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Navbar/>
      <div className="nav-spacer"></div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
