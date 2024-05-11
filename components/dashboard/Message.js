import React from 'react'
import Comment from '../ui/icons/Comment'
import SmallCalendar from '../ui/icons/SmallCalendar'
import Line2 from '../ui/icons/Line'

function Message() {
    return (
        <>
            <div className="flex items-center justify-between py-2 px-4">
                <span className='flex-none flex justify-center items-center rounded-lg bg-[#303030] size-10 text-[#AAAAAA]'>
                    <Comment />
                </span>
                <div className="mx-4 max-w-[400px]">
                    <p className='text-white'>تیم پشتیبانی</p>
                    <p className="text-[#AAAAAA] truncate text-sm	">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده</p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center text-2xs text-[#22F38F]">
                        <SmallCalendar />
                        <span className="flex-none">12 مرداد - 1401 / 22:36 عصر</span>
                    </div>
                    <span className="size-3 rounded-full bg-[#FF5E5E] mt-2"></span>
                </div>

            </div>

            <Line2 />
        </>

    )
}

export default Message