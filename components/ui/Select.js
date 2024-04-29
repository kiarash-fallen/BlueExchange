import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Select = ({ title, hasLeftIcon, hasRightIcon, icon, bgColor }) => {
    const [open, setOpen] = useState(false);

    return <div className="relative">
        <button
            onClick={() => setOpen(prev => !prev)}
            className={`w-full flex items-center justify-between relative ${bgColor ? bgColor : 'bg-[#3A3A3A]'} rounded-xl  border border-[#3A3A3A] px-4 py-2 peer`}>
            <span className="flex items-center">
                {hasLeftIcon ? <span className='ml-2 text-sm text-[#CCCCCC]"'>
                    {icon}
                </span> : ""}
                <span className="ml-4 text-sm text-[#CCCCCC]">{title}</span>
                {hasRightIcon ? <span className='mr-2'>
                    {icon}
                </span> : ""}
            </span>
            <span className={`transition-all  text-[#CCCCCC] ${open ? "rotate-180" : ""}`}>
                <ArrowDown />
            </span>
        </button>
    </div>
}

export default Select;
