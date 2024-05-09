import React from 'react'
import Today from './Today'

function NavbarDashboard() {
    return (
        <nav className="w-full flex justify-between items-center px-3 py-4 bg-[#262626]">
            <Today />
        </nav>
    )
}

export default NavbarDashboard