import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    categories: [],
    filteredMovies: [],
    currentPage: 1,
    itemsPerPage: 4,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
            state.filteredMovies = action.payload;
            state.categories = [...new Set(action.payload.map(movie => movie.category))];
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
            state.filteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload);
            state.categories = [...new Set(state.movies.map(movie => movie.category))];
        },
        toggleLike: (state, action) => {
            const movieId = action.payload;
            state.movies = state.movies.map(movie =>
                movie.id === movieId
                    ? { ...movie, liked: !movie.liked, likes: movie.liked ? movie.likes - 1 : movie.likes + 1 }
                    : movie
            );
            state.filteredMovies = state.movies;
        },
        filterByCategory: (state, action) => {
            state.filteredMovies = state.movies.filter(movie => action.payload.includes(movie.category));
            state.currentPage = 1;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
            state.currentPage = 1;
        },
    },
});

export const { setMovies, deleteMovie, toggleLike, filterByCategory, setPage, setItemsPerPage } = moviesSlice.actions;

export default moviesSlice.reducer;
