import React from 'react';
import Movie from './Movie'

const MovieList = ({movies}) => {
    const movieArray = movies.map(movie => {
        return(
            <Movie name={movie.name} key={movie.id}>{movie.url}</Movie>
        )
    })
    return(
        <>
        {movieArray}
        </>
    );
}

export default MovieList;