import React from 'react';

const Movie = ({name, children}) => {
    return(
        <>
        <ul>
        <a href={children}>{name}</a>
        </ul>
        </>
    );
}

export default Movie;