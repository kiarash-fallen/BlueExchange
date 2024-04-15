import Link from 'next/link';
import React from 'react'

function IconButton({ isDisable, type, href, icon, onClick }) {
  return (
    <>
      {href ? <Link
        className={` size-11 flex justify-center items-center border border-[#414141] rounded-xl ml-4`}
        href={href}>
        {icon}
      </Link> : <button
        className={`size-11 flex justify-center items-center border border-[#414141] rounded-xl ml-4`}
        type={type}
        disabled={isDisable}
        onClick={onClick}
      >
        {icon}
      </button >
      }
    </>


  )
}

export default IconButton;
