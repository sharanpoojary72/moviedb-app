import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment/moment';
import CastCard from '../components/CastCard/CastCard';

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);

    const movieData = async () => {
        try {
            const movieList_url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;;
            const response = await fetch(movieList_url);
            const result = await response.json();
            setMovie(result);
            console.log(result);

        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    }

    const castData = async () => {
        try {
            const movieList_url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`;;
            const response = await fetch(movieList_url);
            const result = await response.json();
            setCast(result.cast);
            console.log(result);

        } catch (error) {
            console.error("Error fetching video data:", error);
        }
    }

    useEffect(() => {
        movieData();
        castData();
    }, [])

    return (
        <div className='m-4 flex flex-col gap-4'>
            <div className="grid grid-cols-2 gap-8 bg-black rounded-2xl
            xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1">
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-4">
                        {/* Movie Poster */}
                        <div

                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundClip: 'content-box',
                            }}
                            className='rounded-md min-h-[300px] min-w-[200px]
                            xl:min-h-[300px] lg:min-h-[250px] md:min-h-[200px] sm:min-h-[150px] max-sm:min-h-[150px]
                            xl:min-w-[200px] lg:min-w-[160px] md:min-w-[120px] sm:min-w-[80px] max-sm:min-w-[80px]'
                        ></div>

                        {/* Movie Details */}
                        <div className="flex flex-col gap-4">
                            <div className='w-fit'>
                                <h1 className="font-black text-4xl
                                xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl max-sm:text-2xl">
                                    {movie.title}
                                </h1>
                                <p className="text-xs">
                                    {movie.tagline ? movie.tagline : null}
                                </p>
                            </div>
                            <p className="text-xl text-green-500
                            xl:text-xl lg:text-lg md:text-md sm:text-sm max-sm:text-sm">
                                Rating : {Math.round(movie.vote_average * 100) / 100}
                            </p>
                            <div className="flex gap-2 items-center">
                                <p className="text-center border-gray-700 border p-2 rounded-2xl
                                xl:text-xl lg:text-lg md:text-md sm:text-sm max-sm:text-sm">
                                    {movie.runtime} min
                                </p>
                                <ul className="flex flex-row flex-wrap gap-2
                                xl:text-xl lg:text-lg md:text-md sm:text-sm max-sm:text-sm">
                                    {Array.isArray(movie.genres) && movie.genres.length > 0 ? (
                                        movie.genres.map((genre) => (
                                            <li key={genre.id}>{genre.name}</li>
                                        ))
                                    ) : (
                                        <p className='text-center xl:text-xl lg:text-lg md:text-md sm:text-sm max-sm:text-sm'>
                                            No genres available
                                        </p>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <p className='xl:text-xl lg:text-lg md:text-md sm:text-sm max-sm:text-sm'>
                                    Release Date : {moment(movie.release_date).format('dddd MMM Do YYYY')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overview Section */}
                    <div>
                        <h3 className="text-3xl
                        xl:text-3xl lg:text-2xl md:text-xl sm:text-lg max-sm:text-lg">
                            Overview:
                        </h3>
                        <p className='text-gray-400 xl:text-lg lg:text-lg md:text-md sm:text-sm max-sm:text-sm'>
                            {movie.overview}
                        </p>
                    </div>
                </div>

                {/* Backdrop Image */}
                <div
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '0 16px 16px 0',
                    }}
                    className='hidden md:block w-[100%] m-h-[400px]
                    xl:m-h-[400px] lg:m-h-[300px] md:m-h-[200px]
                    xl:w-[100%] lg:w-[100%] md:w-[100%]'
                ></div>
            </div>
            {/* Cast Details */}
            <div className='flex flex-col gap-4 items-center w-[100%]'>
                <h1 className='text-3xl font-bold'>Cast</h1>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>

                    {
                        cast.length > 0 && cast
                            .filter((actor) => actor.profile_path)
                            .map((actor) => (
                                <CastCard key={actor.cast_id} cast={actor} />
                            ))
                    }


                </div>
            </div>
        </div>
    )
}

export default MovieDetails