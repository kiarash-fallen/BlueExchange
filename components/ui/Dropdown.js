import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Dropdown = ({ textClass, title, bgColor, rightIcon, leftIcon }) => {
    const [open, setOpen] = useState(false);

    return <div className="relative">
        <button
            onClick={() => setOpen(prev => !prev)}
            className={`flex items-center px-3 py-2 justify-between rounded-lg ${textClass} ${bgColor}`}>
            <span className="flex items-center pl-4">
                {rightIcon}
                <span className="mx-2">{title}</span>
                {leftIcon}
            </span>
            <span className={`transition-all ${open && "rotate-180"}`}>
                <ArrowDown />
            </span>
        </button>
    </div>
}

export default Dropdown;
