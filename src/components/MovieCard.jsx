import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike } from '../services/moviesSlice';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    const likePercentage = (movie.likes / (movie.likes + movie.dislikes)) * 100;
    const dislikePercentage = (movie.dislikes / (movie.likes + movie.dislikes)) * 100;

    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title"><strong>{movie.title}</strong></h5>
                <h6 className="card-subtitle mb-2 text-muted">{movie.category}</h6>
                <div className="progress mb-3">
                    <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${likePercentage}%` }}
                    >
                        {movie.likes}
                    </div>
                    <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${dislikePercentage}%` }}
                    >
                        {movie.dislikes}
                    </div>
                </div>
                <button className="btn btn-danger me-2" onClick={() => dispatch(deleteMovie(movie.id))}>Supprimer</button>
                <button className="btn btn-primary" onClick={() => dispatch(toggleLike(movie.id))}>
                    {movie.liked ? 'Dislike' : 'Like'}
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
