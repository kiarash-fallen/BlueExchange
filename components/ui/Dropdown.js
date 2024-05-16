"use client"
import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Dropdown = ({ textClass, title, bgColor, width, rightIcon, leftIcon, items }) => {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(null)

    return <div className="relative">
        <button
            onClick={() => setOpen(prev => !prev)}
            className={`flex items-center px-3 py-2 justify-between rounded-lg ${textClass} ${bgColor} ${width}`}>
            <span className="flex items-center pl-4">
                {rightIcon}
                <span className="mx-2">{select ? select : title}</span>
                {leftIcon}
            </span>
            <span className={`transition-all ${open && "rotate-180"}`}>
                <ArrowDown />
            </span>
        </button>
        {open && <div className={`absolute px-4 cursor-pointer rounded-lg mt-2 text-white ${bgColor} ${width}`}>
            <ul>
                {items?.map(item => <li
                    className="py-4 my-2"
                    key={item.id}
                    onClick={() => {
                        item.action();
                        setSelect(item.name)
                        setOpen(prev => !prev);
                    }}
                >
                    {item.name}
                </li>)}
            </ul>
        </div>}
    </div>
}

export default Dropdown;
