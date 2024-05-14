'use client'
import React, { useEffect, useState } from 'react'
import Add from '../ui/icons/Add'
import Close from '../ui/icons/Close';

function Modal({ children, btnText, titleText }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.querySelector("body").classList.add("overflow-hidden");
        } else {
            document.querySelector("body").classList.remove("overflow-hidden");
        }
    }, [open]);

    return (
        <>
            <button
                type='button'
                className='text-[#22F38F] flex items-center'
                onClick={() => setOpen(prev => !prev)}
            >
                <Add />
                <span className="mr-2">{btnText}</span>
            </button>
            {open && <div
                className={`fixed inset-0 modal-background overflow-y-auto z-50`}>
                <div className="flex min-h-full items-center justify-center p-4 sm:items-center"
                    onClick={() => setOpen(prev => !prev)}>
                    <div
                        className={`relative w-[45%] p-4 border border-[#464646] rounded-xl bg-[#262626]`}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <div className='bg-[#363636] rounded-2xl p-4 flex items-center justify-between'>
                            <span className="flex items-center text-white">
                                <Add />
                                <span className='mr-2'>{titleText}</span>
                            </span>
                            <button
                                onClick={() => setOpen(prev => !prev)}
                                type='button'
                                className='rounded-lg bg-[#FF6666] flex justify-center items-center size-6 shadow-red'>
                                <Close />
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal