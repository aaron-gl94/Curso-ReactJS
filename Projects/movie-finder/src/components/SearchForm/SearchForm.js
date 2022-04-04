import React, { Component } from "react";
import './SearchForm.css';

const API_KEY = 'd5165da';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (event) => {
        this.setState({
            inputMovie: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        let movie           = this.state.inputMovie;

        if (movie !== '') {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
            .then(result => result.json())
            .then(results => {
                console.log(results);
                const { Search = [], totalResults = "0" } = results;
                // alert('- Results to '+movie+': '+totalResults+' movies');
                this.props.onResults(Search);
                console.log(Search, totalResults);
            });
        } else {
            alert('- Must type a movie!');
        }
    }

    render() {
        return (
            <div className="SearchForm">
                <form onSubmit={this._handleSubmit}>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Find a Movie"
                                onChange={this._handleChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}