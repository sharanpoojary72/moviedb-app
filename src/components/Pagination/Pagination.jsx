import React, { useEffect, useState } from 'react';
import { use } from 'react';

const Pagination = ({ page, setPage,totalPages }) => {
    
    const [inputValue, setInputValue] = useState(page);

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
            setInputValue(page - 1); 
            window.scrollTo(0, 0);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const validateAndSetPage = (value) => {
        if (!isNaN(value) && value > 0 && value <= totalPages) {
            setPage(value);
        } else if (value > totalPages) {
            setPage(totalPages);
            setInputValue(totalPages);
        } else {
            setInputValue(page); 
        }
        window.scrollTo(0, 0); 
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = parseInt(inputValue, 10);
        validateAndSetPage(value);
    };
    
    const handleBlur = () => {
        const value = parseInt(inputValue, 10);
        validateAndSetPage(value);
    };

    const handleNext = () => {
        setPage(page + 1);
        setInputValue(page + 1); 
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        
    })

    return (
        <div className='my-10 flex gap-4 justify-center'>
            <button
                className='bg-[#ff0000] p-2 rounded disabled:opacity-50'
                onClick={handlePrev}
                disabled={page === 1}
            >
                Prev
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    name='page'
                    id='page'
                    type="tel"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur} 
                    className='p-2 rounded w-[50px] text-center'
                />
            </form>
            <button
                onClick={handleNext}
                className='bg-[#ff0000] p-2 rounded disabled:opacity-50'
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
