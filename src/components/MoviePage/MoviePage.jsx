import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { usePagination } from '../../context/PageContext';
import Pagination from '../Pagination/Pagination';

const MoviePage = ({ url }) => {

    const [data, setData] = useState([]);
    const [page, setPage] = usePagination();
    const [totalPages, setTotalPages] = useState(0);


    const fetchData = async () => {
        try {
            const movieList_url = url;
            const response = await fetch(movieList_url);
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                const result = await response.json();
                setData(result.results);
                setTotalPages(result.total_pages > 500 ? 500 : result.total_pages);
                
                // console.log(result);
                // console.log(totalPages);
            } else {
                console.error("Invalid content-type:", contentType);
            }
        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);
    useEffect(() => {
        // console.log('Updated totalPages:', totalPages);
    }, [totalPages]);

    return (
        <div className='m-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 justify-center'>
                {
                    (data.length > 0 && data.map((movie) => <MovieCard key={movie.id} movie={movie} />))
                }
            </div>
            <div>
                <Pagination page={page} setPage={setPage} totalPages={totalPages} />
            </div>
        </div>
    )
}

export default MoviePage