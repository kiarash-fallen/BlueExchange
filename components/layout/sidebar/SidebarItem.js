"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import SidebarButton from './SidebarButton'

function SidebarItem({ item }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    console.log(item)
    return (
        <div className="relative">
            <SidebarButton
                open={open}
                item={item}
                onClick={() => { item.hasArrow ? setOpen(prev => !prev) : router.push(`${item.url}`) }} />
            {open ? item.subItems.map(item => <div className="" key={item.id}>
                <SidebarButton
                    item={item}
                    onClick={() => { router.push(`${item.url}`) }} />
            </div>) : ""}
        </div>
    )
}

export default SidebarItem