import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

import { Title } from './components/Title/Title';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Movies } from './components/Movies/Movies';

class App extends Component {
  state           = {
                      usedSearch: false,
                      results: []
                    }
  
  _handleResults  = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0
              ? <p>Results not found...</p>
              : <Movies movies={this.state.results}/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="box">
            <img src={logo} className="App-logo" alt="logo" />
            <Title title="Movie Finder" subtitle="A ReactJS Project"/>
            <SearchForm onResults={this._handleResults}/>
          </div>
          
          <div className="boxMovies">
            <div class="Movies">
              {
                this.state.usedSearch
                  ? this._renderResults()
                  : <small>Use the form to search a movie...</small>
              }
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;