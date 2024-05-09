"use client";
import { usePathname } from 'next/navigation';
import LinkArrow from '../../ui/icons/LinkArrow';

function SidebarButton({ item, onClick, open }) {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="group relative mb-1">
            <button
                type='button'
                className={`w-full flex justify-between items-center rounded-2xl border-b border-b-transparent p-3 transition-all duration-300 hover:bg-[#323232]  hover:text-white hover:border-b-[#2D74FF] ${(item.url === pathname) ? "text-white !border-b-[#2D74FF] bg-[#323232]" : "text-[#6A6A6A]"} ${!item.hasArrow ? "relative z-50" : ""}`}
                onClick={onClick}>
                <span className='flex items-center'>
                    {item.icon}
                    <span className="mr-2">{item.name}</span>
                </span>
                {item.hasArrow && <LinkArrow />}
            </button>
            <span
                className={`w-0 h-0 blur-[10px] rounded-xl mx-auto -mb-2 group-hover:h-1.5 left-1/2 -translate-x-1/2 bottom-2 absolute group-hover:duration-300 group-hover:w-2/3 bg-[#2D74FF] ${item.url === pathname && !item.hasArrow && "w-2/3 !h-1.5"}`}
            ></span>
        </div>

    )
}

export default SidebarButton