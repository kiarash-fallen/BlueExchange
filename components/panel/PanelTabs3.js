"use client";
import React, { useState } from 'react'

function PanelTabs3({ list, bgActive, widthFull,childWidth }) {
    const [active, setActive] = useState(0);
    return (
      <>
        <div
          className={` flex justify-center ${
            widthFull ? "w-full" : ""
          }`}
        >
          <span
            className={`flex ${
              bgActive ? "" : "bg-[#2C2C2C]"
            } justify-center text-white p-1 ${widthFull ? "w-full" : ""}`}
          >
            {list.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                className={`px-4 pt-2 pb-3 flex rounded-xl justify-center relative items-center mr-4 ${
                  childWidth ? childWidth : ""
                } ${
                  active === i
                    ? "bg-[#323232] text-[#22F38F] border-b border-b-[#22F38F]"
                    : "border border-[#484848]"
                }`}
              >
                {item.name}
                <span
                  className={` blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 ${
                    active === i ? "h-1.5 duration-300 w-2/3" : "w-0 h-0"
                  } bg-[#22F38F]`}
                ></span>
              </button>
            ))}
          </span>
        </div>
        <div className="mt-5">
          {list.map((item, i) => (
            <div key={item.name}>{i == active ? item.content : ""}</div>
          ))}
        </div>
      </>
    );
}

export default PanelTabs3;