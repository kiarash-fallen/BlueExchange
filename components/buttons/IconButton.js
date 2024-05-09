import Link from 'next/link';
import React from 'react'

function IconButton({ isDisable, type, href, icon, onClick, badge }) {
  return (
    <>
      {href ? <Link
        className={`relative size-11 flex justify-center items-center border border-[#414141] rounded-xl`}
        href={href}>
        {icon}
        {badge ? <span className="size-2 rounded-full bg-[#FF5C5C] absolute -right-1 bottom-0">{badge}</span> : ""}
      </Link> : <button
        className={`relative size-11 flex justify-center items-center border border-[#414141] rounded-xl`}
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
