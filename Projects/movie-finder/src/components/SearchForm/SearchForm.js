import React, { Component } from "react";
import './SearchForm.css';

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
        let movie   = this.state.inputMovie;
        let message = (movie != '') ? '- Searching '+movie+'...' : '- Must type a movie';
        alert(message);
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