import React, { Component } from "react";

import { Title } from '../components/Title/Title';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Movies } from '../components/Movies/Movies';

import logo from '../logo.svg';

export class Home extends Component {
    state           = {
        usedSearch: false,
        results: []
    }

    _handleResults  = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return (this.state.results.length === 0)
            ? <p>Results not found...</p>
            : <Movies movies={this.state.results}/>
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <div className="box">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Title title="Movie Finder" subtitle="A ReactJS Project" />
                        <SearchForm onResults={this._handleResults} />
                    </div>

                    <div className="boxMovies">
                        <div className="Movies">
                            {
                                this.state.usedSearch ? (
                                    this._renderResults()
                                ) : (
                                    <small>Use the form to search a movie...</small>
                                )
                            }
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
