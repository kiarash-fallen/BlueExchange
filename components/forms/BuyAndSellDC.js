"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'
import Select from '../ui/Select';
import Eth from '../../public/assests/Icons/eth.svg'
import Rial from '../ui/icons/Rial';
import DollarSign from '../../public/assests/Icons/DollarSign';
import Button from '../buttons/Button';

const BuyDCs = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 grid-rows-5"
    >
      <div className="flex mt-8 justify-between relative">
        <div className="w-[48%]">
          <Select
            title="اتریم ( ETH )"
            hasLeftIcon={true}
            bgColor="none"
            icon={
              <span
                className="size-[30px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs"
              >
                <Image src={Eth} width="auto" height="auto" alt="eth" />
              </span>
            }
          />
        </div>
        <Image
          src="/assests/images/GreenEdit.png"
          alt="GreenEdit"
          className="absolute left-1/2 -translate-x-1/2 z-50 top-2"
          width={48}
          height={100}
        />
        <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] pl-3 pr-14 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="تومان ( IRR )"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
          >
            <span className="text-sm">با مقدار ( تومان ) :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <label htmlFor="toman" className="absolute right-2 top-2">
            <Rial />
          </label>
          <label
            htmlFor="toman"
            className="absolute left-2 top-3 peer-focus:text-white text-[#AAAAAA]"
          >
            <span>0 تومان</span>
          </label>
        </div>
      </div>
      <div className={`LinesGradients h-[1px] w-full mt-8`}></div>
      <div className="flex justify-between relative">
      <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] px-3 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="100.000 تومان"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#262626] peer-focus:text-white"
          >
            <span className="text-sm">مبلغ کل :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
        </div>
        <Image
          src="/assests/icons/Shuffle.svg"
          alt="GreenEdit"
          className="absolute left-1/2 -translate-x-1/2 z-50 top-2 bg-[#F39422] p-2 rounded-full"
          width={32}
          height={100}
        />
        <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] pl-3 pr-14 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="154.256.65"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
          >
            <span className="text-sm">مقدار اتریوم :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <label htmlFor="toman" className="absolute right-4 top-3">
            <span
              className="size-[26px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs"
            >
              <Image src={Eth} width="auto" height="auto" alt="eth" />
            </span>
          </label>
        </div>
      </div>
      <div className='w-full flex justify-between'>
            <div className='bg-[#323232] bg-opacity-[#32%] border h-fit border-[#454545] rounded-[16px] py-3 px-4 flex items-center w-[48%]'>
                <DollarSign className='fill-white !w-[16px]'/>
                <span className='mr-2'>قیمت :</span>
                <span className='mr-auto'>154.256.65</span>
            </div>
            <div className='bg-[#323232] bg-opacity-[#32%] border h-fit border-[#454545] rounded-[16px] py-3 px-4 flex items-center w-[48%]'>
                <DollarSign className='fill-white !w-[16px]'/>
                <span className='mr-2'>موجودی کیف پول :</span>
                <span className='mr-auto'>522.000.000 ت</span>
            </div>
      </div>
      <div className='row-start-5 pt-8 flex justify-between'>
        <div className='w-[48%]'>
        <Button color="bg-[#2D74FF]" isFull={true} hover="hover:border-[#2D74FF]">افزایش موجودی حساب</Button>
        </div>
        <div className='w-[48%]'>
        <Button color="bg-[#2D74FF]" isFull={true} hover="hover:border-[#2D74FF]">ثبت سفارش جدید</Button>
        </div>
      </div>
    </form>
  );
}

export default BuyDCs;

export const SellDCs = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 grid-rows-5"
    >
      <div className="flex mt-8 justify-between relative">
        <div className="w-[48%]">
          <Select
            title="اتریم ( ETH )"
            hasLeftIcon={true}
            bgColor="none"
            icon={
              <span
                className="size-[30px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs"
              >
                <Image src={Eth} width="auto" height="auto" alt="eth" />
              </span>
            }
          />
        </div>
        <Image
          src="/assests/images/GreenEdit.png"
          alt="GreenEdit"
          className="absolute left-1/2 -translate-x-1/2 z-50 top-2"
          width={48}
          height={100}
        />
        <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] pl-3 pr-14 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="تومان ( IRR )"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
          >
            <span className="text-sm">با مقدار ( تومان ) :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <label htmlFor="toman" className="absolute right-2 top-2">
            <Rial />
          </label>
          <label
            htmlFor="toman"
            className="absolute left-2 top-3 peer-focus:text-white text-[#AAAAAA]"
          >
            <span>0 تومان</span>
          </label>
        </div>
      </div>
      <div className={`LinesGradients h-[1px] w-full mt-8`}></div>
      <div className="flex justify-between relative">
      <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] px-3 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="100.000 تومان"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#262626] peer-focus:text-white"
          >
            <span className="text-sm">مبلغ کل :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
        </div>
        <Image
          src="/assests/icons/Shuffle.svg"
          alt="GreenEdit"
          className="absolute left-1/2 -translate-x-1/2 z-50 top-2 bg-[#F39422] p-2 rounded-full"
          width={32}
          height={100}
        />
        <div className="relative w-[48%]">
          <input
            id="toman"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl focus:border-white bg-[#262626] border border-[#505050] pl-3 pr-14 py-3 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="154.256.65"
          />
          <label
            htmlFor="toman"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
          >
            <span className="text-sm">مقدار اتریوم :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <label htmlFor="toman" className="absolute right-4 top-3">
            <span
              className="size-[26px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs"
            >
              <Image src={Eth} width="auto" height="auto" alt="eth" />
            </span>
          </label>
        </div>
      </div>
      <div className='w-full flex justify-between'>
            <div className='bg-[#323232] bg-opacity-[#32%] border h-fit border-[#454545] rounded-[16px] py-3 px-4 flex items-center w-[48%]'>
                <DollarSign className='fill-white !w-[16px]'/>
                <span className='mr-2'>قیمت :</span>
                <span className='mr-auto'>154.256.65</span>
            </div>
            <div className='bg-[#323232] bg-opacity-[#32%] border h-fit border-[#454545] rounded-[16px] py-3 px-4 flex items-center w-[48%]'>
                <DollarSign className='fill-white !w-[16px]'/>
                <span className='mr-2'>موجودی کیف پول :</span>
                <span className='mr-auto'>522.000.000 ت</span>
            </div>
      </div>
      <div className='row-start-5 pt-8 flex justify-between'>
        <div className='w-[48%]'>
        <Button color="bg-[#2D74FF]" isFull={true} hover="hover:border-[#2D74FF]">افزایش موجودی حساب</Button>
        </div>
        <div className='w-[48%]'>
        <Button color="bg-[#2D74FF]" isFull={true} hover="hover:border-[#2D74FF]">ثبت سفارش جدید</Button>
        </div>
      </div>
    </form>
  );
}