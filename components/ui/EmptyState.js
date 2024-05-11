import React from 'react'
import Sad from './icons/Sad'

function EmptyState({ text }) {
    return (
        <div className="flex flex-col items-center text-white">
            <Sad />
            <p className="mt-4">{text}</p>
        </div>
    )
}

export default EmptyState