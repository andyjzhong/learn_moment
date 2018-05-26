import React, { Component } from 'react';
import logo from './logo.svg';
import MomentContainer from './components/moment_container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><MomentContainer /></h1>
        </header>
      </div>
    );
  }
}

export default App;
