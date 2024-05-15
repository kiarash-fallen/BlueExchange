"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SidebarButton from './SidebarButton'

function SidebarItem({ item }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    console.log(item)
    return (
        <>
            <SidebarButton
                open={open}
                item={item}
                onClick={() => { item.hasArrow ? setOpen(prev => !prev) : router.push(`${item.url}`); }} />
            {open ? <div onClick={() => setOpen(false)} className="fixed inset-0 w-full h-screen z-10"></div> : ""}
            <div onClick={(e) => e.stopPropagation()}>
                {open ? <div className={`bg-[#262626] w-48 z-50 absolute py-3 px-2 rounded-tl-2xl rounded-bl-2xl -translate-y-10 right-[14%] shadow-side-menu`}>
                    {item.subItems.map(item => <div key={item.id}>
                        <SidebarButton
                            item={item}
                            onClick={() => { router.push(`${item.url}`); setOpen(prev => !prev) }} />
                    </div>)}
                </div> : ""}
            </div>
        </>
    )
}

export default SidebarItem;