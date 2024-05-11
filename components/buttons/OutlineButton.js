import Link from 'next/link';
import React from 'react'

function OutlineButton({ children, color, hover, isDisable, type, size, href, hasLeftIcon, hasRightIcon, icon, onClick, radius, borderColor, isFull, active, activeColor, iconCenter }) {
  return (
    <>
      {href ? (
        <Link
          className={`hover-animation relative inline-block rounded-2xl border border-[#484848] text-white
          px-5 py-2 ${isFull ? "w-full" : "w-auto"}`}
          href={href}
        >
          <span className={`flex justify-center items-center ${!icon && "justify-center"}`} >
            <span className={` flex items-center ${isFull && icon && !iconCenter && "w-full justify-between"}`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span>{children}</span>
              {hasLeftIcon ? <span className="mr-2">{icon}</span> : ""}
            </span>

          </span>
        </Link >
      ) : (
        <button
          className={`hover-animation relative inline-block rounded-2xl border border-[#484848] text-white px-5 py-2 ${isFull ? "w-full" : "w-auto"} ${active && activeColor}`}
          type={type}
          disabled={isDisable}
          onClick={onClick}
        >
          <span className={`flex items-center ${!icon && "justify-center"}`} >
            <span className={`flex items-center ${isFull && icon && !iconCenter && "w-full justify-between"}`}>
              {hasRightIcon ? <span className="ml-2">{icon}</span> : ""}
              <span className={active && "!text-white"}>{children}</span>
              {hasLeftIcon ? <span className="mr-2">{icon}</span> : ""}
            </span>

          </span>

        </button>
      )
      }
    </>
  );
}

export default OutlineButton;
