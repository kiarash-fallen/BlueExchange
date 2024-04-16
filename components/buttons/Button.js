import Link from 'next/link';
import React from 'react'

function Button({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick }) {
  return (
    <>
      {href ? <Link
        className={`inline-block bg-[#323232] border-b hover:border-b hover:text-white text-[#AAAAAA]  border-[#414141] 
         rounded-[10px] px-5 py-2 group ${hover}`}
        href={href}>
        <span className='flex items-center'>
          {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
          {children}
          {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
        </span>

        <span className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}></span>
      </Link> : <button
        className={`inline-block bg-[#323232] border-b hover:border-b hover:text-white text-[#AAAAAA]  border-[#414141] 
         rounded-[10px] px-5 py-2 group ${hover}`}
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

export default Button;
