import React from 'react';
import dynamic from 'next/dynamic';
const Today = dynamic(() => import('./Today.js'), { ssr: false, loading: () => <p>Loading...</p> });
import IconButton from '../../buttons/IconButton';
import MobileButton from '../../ui/icons/MobileButton';
import Bell from '../../ui/icons/Bell';
import Avatar from '../../ui/Avatar';

function NavbarDashboard() {
    return (
        <nav className="fixed z-20 w-[86%] flex justify-between items-center px-3 py-4 bg-[#262626]">
            <Today />
            <div className='flex items-center [&>*]:ml-4'>
                <IconButton href="/test" icon={<MobileButton />} />
                <IconButton href="/test" icon={<Bell />} badge={" "} />
                <span className="inline-block w-0.5 h-8 bg-[#323232]"></span>
                <Avatar />
                <span className="flex flex-col">
                    <span className="text-white">احسان امانیان</span>
                    <span className="text-[#AAAAAA] text-sm">09331809897</span>
                </span>
            </div>
        </nav>
    )
}

export default NavbarDashboard