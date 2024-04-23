import Link from 'next/link';
import React from 'react'

function IconButton2({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick, radius, borderColor, isFull, active, activeColor, iconHover, textCOlor }) {
  return (
    <>
      {href ? (
        <Link
          className={`inline-block ${textCOlor} bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px]  
         ${iconHover} ${radius ? "rounded-[52px]" : "rounded-[10px]"
            } p-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"}`}
          href={href}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`${isFull && icon && "w-full justify-between"} flex items-center`}>
              <span className={`${iconHover}`}>{children}</span>
            </span>
          </span>

          <span
            className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </Link>
      ) : (
        <button
          className={`inline-block ${textCOlor} bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white    
         ${iconHover} ${radius ? "rounded-[52px]" : "rounded-[10px]"
            } p-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"} ${active && activeColor}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`${isFull && icon && "w-full flex justify-between"} items-center`}>
              <span className={`${iconHover}`}>{children}</span>
            </span>

          </span>
          {active && <span
            className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 flex ${color}`}
          ></span>}
          <span
            className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </button>
      )}
    </>
  );
}

export default IconButton2;
