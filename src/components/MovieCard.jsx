import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike } from '../services/moviesSlice';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    return (
        <div className="movie-card">
            <h3><strong>{movie.title}</strong></h3>
            <p>Catégorie: {movie.category}</p>
            <div className="like-dislike-bar">
                <div style={{ width: `${(movie.likes / (movie.likes + movie.dislikes)) * 100}%` }} className="likes"></div>
                <div style={{ width: `${(movie.dislikes / (movie.likes + movie.dislikes)) * 100}%` }} className="dislikes"></div>
            </div>
            <button onClick={() => dispatch(deleteMovie(movie.id))}>Supprimer</button>
            <button onClick={() => dispatch(toggleLike(movie.id))}>{movie.liked ? 'Unlike' : 'Like'}</button>
        </div>
    );
};

export default MovieCard;
