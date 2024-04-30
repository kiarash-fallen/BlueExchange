"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import InvisibleEye from '../ui/icons/InvisibleEye'
import ArrowDown from '../ui/icons/ArrowDown'
import Button from '../buttons/Button'
import Image from 'next/image'
import Eye from '../../public/assests/Icons/Eye'
import LeftArrow2 from '../ui/icons/LeftArrow2'

const SignIn = () => {
  const [type, setType] = useState(true)
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
      className="grid grid-cols-2 grid-rows-4 justify-between"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-[239px]">
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
          className="peer w-full rounded-2xl focus:border-white bg-[#252525] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
          placeholder="مثال : dakjsbd@email.com"
        />
        <label
          htmlFor="email"
          className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-white"
        >
          <span>ایمیل شما</span>
          {errors.password && <span className="text-red-700">*</span>}
        </label>
      </div>
      <div className="relative">
        <input
          id="password"
          {...register("password", { required: true })}
          type={`${type ? "password" : "text"}`}
          className="peer w-full rounded-2xl focus:border-white bg-[#252525] border border-[#AAAAAA] px-3 py-4 outline-none placeholder:text-[#AAAAAA] "
        />
        <label
          htmlFor="password"
          className="absolute -top-3 right-3 px-1 bg-opacity-100 text-[#AAAAAA] peer-focus:text-white bg-[#252525]"
        >
          <span className="">کلمه عبور</span>
          {errors.password && <span className="text-red-700">*</span>}
        </label>
        <label
          htmlFor="password"
          className="absolute bottom-4 left-4 cursor-pointer"
          onClick={() => setType(!type)}
        >
          {type ? <InvisibleEye /> : <Eye />}
        </label>
      </div>
      <button className="flex items-center col-start-2 h-fit w-fit mt-4">
        <span>رمز عبور خود را فراموش کردم</span>
        <Image
          src="/assests/Icons/Flash.svg"
          alt="flash"
          width={16}
          className="mr-4"
          height={100}
        />
      </button>
      <div className="col-span-2 row-start-4">
        <Button
          color="bg-[#2D74FF]"
          radius="rounded-[12px]"
          hover="hover:border-[#2D74FF]"
          type="submit"
          isFull={true}
          hasLeftIcon={true}
        >
          <span className="flex items-center">
            <span className="ml-4"> ورود به حساب کاربری</span>
            <LeftArrow2 />
          </span>
        </Button>
      </div>
    </form>
  );
}
export default SignIn

