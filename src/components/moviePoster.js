import React, { Component } from 'react';

class MoviePoster extends Component {
    render() {
        return (
            <div className="poster">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/King_Kong_1933_French_poster.jpg" alt="movie image"/>
                <div className="poster__info">
                    <div className="movie__rating info">Rating -- PG</div>
                    <div className="movie__run-time info">Runtime -- 120 min</div>    
                </div>               
            </div>
        );
    }
}
export default MoviePoster;