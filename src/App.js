import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
    return (
        <div className="App container">
            <h1 className="my-4">Movie Cards in React</h1>
            <MovieList/>
        </div>
    );
};

export default App;
