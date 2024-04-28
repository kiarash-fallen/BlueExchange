"use client"
import React from 'react'
import Breadcrums from '../../../components/ui/Breadcrums';
import BEX from '../../../components/layout/BEX';
import Image from 'next/image';
import Flash from '../../../components/ui/icons/Flash';
import DigitalCurrencies from '../../../components/home/DigitalCurrencies';

const BuyDCs = () => {
  return (
    <div className="text-white w-full flex">
      <div className="w-[50%]">
        <div className="flex gap-10">
          <div className="flex flex-col justify-between">
            <Breadcrums
              breadcrums={[
                { label: "خانه", link: "/" },
                { label: "خرید ارز دیجیتال" },
              ]}
            />
            <div className="flex items-center my-6">
              <BEX />
              <h6 className="mr-3 text-sm">خرید آسان ارز دیجیتال</h6>
            </div>
            <h1 className="text-4xl font-semibold">بیش از 65.000+</h1>
          </div>
          <Image
            src="/assests/images/Hand.png"
            alt="Hands"
            width={332.07}
            height={100}
            className="-mb-8"
          />
        </div>
        <p className="text-3xl mt-6">
          ارز موجود در بلواکسچینج، که به راحتی میتوانید بخرید
        </p>
        <div className="mt-12 border border-[#4B4B4B] rounded-[28px] bg-[#323232] bg-opacity-[40%] p-4">
          <div className="flex justify-between">
            <button className="flex group justify-center text-[#AAAAAA] hover:text-white items-center w-[48%] hover:bg-[#FF5C5C] bg-[#323232] bg-opacity-[32%] border-[#454545] py-3 border rounded-2xl">
              <span>خرید ارز دیجیتال</span>
              <Flash className="rotate-45 fill-[#AAAAAA] group-hover:fill-white mr-2" />
            </button>
            <button className="flex group justify-center text-[#AAAAAA] hover:text-white items-center w-[48%] hover:bg-[#FF5C5C] bg-[#323232] bg-opacity-[32%] border-[#454545] py-3 border rounded-2xl">
              <span>فروش ارز دیجیتال</span>
              <Flash className="-rotate-45 fill-[#AAAAAA] group-hover:fill-white mr-2" />
            </button>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <DigitalCurrencies/>
      </div>
    </div>
  );
}

export default BuyDCs
