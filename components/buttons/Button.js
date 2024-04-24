import Link from 'next/link';
import React from 'react'

function Button({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick, radius, borderColor, isFull, active, activeColor }) {
  return (
    <>
      {href ? (
        <Link
          className={`transition ease-in-out duration-500 inline-block  bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]   
         ${radius ? "rounded-[52px]" : "rounded-[10px]"
            } px-5 py-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"}`}
          href={href}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`${isFull && icon && "w-full justify-between"} flex items-center`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span>{children}</span>
              {hasLeftIcon ? <span className="ml-2">{icon}</span> : ""}
            </span>

          </span>

          <span
            className={`w-2/3 h-2 bottom-0 blur-[10px] rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </Link>
      ) : (
        <button
          className={`transition ease-in-out duration-500 inline-block  bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]   
         ${radius ? "rounded-[52px]" : "rounded-[10px]"
            } px-5 py-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"} ${active && activeColor}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`${isFull && icon && "w-full flex justify-between"} items-center`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span className={active && "!text-white"}>{children}</span>
              {hasLeftIcon ? <span className="ml-2">{icon}</span> : ""}
            </span>

          </span>
          {active && <span
            className={`w-1/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 flex ${color}`}
          ></span>}
          <span
            className={`w-2/3 h-2 bottom-0 blur-[10px] rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </button>
      )}
    </>
  );
}

export default Button;
