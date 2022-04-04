import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Movie } from './Movie';

export class Movies extends Component {
    static propTypes = {
        movies: PropTypes.array
    }

    render() {
        const { movies } = this.props;
        return movies.map(movie => {
            return  <div className="MovieCard" key={movie.imdbID}>
                        <Movie        
                            id={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                        />
                    </div>
        });
    }
}