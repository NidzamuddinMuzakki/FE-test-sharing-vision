// *********************
// Role of the component: Pagination component that displays the page numbers and navigation buttons
// Name of the component: Pagination.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Pagination />
// Input parameters: no input parameters
// Output: Pagination component that displays the page numbers and navigation buttons
// *********************

import { useState } from 'react';

const Pagination = (props:any) => {
    const totalPages = Math.ceil(props?.totalRecords/props.params.perpage); // Total number of pages
    
  
    // Calculate the range of page numbers to display
    let startPage = props.params.page - 1;
    if (startPage <= 0) startPage = 1;
    let endPage = Math.ceil(props?.totalRecords/props.params.perpage);
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - 2 > 0 ? totalPages - 2 : 1;
    }
  
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex gap-2 items-center">
        {/* <button
          className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary py-1 px-3 hover:border-gray-500"
          onClick={() => props.setParams({...props.params, page:props.params.page-1})}
          disabled={currentPage === 1}
        >
          Prev
        </button> */}
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`border border-gray-600 py-1 px-3 hover:border-gray-500 ${props.params.page === number ? 'dark:bg-whiteSecondary bg-blackPrimary dark:text-blackPrimary text-whiteSecondary' : 'dark:bg-blackPrimary bg-whiteSecondary dark:text-whiteSecondary text-blackPrimary'}`}
            onClick={() => props.setParams({...props.params, page:number})}
          >
            {number}
          </button>
        ))}
        {/* <button
          className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary py-1 px-3 hover:border-gray-500"
          onClick={() => props.setParams({...props.params, page:props.params.page+1})}
          disabled={currentPage === totalPages}
        >
          Next
        </button> */}
      </div>
    );
};
  
export default Pagination;