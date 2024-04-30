"use client";
import React, { useMemo, useState } from 'react';
import Pagination from '../pagination/Pagination';
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 },];
let PageSize = 1;

function PaginationContainer() {
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className="flex justify-center">
            <Pagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default PaginationContainer