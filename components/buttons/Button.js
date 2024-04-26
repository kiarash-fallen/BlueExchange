import Link from 'next/link';
import React from 'react'

function Button({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick, radius, borderColor, isFull, active, activeColor }) {
  return (
    <>
      {href ? (
        <Link
          className={`hover-animation inline-block  bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]   
         ${radius ? radius : "rounded-[10px]"
            } px-5 py-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"}`}
          href={href}
        >
          <span className={`flex justify-center items-center ${!icon && "justify-center"}`} >
            <span className={` flex items-center ${isFull && icon && "w-full justify-between"}`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span>{children}</span>
              {hasLeftIcon ? <span className="mr-2">{icon}</span> : ""}
            </span>

          </span>

          <span
            className={`w-2/3 h-2 bottom-0 blur-[10px] rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </Link>
      ) : (
        <button
          className={`hover-animation inline-block bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]   
         ${radius ? radius : "rounded-[10px]"
            } px-5 py-2 group ${hover} ${borderColor ? "border-[#565656]" : "border-[#414141]"
            } ${isFull ? "w-full" : "w-auto"} ${active && activeColor}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`flex justify-center items-center ${isFull && icon && "w-full justify-between"}`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span className={active && "!text-white"}>{children}</span>
              {hasLeftIcon ? <span className="mr-2">{icon}</span> : ""}
            </span>

          </span>
          {active && <span
            className={`w-2/3 h-2 bottom-0 blur-md rounded-xl mx-auto -mb-2 flex ${color}`}
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
