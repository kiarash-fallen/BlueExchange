"use client";
import React, { useState } from 'react'

function PanelTabs({ list }) {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className={`flex justify-center ${widthFull ? "w-full" : ""}`}>
                <span className={`flex ${bgActive ? "" : "bg-[#323232]"} text-white p-1 rounded-xl ${widthFull ? "w-full" : ""}`}>
                    {list.map((item, i) => <button
                        key={item.name}
                        type='button'
                        onClick={() => setActive(i)}
                        className={`px-4 py-2 flex justify-center items-center rounded-xl ${childWidth ? childWidth : ""} ${active === i ? "bg-[#2D74FF] shadow-blue" : "bg-transparent"}`}>
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

export default PanelTabs;