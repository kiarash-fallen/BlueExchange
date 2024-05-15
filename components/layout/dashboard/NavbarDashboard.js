import React from 'react';
import dynamic from 'next/dynamic';
const Today = dynamic(() => import('./Today.js'), { ssr: false, loading: () => <p>Loading...</p> });
import IconButton from '../../buttons/IconButton';
import MobileButton from '../../ui/icons/MobileButton';
import Bell from '../../ui/icons/Bell';
import Avatar from '../../ui/Avatar';
import OutlineButton from '../../buttons/OutlineButton';
import Apps from '../../ui/icons/Apps';

function NavbarDashboard({ whitoutSidebar }) {
    return (
        <nav className={`z-20 flex justify-between items-center px-3 py-4 bg-[#262626] ${whitoutSidebar ? "w-full" : "fixed w-[86%]"}`}>
            <div className='flex items-center'>
                {whitoutSidebar && <>
                    <div className="bg-[#393939] w-[98px] h-12 rounded-2xl ">
                    </div> <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8"></span>
                </>}
                <Today />
                {whitoutSidebar && <OutlineButton
                    href={"/dashboard"}
                    hasRightIcon={true}
                    icon={<Apps />}
                    style={"!p-4 !border-white mr-4"}
                >

                    برگشت به پیشخوان
                </OutlineButton>}
            </div>

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