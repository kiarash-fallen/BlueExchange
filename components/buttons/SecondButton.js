import Link from 'next/link';
import React from 'react'

function SecondButton({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick }) {
  return (
    <>
      {href ? <Link
        className={`w-full bg-[#2D74FF] py-2 text-white flex justify-center items-center rounded-xl`}
        href={href}>
        <span className='flex items-center'>
          {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
          {children}
          {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
        </span>

        <span className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}></span>
      </Link> : <button
        className={`w-full bg-[#2D74FF] py-2 text-white flex justify-center items-center rounded-xl`}
        type={type}
        disabled={isDisable}
        onClick={onClick}
      >
        <span className='flex items-center'>
          {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
          {children}
          {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
        </span>

        <span className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}></span>
      </button >
      }
    </>


  )
}

export default SecondButton;
