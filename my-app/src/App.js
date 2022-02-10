import React, { Component } from 'react';
import { Title }            from './components/Title/Title';
import CarClass             from './components/Class/Car';
import CarConstructor       from './components/Constructor/Car';
import CarProps             from './components/Props/Car';
import Garage               from './components/Lists/Garage';

import logo                 from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title>Title Component</Title>

          <div className='Components'>
            <CarClass/>
            <CarConstructor/>
            <CarProps/>
            <CarProps
              brand="Honda"
              model="RB18"
              color="Blue"
              year="2022"
            />
            <Garage/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;