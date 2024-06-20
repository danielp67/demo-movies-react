import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setItemsPerPage } from '../services/moviesSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.movies.currentPage);
    const itemsPerPage = useSelector(state => state.movies.itemsPerPage);
    const totalMovies = useSelector(state => state.movies.filteredMovies.length);
    const totalPages = Math.ceil(totalMovies / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setPage(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setPage(currentPage + 1));
        }
    };

    const handleItemsPerPageChange = (event) => {
        dispatch(setItemsPerPage(Number(event.target.value)));
    };

    return (
        <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Précédent</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Suivant</button>
            <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
            </select>
        </div>
    );
};

export default Pagination;
