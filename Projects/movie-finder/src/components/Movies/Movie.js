import React, { Component } from "react";
import { PropTypes } from "prop-types";

import { Link } from 'react-router-dom';

import './Movies.css';

export class Movie extends Component {
    static propTypes = {
        id:     PropTypes.string,
        title:  PropTypes.string,
        year:   PropTypes.string,
        poster: PropTypes.string
    }

    render(){
        const {
            id,
            title,
            year,
            poster
        } = this.props;
        
        return (
            <div className="Movie">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <Link to={`/detail/${id}`}>
                                <img src={poster} alt={title}/>
                            </Link>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{year}</p>
                                <p>
                                    <Link to={`/detail/${id}`} className="detailLink">View Details</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}