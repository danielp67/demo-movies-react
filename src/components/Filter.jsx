import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory } from '../services/moviesSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.movies.categories);

    const handleChange = (e) => {
        const selectedCategories = Array.from(e.target.selectedOptions, option => option.value);
        dispatch(filterByCategory(selectedCategories));
    };

    return (
        <select multiple onChange={handleChange}>
            {categories.map(category => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default Filter;
