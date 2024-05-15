"use client"
import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Select2 = ({ title, hasLeftIcon, hasRightIcon, icon, bgColor, style, label }) => {
    const [openSelect, setopenSelect] = useState(false);

    return <div className="relative text-[#AAAAAA]">
        <label className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 focus-within:text-white">{label}</label>
        <div
            onClick={() => setopenSelect(prev => !prev)}
            className={`w-full flex items-center justify-between rounded-2xl hover-animation border  focus-within:border- focus-within:border-white bg-[#252525] bg-opacity-[32%] border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA] ${style}`}>
            <span className="flex items-center text-sm ">
                <span className="ml-4 text-sm mx-2">{title}</span>
                {hasLeftIcon ? <span className=''>
                    {icon}
                </span> : ""}
            </span>
            <span className="flex items-center">
                {hasRightIcon ? <span className='mx-2 flex items-center'>
                    <span className="h-4 mx-2 border-[#565656]"></span>
                    {icon}
                </span> : ""}
                <span className={`transition-all ${openSelect ? "rotate-180" : ""}`}>
                    <ArrowDown />
                </span>
            </span>

        </div>
    </div>
}

export default Select2;
