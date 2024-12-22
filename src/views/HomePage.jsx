import React, { useEffect, useState } from 'react'
import MoviePage from '../components/MoviePage/MoviePage';
import Pagination from '../components/Pagination/Pagination';
import { usePagination } from '../context/PageContext';
import { useSearch } from '../context/SearchContext';

const HomePage = () => {
    const [page, setPage] = usePagination();
    const [search, setSearch] = useSearch();
    const [url, setUrl] = useState('');


    useEffect(() => {
        if (search) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&query=${search}&page=${page}&include_adult=false`);
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
        }

    },[search, page])


    return (
        <section className='m-5'>
            {url && <MoviePage url={url} />}
            {/* <Pagination page={page} setPage={setPage} /> */}
        </section>
    )
}

export default HomePage