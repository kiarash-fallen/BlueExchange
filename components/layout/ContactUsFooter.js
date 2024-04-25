import React from 'react'
import BEX from './BEX'
import Button from '../buttons/Button';
import Image from 'next/image';

const ContactUsFooter = () => {
  return (
    <div className="bg-[#323232] bg-opacity-[36%] border-[#373737] border rounded-[52px] px-10 text-white">
      <div className="flex items-center mt-10">
        <BEX />
        <h6 className="mr-3">همیشه کنارتیم</h6>
      </div>
      <div className="flex mt-10">
        <h1 className="text-3xl">24 ساعت روز و 7روز هفته</h1>
        <h1 className="text-3xl font-semibold">ما اینجاییم</h1>
      </div>
      <p className="mt-6 text-[#B0B0B0]">
        تیم بلو اکسچنج با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی
        دارد تا بتواند در تمام لحظات کنار شما باشد .
      </p>
      <div className='flex justify-between'>
        <form className="grid grid-cols-2 w-1/2 grid-rows-4 gap-x-5 gap-y-8 mt-6 px-2">
          <div className="relative">
            <input
              className="w-full rounded-2xl focus:border-b InputShadow hover-animation focus:border-b-[#22F38F] focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-[#323232] bg-[#252525] bg-opacity-[32%] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA] "
              placeholder="وارد کنید..."
            />
            <div className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 text-[#AAAAAA]">
              نام و نام خانوادگی :
            </div>
          </div>
          <div className="relative">
            <input
              className="w-full hover-animation rounded-2xl focus:border-b InputShadow focus:border-b-[#22F38F] focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-[#323232] bg-[#252525] bg-opacity-[32%] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA] "
              placeholder="وارد کنید ...."
            />
            <div className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 text-[#AAAAAA]">
              شماره یا ایمیل :
            </div>
          </div>
          <div className="relative col-span-2 row-span-2">
            <textarea className="rounded-2xl transition ease-in-out duration-300 w-full h-full InputShadow outline-none px-3 py-4 focus:border-b focus:border-b-[#22F38F] focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:bg-[#323232] bg-[#252525] bg-opacity-[32%] border border-[#AAAAAA]" />
            <div className="absolute -top-3 right-3 bg-[#252525] px-1 bg-opacity-100 text-[#AAAAAA]">
              شماره یا ایمیل :
            </div>
          </div>
          <div className="col-span-2">
            <Button
              type="submit"
              isFull={true}
              color="bg-[#22F38F]"
              hover="hover:border-[#22F38F]"
            >
              ارسال پیام
            </Button>
          </div>
        </form>
        <Image src="/assests/images/SideBySide.png" alt='SideBySide' height={100} width={500}/>
      </div>
    </div>
  );
}

export default ContactUsFooter
