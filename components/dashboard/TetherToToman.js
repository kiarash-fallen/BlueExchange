import React from 'react'
import OutlineButton from '../buttons/OutlineButton'
import SecondButton from '../buttons/SecondButton'
import Input from '../input/Input'
import Image from 'next/image'
import Eth from '../../public/assests/Icons/Teter.svg'
import Add from '../ui/icons/Add'

function TetherToToman({ type }) {
    return (
        <div className="[&>*]:mb-4">
            <Input
                textColor="text-[#AAAAAA]"
                hasRightIcon={true}
                placeholder={"0 تتر"}
                icon={
                    <span className='flex items-center text-[#AAAAAA]'>
                        <span className='border-r-2  h-4 w-1  pr-2 border-r-[#AAAAAA]'></span>
                        <span className="size-[30px] text-white rounded-3xl bg-[#26a17b] flex justify-center items-center
                     text-xs">
                            {type === "tether" ? <Image src={Eth} width="auto" height="auto" alt='eth' /> : <span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs">ریال</span>}
                        </span>
                        <span className='mr-2'>
                            {type === "tether" ? "تتر" : "IRR"}
                        </span>
                    </span>}
            />
            <OutlineButton isFull={true} type="button" style={"!text-[#AAAAAA]"}>
                <span className='flex items-center'>
                    <Add />
                    <span className="mr-2">افزایش موجودی</span>
                </span>
            </OutlineButton>
            <div className="flex justify-between">
                <OutlineButton type="button">25 %</OutlineButton>
                <OutlineButton type="button">50 %</OutlineButton>
                <OutlineButton type="button">75 %</OutlineButton>
                <OutlineButton type="button">100 %</OutlineButton>
            </div>
            <div className='box-10 text-white'>
                <div className=' flex justify-between mb-4'>
                    <span className='text-[#AAAAAA]'>  نرخ تبدیل : </span>
                    <span className="text-[#22F38F]">250.000.000 ت</span>
                </div>
                <div className=' flex justify-between'>
                    <span>دریافتی نهایی شما :</span>
                    <span className="text-[#22F38F]">250.000.000 ت</span>
                </div>

            </div>
            <SecondButton
                full={true}
                shadow="shadow-blue"
                type="button"
                typeBtn="filled"
                color="bg-[#2D74FF]"
                radius="rounded-xl">
                تبدیل به
                <span className='mx-1'>
                    {type === "tether" ? "تومان " : "تتر  "}
                </span>
            </SecondButton>
        </div>
    )
}

export default TetherToToman