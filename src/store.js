import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './services/moviesSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});
