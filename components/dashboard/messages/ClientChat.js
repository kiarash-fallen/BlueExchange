import React from 'react'
import IconButton from '../../buttons/IconButton'
import UserHeadset from '../../ui/icons/UserHeadset'
import SmallCalendar from '../../ui/icons/SmallCalendar'

function ClientChat() {
    return (
        <div className='box-8 flex justify-between relative'>
            <span className="flex-none">
                <IconButton type="button" filled={true} icon={<UserHeadset />} isDisable={true} />
            </span>

            <div className='mr-2'>
                <div className=" flex justify-between items-center text-white">
                    <span className='text-xs'>تیم پشتیبانی</span>
                    <div className="flex items-center text-2xs text-[#22F38F]">
                        <SmallCalendar />
                        <span className="flex-none">12 مرداد - 1401 / 22:36 عصر</span>
                    </div>
                </div>
                <p className='text-[#AAAAAA] text-sm mt-2 h-10 overflow-hidden'>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده....</p>
            </div>
            <span className='absolute left-2 bottom-2 rounded-full size-5 bg-[#2D74FF] shadow text-white text-center text-sm'>
                1
            </span>
        </div>
    )
}

export default ClientChat