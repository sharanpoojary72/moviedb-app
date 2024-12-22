import React, { useState } from 'react'
import { useSearch } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useSearch();
    const [inputValue, setinputValue] = useState('');

    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        navigate('/search?query=' + inputValue.trim());
        setSearch(inputValue.trim());
        setinputValue('');
    }

    return (
        <div>
            <form onSubmit={handleSearch} className='flex gap-2'>
                <label htmlFor="search"></label>
                <input name='search' id='search' type="text" placeholder="Search Movie Name" value={inputValue} onChange={(e) => setinputValue(e.target.value)} className="p-2 rounded hover:outline outline-2 flex justify-center items-center 
                2xl:w-100 xl:w-[350px] lg:w-[200px] md:w-40 max-sm:w-[200px]
                2xl:h-100 xl:h-[40px] lg:h-[40px] md:h-[40px] max-sm:h-[30px]" />
                <button type='submit' className='bg-[#ff0000] p-2 rounded flex justify-center items-center hover:bg-opacity-80
                2xl:h-100 xl:h-[40px] lg:h-[40px] md:h-[40px] max-sm:h-[30px]'>
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBar