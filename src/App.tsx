import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterPage from "./pages/counter";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CounterPage />
    </div>
  );
}

export default App;
