import React from 'react';
import { usePagination, DOTS } from './usePagination';
import Dots from '../ui/icons/Dots';
import Button from '../buttons/Button';

const Pagination = ({ onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize, }) => {
    console.log(totalCount);
    console.log(siblingCount);
    console.log(currentPage);
    console.log(pageSize);

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    console.log(paginationRange)

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    // let lastPage = paginationRange[paginationRange?.length - 1];
    return (
        <ul
            dir='ltr'
            className={`flex py-10 text-white items-center [&>*]:mr-4`}
        >
            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === "DOTS") {
                    return <Dots key={Math.random} />;
                }

                // Render our Page Pills
                return (
                    <Button
                        key={Math.random}
                        type="button"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]"
                        onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </Button>
                );
            })}

        </ul>
    );
};

export default Pagination;