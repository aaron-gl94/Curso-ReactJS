import React, { Component } from "react";
import PropTypes from 'prop-types';

const API_KEY = 'd5165da';

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params:     PropTypes.object,
            isExact:    PropTypes.bool,
            path:       PropTypes.string,
            url:        PropTypes.string
        })
    }
    
    state = {
        movie: {}
    }

    _fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(result => result.json())
            .then(movie => {
                console.log(movie);
                this.setState({movie});
            });
    }

    _goBack () {
        window.history.back();
    }

    componentDidMount() {
        // console.log(this.props);
        // const { id } = this.props.match.params;
        const id = 'tt0133093';
        this._fetchMovie({ id });
    }
    
    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie

        return ( 
            <div>
                <button onClick={this._goBack}>Regresar</button>
                
                <ul>
                    <li><b>Title:</b> {Title}</li>
                    <li><b>Poster:</b> <img src={Poster} alt={Title} /></li>
                    <li><b>Actors:</b> {Actors}</li>
                    <li><b>Metascore:</b> {Metascore}</li>
                    <li><b>Plot:</b> {Plot}</li>
                </ul>
            </div>
        );
    }
}