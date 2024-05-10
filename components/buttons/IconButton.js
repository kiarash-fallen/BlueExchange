import Link from 'next/link';
import React from 'react'

function IconButton({ isFull, isDisable, type, href, icon, onClick, badge, filled }) {
  return (
    <>
      {href ? <Link
        className={`relative size-11 flex justify-center items-center transition-hover duration-700 ${filled ? "bg-[#303030] hover:bg-white text-[#AAAAAA] hover:text-black" : "border border-[#414141]"}  rounded-xl ${isFull
          && "w-full"}`}
        href={href}>
        {icon}
        {badge ? <span className="size-2 rounded-full bg-[#FF5C5C] absolute -right-1 bottom-0">{badge}</span> : ""}
      </Link> : <button
        className={`relative size-11 flex justify-center items-center transition-hover duration-700 ${filled ? "bg-[#303030] hover:bg-white text-[#AAAAAA] hover:text-black" : "border border-[#414141]"} rounded-xl ${isFull
          && "w-full"} ${isDisable && "!bg-[#292929] [hover:bg-[#303030] hover:text-[#AAAAAA]"}`}
        type={type}
        disabled={isDisable}
        onClick={onClick}
      >
        {icon}
        {badge ? <span className="size-2 rounded-full bg-[#FF5C5C] absolute -right-1 bottom-0">{badge}</span> : ""}
      </button>
      }
    </>


  )
}

export default IconButton;
