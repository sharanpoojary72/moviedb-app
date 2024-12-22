import React from 'react'
import MoviePage from '../components/MoviePage/MoviePage';
import { usePagination } from '../context/PageContext';
import Pagination from '../components/Pagination/Pagination';

const UpcomingPage = () => {

    const [page, setPage] = usePagination();

    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`;
    return (
        <div>
            <MoviePage url={url}></MoviePage>
            {/* <Pagination page={page} setPage={setPage}/> */}
        </div>
    )
}

export default UpcomingPage