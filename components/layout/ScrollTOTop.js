"use client"
import React from 'react'
import Up from '../ui/icons/Up'

function ScrollTOTop() {

    const backToTop = () => {
        document.documentElement.style.scrollBehavior = 'smooth';
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <button
                onClick={backToTop}
                className='relative z-10 size-[48px] rounded-full flex items-center justify-center bg-[#1E1E1E] border border-[#B0B0B0]'>
                <Up />
            </button>
        </>
    )
}

export default ScrollTOTop