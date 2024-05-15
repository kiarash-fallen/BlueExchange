"use client";
import React, { useState } from 'react'

function PanelTabs4({ list, btnFull, color }) {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className='flex justify-center'>
                <span className={`${btnFull ? "w-full flex" : "inline-flex"} bg-[#2C2C2C] text-white p-1 rounded-xl ${color}`}>
                    {list.map((item, i) => <button
                        key={item.name}
                        type='button'
                        onClick={() => setActive(i)}
                        className={`px-4 py-2 flex justify-center items-center rounded-xl ${active === i ? "bg-[#2D74FF] shadow-blue text-white" : "bg-transparent"} ${btnFull && "w-1/2 text-[#AAAAAA]"}`}>
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

export default PanelTabs4;