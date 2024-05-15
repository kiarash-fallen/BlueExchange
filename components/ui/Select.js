"use client"
import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Select = ({ title, hasLeftIcon, hasRightIcon, icon, bgColor, style }) => {
    const [open, setOpen] = useState(false);

    return <div className="relative">
        <button
            onClick={() => setOpen(prev => !prev)}
            className={`w-full flex items-center justify-between relative ${bgColor ? bgColor : 'bg-[#3A3A3A]'} rounded-xl  border border-[#3A3A3A] px-4 py-2 peer text-[#CCCCCC] ${style}`}>
            <span className="flex items-center text-sm ">
                {hasLeftIcon ? <span className=''>
                    {icon}
                </span> : ""}

                <span className="ml-4 text-sm mx-2">{title}</span>

            </span>
            <span className="flex items-center">
                {hasRightIcon ? <span className='mx-2 flex items-center'>
                    <span className="h-4 mx-2 border-[#565656]  border"></span>
                    {icon}
                </span> : ""}
                <span className={`transition-all ${open ? "rotate-180" : ""}`}>
                    <ArrowDown />
                </span>
            </span>

        </button>
    </div>
}

export default Select;
