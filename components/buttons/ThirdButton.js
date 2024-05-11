import React from 'react'

function ThirdButton({ children, active, onClick }) {
    return (
        <button
            type="button"
            className={`rounded-lg px-3 py-2 text-white bg-[#2E2E2E] ${active && "!bg-[#2D74FF] !shadow-blue-3"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ThirdButton