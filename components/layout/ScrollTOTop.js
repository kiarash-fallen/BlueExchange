import React from 'react'
import Up from '../ui/icons/Up'

function ScrollTOTop() {
    return (
        <>
            <button className='relative z-10 size-[48px] rounded-full flex items-center justify-center bg-[#1E1E1E] border border-[#B0B0B0]'>
                <Up />
            </button>
        </>
    )
}

export default ScrollTOTop