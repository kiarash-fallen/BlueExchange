"use client"
import React, { useEffect, useState } from 'react';
import Calendar from '../../ui/icons/Calendar';

function Today() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div className="flex items-center border border-[#393939] rounded-xl p-4 text-[#AAAAAA]">
            <Calendar />
            <span className='mr-2' >
                <span>
                    {dateState.toLocaleDateString('fa-IR', {
                        day: 'numeric',
                        month: 'short',
                    })}
                </span>
                <span>-</span>
                <span>
                    {dateState.toLocaleDateString('fa-IR', {
                        year: 'numeric',
                    })}
                </span>
            </span>
            <span className="mx-1">/</span>
            <span>
                {dateState.toLocaleString('fa-IR', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </span>
        </div>
    )
}

export default Today