import React from 'react'
import OutlineButton from '../buttons/OutlineButton'
import SecondButton from '../buttons/SecondButton'
import Input from '../input/Input'
import Image from 'next/image'
import Eth from '../../public/assests/Icons/Teter.svg'
import Add from '../ui/icons/Add'

function EastExchange({ type }) {
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
                            {<span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
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
            <Input
                textColor="text-[#AAAAAA]"
                hasRightIcon={true}
                placeholder={"0 تتر"}
                icon={
                    <span className='flex items-center text-[#AAAAAA]'>
                        <span className='border-r-2  h-4 w-1  pr-2 border-r-[#AAAAAA]'></span>
                        <span className="size-[30px] text-white rounded-3xl bg-[#26a17b] flex justify-center items-center
                     text-xs">
                            {<Image src={Eth} width="auto" height="auto" alt='eth' />}
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
            <div className='flex justify-between gap-4'>
                <SecondButton
                    full={true}
                    shadow="shadow-blue"
                    type="button"
                    typeBtn="filled"
                    color="bg-[#2D74FF]"
                    radius="rounded-xl">
                    خرید
                </SecondButton>
                <SecondButton
                    full={true}
                    shadow="shadow-red"
                    type="button"
                    typeBtn="filled"
                    color="bg-[#FF5C5C]"
                    radius="rounded-xl">
                    فروش
                </SecondButton>
            </div>

        </div>
    )
}

export default EastExchange