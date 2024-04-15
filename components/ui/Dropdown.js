import { useState } from "react";
import ArrowDown from "./icons/ArrowDown";

const Dropdown = ({ title }) => {
    const [open, setOpen] = useState(false);

    return <div className="relative">
        <button
            onClick={() => setOpen(prev => !prev)}
            className="flex items-center justify-between text-[#AAAAAA]">
            <span className="ml-4 text-sm	">{title}</span>
            <span className={`transition-all ${open ? "rotate-180" : ""}`}>
                <ArrowDown />
            </span>
        </button>
    </div>
}

export default Dropdown;
