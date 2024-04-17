import React, { useState } from 'react'

function PanelTabs({ list }) {
    const [active, setActive] = useState(0);
    return (
        <>
            <div className='flex justify-center'>
                <span className="inline-flex bg-[#2C2C2C] text-white p-1 rounded-xl">
                    {list.map((item, i) => <button
                        key={item.name}
                        type='button'
                        onClick={() => setActive(i)}
                        className={`px-4 py-2 flex justify-center items-center rounded-xl ${active === i ? "bg-[#2D74FF]" : "bg-transparent"}`}>
                        {item.name}
                    </button>)}
                </span>
            </div>

        </>
    )
}

export default PanelTabs