import Link from 'next/link';
import React from 'react'

function SecondButton({ children, color, hover, isDisable, type, typeBtn, size, href, hasLeftIcon, hasRightIcon, icon, shadow, radius, full, textColor, bgHover, textSize, onClick }) {
  if (href) {
    return <Link
      className={`w-full bg-[#2D74FF] py-2 text-white flex justify-center items-center rounded-xl shadow-blue`}
      href={href}>
      <span className='flex items-center'>
        {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
        {children}
        {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
      </span>
    </Link>
  } else {
    switch (typeBtn) {
      case "outline":
        return <button
          className={`py-2 transition ease-in-out duration-500 px-4 flex justify-center items-center rounded-xl border ${full ? "w-full" : "w-auto"} ${color} ${textColor} hover:text-white ${bgHover} ${textSize}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className='flex items-center'>
            {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
            {children}
            {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
          </span>
        </button >
      case "filled":
        return <button
          className={`px-6 py-3 transition ease-in-out duration-500 text-white flex justify-center items-center ${full ? "w-full" : "w-auto"} ${shadow} ${color} ${radius} ${textColor} ${textSize}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className='flex items-center'>
            {hasRightIcon ? <span className='ml-2'>{icon}</span> : ""}
            {children}
            {hasLeftIcon ? <span className='ml-2'>{icon}</span> : ""}
          </span>
        </button >
    }
  }
}
export default SecondButton;
