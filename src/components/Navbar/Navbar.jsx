import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { usePagination } from '../../context/PageContext';
import SearchBar from '../SearchBar/SearchBar';
import { useSearch } from '../../context/SearchContext';

const Navbar = () => {
    const navigate = useNavigate();
    const [page, setPage] = usePagination();
    const [search, setSearch] = useSearch();

    const handleLogo = () => {
        navigate('/');
        setSearch('');
        setPage(1);
        window.scrollTo(0, 0);
    }

    const handlePage = () => {
        setSearch('');
        setPage(1);
        window.scrollTo(0, 0);
    }
    return (
        <nav className='navbar grid gap-2 justify-between items-center border-b-2 border-red-900 bg-black fixed w-full top-0 z-10
        2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-3  
        2xl:p-4 xl:p-4 lg:p-2 md:p-1 p-2 ' aria-label="Main navigation">

            <div onClick={handleLogo} className="logo text-white text-sm pointer cursor-pointer
            sm:text-base md:text-md lg:text-lg xl:text-xl">
                Movie Orbit
            </div>

            <ul className='flex gap-4 justify-center items-center text-[0.7rem] 
            sm:text-base md:text-md lg:text-lg xl:text-lg max-sm:col-span-2 max-md:col-span-2'>

                <li onClick={handlePage}><NavLink className={({ isActive }) =>
                    isActive ? 'text-[#ff0000]' : 'hover:bg-[#ff0000] p-1 rounded'} to={'/popular'}>Popular</NavLink></li>
                <li onClick={handlePage}><NavLink className={({ isActive }) =>
                    isActive ? 'text-[#ff0000]' : 'hover:bg-[#ff0000] p-1 rounded'} to={'/toprated'}>Top Rated</NavLink></li>
                <li onClick={handlePage}><NavLink className={({ isActive }) =>
                    isActive ? 'text-[#ff0000]' : 'hover:bg-[#ff0000] p-1 rounded'} to={'/upcoming'}>Upcoming</NavLink></li>
            </ul>
            <div className="search flex justify-end 
            max-sm:order-2 max-sm:col-span-3 max-sm:justify-center max-md:col-span-3 max-md:justify-center  ">
                <SearchBar />
            </div>
        </nav>

    )
}

export default Navbar