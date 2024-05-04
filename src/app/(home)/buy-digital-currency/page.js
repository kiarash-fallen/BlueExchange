"use client"
import React, { useState } from 'react'
import Breadcrums from '../../../../components/ui/Breadcrums';
import BEX from '../../../../components/layout/BEX';
import Image from 'next/image';
import Flash from '../../../../components/ui/icons/Flash';
import Currencies from '../../../../components/ui/Currencies';
import EmblaCarousel from '../../../../components/Embla/EmblaCarousel';
import BuyDCs, { SellDCs } from '../../../../components/forms/BuyAndSellDC';
import Group9998 from "../../../../public/assests/images/Group9998.png";

const BuyDigitalCurrency = () => {
  const [sellBuy , setSellBuy] = useState(false)
  const [slides , setSlides] = useState(0)
  console.log(slides)
    const OPTIONS = {
      dragFree: true,
      loop: true,
      align: "start",
      direction: "rtl",
      startIndex : 2,
    };
  return (
    <div className="text-white w-full flex justify-between mb-40">
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
            <button onClick={() => setSellBuy(false)} className={`${sellBuy ? "bg-[#323232] bg-opacity-[32%] text-[#AAAAAA]" : "bg-[#2D74FF] text-white"} flex group justify-center hover:text-white items-center w-[48%] hover:bg-[#2D74FF] border-[#454545] py-3 border rounded-2xl`}>
              <span>خرید ارز دیجیتال</span>
              <Flash className={`rotate-45 group-hover:fill-white mr-2 ${sellBuy ? "fill-[#AAAAAA]" : "fill-white"}`} />
            </button>
            <button onClick={() => setSellBuy(true)} className={`${sellBuy ? "bg-[#FF5C5C] text-white" : "text-[#AAAAAA] bg-[#323232] bg-opacity-[32%]"} flex group justify-center hover:text-white items-center w-[48%] hover:bg-[#FF5C5C] border-[#454545] py-3 border rounded-2xl`}>
              <span>فروش ارز دیجیتال</span>
              <Flash className={`${sellBuy ? "fill-white" : "fill-[#AAAAAA]"} -rotate-45 group-hover:fill-white mr-2`} />
            </button>
          </div>
          {
            sellBuy ? <SellDCs/> :<BuyDCs />
          }
          
        </div>
      </div>
      <div className="w-[45%]">
        <div className="bg-[#323232] bg-opacity-[40%] h-fit py-6 rounded-[40px] border border-[#4B4B4B]">
          {[0, 1, 2, 3, 4].map((item, ind) => (
            <div key={ind}>
              <EmblaCarousel options={OPTIONS}>
                <Currencies />
              </EmblaCarousel>
              <div
                className={`LinesGradients h-[1px] w-full my-4 ${
                  ind === 4 ? "hidden" : "block"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className='mt-14'>
          <Image
            src={Group9998}
            alt="image"
            width="auto"
            height="auto"
            className="m-auto"
          />
          <div className='w-full h-[60px] bg-[#323232] bg-opacity-[40%] border border-[#4B4B4B] rounded-[28px]'></div>
        </div>
      </div>
    </div>
  );
}

export default BuyDigitalCurrency
