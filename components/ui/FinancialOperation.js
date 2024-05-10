import React from 'react'

function FinancialOperation({ icon, text, onClick }) {
    return (
        <button
            type="button"
            className="text-[#AAAAAA] hover:text-white flex flex-col items-center justify-center"
            onClick={onClick}
        >
            {icon}
            <span className="mt-3">{text}</span>
        </button>
    )
}

export default FinancialOperation