import Link from 'next/link'
import React from 'react'
import Chevron from './icons/Chevron'

function HeaderCart({ title, icon, href }) {
    return (
        <div className="flex items-center justify-between text-white">
            <span className="flex items-center">
                {icon}
                <span className="font-medium mr-2">{title}</span>
            </span>
            <Link href={href} className="border border-white group rounded-lg hover:bg-white size-5 flex justify-center
            items-center">
                <Chevron />
            </Link>

        </div>
    )
}

export default HeaderCart