import React, { Component } from 'react';
import { Title } from './components/Title'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Title Component</Title>
        </header>
      </div>
    );
  }
}

export default App;