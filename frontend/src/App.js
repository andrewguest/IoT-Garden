import React from 'react';
import logo from './logo.svg';
import './App.css';

// custom component imports
import Navbar from './components/navbar';
import TemperatureChart from './components/charts/temperatureChart.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar />
        <TemperatureChart />
      </header>
    </div>
  );
}

export default App;
