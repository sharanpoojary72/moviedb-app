import React, { createContext, useContext, useState } from 'react';

// Create Context
const PaginationContext = createContext();

// Pagination Provider
export const PaginationProvider = ({ children }) => {
    const [page, setPage] = useState(1);

    return (
        <PaginationContext.Provider value={[page, setPage]}>
            {children}
        </PaginationContext.Provider>
    );
};

// usePagination Hook
export const usePagination = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePagination must be used within a PaginationProvider');
    }
    return context;
};
