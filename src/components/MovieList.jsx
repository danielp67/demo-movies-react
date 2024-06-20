import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../services/moviesSlice';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import Filter from './Filter';
import { movies$ } from '../movies'; // Importer les films

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.filteredMovies);
    const currentPage = useSelector(state => state.movies.currentPage);
    const itemsPerPage = useSelector(state => state.movies.itemsPerPage);

    useEffect(() => {
        // Récupérer les films depuis movies.js
        const fetchMovies = async () => {
            const data = await movies$;
            dispatch(setMovies(data));
        };

        fetchMovies();
    }, [dispatch]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedMovies = movies.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <Filter />
            <div className="d-flex flex-wrap">
                {selectedMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default MovieList;
