import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Montana Redux Way.</h4>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Created By Am.ChrisKE
        </p>
      </header>
    </div>
  );
}

export default App;
