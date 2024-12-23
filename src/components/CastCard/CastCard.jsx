import React from 'react'

const CastCard = (cast) => {
    
    return (
        <div className='w-[150px] border-1 overflow-hidden'>
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${cast.cast.profile_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundClip: 'content-box',
                }}
                className='rounded-md transform transition-transform duration-300 hover:scale-105 h-[300px]
                xl:h-[300px] lg:h-[250px] md:h-[250px] sm:h-[230px] max-sm:h-[200px]'
            ></div>


            <div className='p-2'>
                <p className='font-semibold text-lg'>{cast.cast.name}</p>
                <p className='text-gray-400 text-sm'>
                    Character: <span>{cast.cast.character}</span>
                </p>
            </div>
        </div>
    )
}

export default CastCard