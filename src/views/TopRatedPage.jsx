import React, { useState } from 'react'
import MoviePage from '../components/MoviePage/MoviePage';
import Pagination from '../components/Pagination/Pagination';
import { usePagination } from '../context/PageContext';

const TopRatedPage = () => {

    const  [page,setPage] = usePagination();

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`;
    return (
        <div>
            <MoviePage url={url}></MoviePage>
            {/* <Pagination page={page} setPage={setPage}/> */}

        </div>
    )
}

export default TopRatedPage