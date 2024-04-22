import Link from 'next/link';
import React from 'react'

function Button({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick,radius,borderColor }) {
  return (
    <>
      {href ? (
        <Link
          className={`inline-block bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]   
         ${
           radius ? "rounded-[52px]" : "rounded-[10px]"
         } px-5 py-2 group ${hover} ${
            borderColor ? "border-[#565656]" : "border-[#414141]"
          }`}
          href={href}
        >
          <span className="flex items-center">
            {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
            {children}
            {hasLeftIcon ? <span className="ml-2">{icon}</span> : ""}
          </span>

          <span
            className={`w-2/3 h-2 bottom-0 blur-[10px] rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </Link>
      ) : (
        <button
          className={`inline-block bg-[#323232] border-b-[1.5px] hover:border-b-[1.5px] hover:text-white text-[#AAAAAA]
        rounded-[10px] px-5 py-2 group ${hover} ${
            radius ? "rounded-[32px]" : "rounded-[10px]"
          } ${
            borderColor ? "border-[#565656]" : "border-[#414141]"
          }`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className="flex items-center">
            {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
            {children}
            {hasLeftIcon ? <span className="ml-2">{icon}</span> : ""}
          </span>

          <span
            className={`w-2/3 h-2 bottom-0 blur-[10px] rounded-xl mx-auto -mb-2 hidden group-hover:flex ${color}`}
          ></span>
        </button>
      )}
    </>
  );
}

export default Button;
