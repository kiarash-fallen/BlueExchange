import React from 'react'
import User from './icons/User'
import Image from 'next/image'

function Avatar({ src }) {
    return (
        <span className="size-12 rounded-xl bg-[#393939] flex justify-center items-center text-[#6A6A6A]">
            {src ? <Image src={src} alt='user' width="auto" height="auto" /> : <User />}
        </span>
    )
}

export default Avatar