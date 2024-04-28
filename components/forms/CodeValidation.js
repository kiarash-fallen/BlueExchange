"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../buttons/Button'
import ArrowDown from '../ui/icons/ArrowDown'
import LeftArrow from '../ui/icons/LeftArrow'
import Recycle from '../ui/icons/Recycle'
import Image from 'next/image'


const CodeValidation = () => {
  const [otp , setOTP ] = useState(['', '', '',''])
  const { register , handleSubmit } = useForm();
  const initialTime = 120;
  const [time , setTime ] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {clearInterval(timer)}
  },[])

  const handleRestart = () => {
    setTime(initialTime);
  }

  const handleChange = (e, index) => {
    if(!isNaN(e.target.value)) {
      const newOTP = [...otp];
      newOTP[index] = e.target.value;
      setOTP(newOTP)

      if(e.target.value !== ''){
        if(index < otp.length - 1) {
          document.getElementById(`otp-input-${index + 1}`).focus();
        }
      }
    }
  }

  const onSubmit = (data) => {
    console.log(data);
  }


  return (
    <div className="flex justify-center items-center">
      <form
        className="grid grid-cols-2 grid-rows-3 text-black gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center mx-1"
            />
          ))}
        </div>
        <div className="bg-[#2D74FF] p-0.5 rounded-xl h-[34px] my-auto flex items-center justify-between">
          <button
            onClick={handleRestart}
            disabled={time > 0}
            className="bg-white py-0.5 w-2/3 rounded-[10px] flex justify-center"
          >
            <span>ارسال دوباره رمز</span>
            <ArrowDown className="rotate-90 my-auto mr-2" />
          </button>
          <div className='flex'>
            <h1 className="text-white">
              {Math.floor(time / 60)
                .toString()
                .padStart(2, "0")}
              :{(time % 60).toString().padStart(2, "0")}
            </h1>
            <Image src='/assests/Icons/Time.svg' alt='Timer' width={16} height={100} className='mx-2'/>
          </div>
        </div>
        <div className="row-start-3">
          <Button
            color="bg-[#2D74FF]"
            radius="rounded-[12px]"
            hover="hover:border-[#2D74FF]"
            type="submit"
            isFull={true}
            hasRightIcon={true}
            onClick={handleRestart}
            isDisable={time > 0}
            icon={<Recycle />}
          >
            <span>ارسال کد تایید</span>
          </Button>
        </div>
        <div className="row-start-3">
          <Button
            color="bg-[#2D74FF]"
            radius="rounded-[12px]"
            hover="hover:border-[#2D74FF]"
            type="submit"
            isFull={true}
            hasLeftIcon={true}
            icon={<ArrowDown className="rotate-90" />}
          >
            <span>ساخت حساب کاربری</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CodeValidation
