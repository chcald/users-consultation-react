import React, { Component } from 'react';
import ConsultResult from './consultation'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Consultas</h1>
        </header>
        <div className="App-intro">
        <ConsultResult/>
        </div>
      </div>
    );
  }
}

export default App;
