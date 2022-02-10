import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

import { Title } from './components/Title/Title';
import { SearchForm } from './components/SearchForm/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="box">
            <img src={logo} className="App-logo" alt="logo" />
            <Title title="Movie Finder" subtitle="A ReactJS Project"/>
            <SearchForm/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;