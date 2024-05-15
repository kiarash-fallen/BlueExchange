import React from 'react'
import Setting from '../../../../../../components/ui/icons/Setting'
import Toggle from '../../../../../../components/ui/Toggle'

function page() {
    return (
        <div className='grid grid-cols-2 text-white gap-4'>
            <div>
                <div className="box-13">
                    <div className="flex items-center">
                        <span className='flex items-center'>
                            <Setting />
                            <span className='mr-2'>تنظیمات بازار</span>
                        </span>
                    </div>
                </div>
                <ul>
                    <li className='flex justify-between items-center py-4 border-b border-b-[#444444]'>
                        <span>دریافت تایید برای ثبت سفارش</span>
                        <Toggle type={true} />
                    </li>
                    <li className='flex justify-between items-center py-4 border-b border-b-[#444444]'>
                        <span>دریافت تأیید برای لغو سفارش</span>
                        <Toggle type={true} />
                    </li>
                    <li className='flex justify-between items-center py-4'>
                        <span>نمایش میانگین و جمع سفارش‌ها در لیست سفارش</span>
                        <Toggle type={true} />
                    </li>
                </ul>
            </div>
            <div>
                <div className="box-13">
                    <div className="flex items-center">
                        <span className='flex items-center'>
                            <Setting />
                            <span className='mr-2'>مدیریت پیام ها</span>
                        </span>
                    </div>
                </div>
                <ul>
                    <li className='flex justify-between items-center py-4 border-b border-b-[#444444]'>
                        <span>اطلاع‌رسانی با ایمیل</span>
                        <Toggle type={true} />
                    </li>
                    <li className='flex justify-between items-center py-4'>
                        <span>فعال سازی بات تلگرام</span>
                        <Toggle type={true} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default page