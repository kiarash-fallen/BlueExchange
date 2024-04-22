import React from 'react'

function Tag({ color, hoverColor, hasRightIcon, hasLeftIcon, icon, margin, children }) {
    return (
        <span className={`py-1 px-3 flex items-center text-xs rounded-lg border ${color} ${hoverColor} ${margin}`}>
            {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
            {children}
            {hasLeftIcon ? <span className="ml-2">{icon}</span> : ""}
        </span>
    )
}

export default Tag