import React from 'react'   
import { NavLink } from 'react-router-dom'

const MovieCard = (props) => {
    return (
        <div className='flex gap-4 justify-center'>

            <div className='w-[200px] transition-all duration-300  hover:text-[#ff0000] '>
                <NavLink to={`/moviedetails/${props.movie.id}`}>
                    {/* Movie Image */}
                    <div className='border-4 rounded-sm w-inherit transition-all duration-300 hover:shadow-md hover:shadow-red-700 overflow-hidden '>
                        <div
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.movie.poster_path})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundClip: 'content-box',
                                
                            }}
                            className='transform transition-transform duration-300 hover:scale-105 h-[300px] w-[100%]
                            xl:h-[300px] lg:h-[250px] md:h-[250px] sm:h-[230px] max-sm:h-[200px]'
                        ></div>
                    </div>

                    {/* Movie Details */}
                    <div className='p-2 text-center'>
                        <p className='font-semibold text-lg
                        xl:text-lg lg:text-lg md:text-lg sm:text-md max-sm:text-sm'>
                            {props.movie.title}
                            </p>
                        <p className='text-gray-400 text-sm
                        xl:text-sm lg:text-sm md:text-sm sm:text-xs max-sm:text-xs'>
                            Rating: <span>{Math.round(props.movie.vote_average * 100) / 100}</span>
                        </p>
                    </div>
                </NavLink>
            </div>
        </div>


    )
}

export default MovieCard