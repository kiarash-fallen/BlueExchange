"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Button from '../buttons/Button';
import LeftArrow2 from '../ui/icons/LeftArrow2';

const SignUp = ({ signingUp }) => {
  const [type, setType] = useState(true)
  const [check, setCheck] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <form
      className="grid grid-cols-2 grid-rows-4 justify-between relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-[239px]">
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="peer w-full rounded-2xl focus:border-white bg-[#252525] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
          placeholder="مثال : 0999999999"
        />
        <label
          htmlFor="email"
          className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
        >
          <span>شماره تماس</span>
          {errors.password && <span className="text-red-700">*</span>}
        </label>
        <label
          htmlFor="email"
          className="absolute bottom-3 left-4 cursor-pointer"
          onClick={() => setType(!type)}
        >
          <input type="checkbox" className="w-5 h-5" onClick={() => setCheck(true)} checked={check ? true : false} />
        </label>
      </div>
      <span className='absolute left-[50.7%] bottom-[82%] text-sm'>یا</span>
      <div className="relative">
        <input
          id="password"
          {...register("password", { required: true })}
          className="peer w-full rounded-2xl focus:border-white bg-[#252525] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA] "
        />
        <label
          htmlFor="password"
          className="absolute -top-3 right-3 px-1 bg-opacity-100 text-[#AAAAAA] peer-focus:text-white bg-[#252525]"
        >
          <span className="">ایمیل شما</span>
          {errors.password && <span className="text-red-700">*</span>}
        </label>
        <label
          htmlFor="password"
          className="absolute bottom-3 left-4 cursor-pointer"
        >
          <input type="checkbox" checked={check ? false : true} onClick={() => setCheck(false)} className="w-5 h-5" />
        </label>
      </div>
      <div className="col-span-2 row-start-4">
        <Button
          color="bg-[#2D74FF]"
          radius="rounded-[12px]"
          hover="hover:border-[#2D74FF]"
          type="submit"
          onClick={() => signingUp()}
          isFull={true}
        >
          <span className="flex items-center">
            <span className="ml-4">ارسال کد تایید</span>
            <LeftArrow2 />
          </span>
        </Button>
      </div>
    </form>
  );
}

export default SignUp
