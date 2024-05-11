"use client";
import React, { useState } from 'react'

function PanelTabs2({ list, bgActive, widthFull,childWidth }) {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className={`flex justify-center ${widthFull ? "w-full" : ""}`}>
                <span className={`flex ${bgActive ? "" : "bg-[#2C2C2C]"} text-white p-1 ${widthFull ? "w-full" : ""}`}>
                    {list.map((item, i) => <button
                        key={item.name}
                        type='button'
                        onClick={() => setActive(i)}
                        className={`px-4 pt-2 pb-3 flex justify-center items-center ${childWidth ? childWidth : ""} ${active === i ? "text-[#22F38F] border-b-2 border-[#22F38F]" : "text-[#AAAAAA]"}`}>
                        {item.name}
                    </button>)}
                </span>
            </div>
            <div className="mt-5">
                {list.map((item, i) => <div key={item.name}>{i == active ? item.content : ""}</div>)}
            </div>
        </>
    )
}

export default PanelTabs2;