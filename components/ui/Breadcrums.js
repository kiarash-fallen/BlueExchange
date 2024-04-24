import React from 'react'
import Link from 'next/link'
import LeftArrow from './icons/LeftArrow'

function Breadcrums({ breadcrums }) {
    return (
        <div className="flex">
            {breadcrums.map((breadcrumb, index) => (
                <div key={index} className="flex items-center">
                    {index > 0 && <LeftArrow />}
                    {breadcrumb.link ? (
                        <Link className="text-[#AAAAAA]" href={breadcrumb.link}>{breadcrumb.label}</Link>
                    ) : (
                        <span className="text-white">{breadcrumb.label}</span>
                    )}
                </div>
            ))
            }
        </div >
    )
}

export default Breadcrums