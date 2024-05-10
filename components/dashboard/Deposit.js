import React from 'react'
import HandHoldingUsd from '../ui/icons/HandHoldingUsd'
import Select from '../ui/Select'
import Wallet from '../ui/icons/Wallet'
import ExclamationMark from '../ui/icons/ExclamationMark'
import OutlineButton from '../buttons/OutlineButton'
import SecondButton from '../buttons/SecondButton'

function Deposit() {
    return (
        <div className="[&>*]:mb-4">
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <HandHoldingUsd />
                <span className='mr-2'>روش پرداخت</span>
            </div>
            <Select title="درگاه پرداخت" style="text-white" />
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <Wallet />
                <span className='mr-2'>کارت مقصد</span>
            </div>
            <Select title="کارت بانکی را انتخاب کنید" style="text-white" />
            <div className='box-9 flex justify-between'>
                <span className="text-[#AAAAAA]">0 تومان</span>
                <span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs">ریال</span>
            </div>
            <div className='flex items-center text-[#FF5C5C]'>
                <ExclamationMark />
                <span className='mr-2'> کارمزد درگاه پرداخت 4.000 ت است .</span>
            </div>
            <div className="flex justify-between">
                <OutlineButton type="button">25.000.000 ت</OutlineButton>
                <OutlineButton type="button">15.000.000 ت</OutlineButton>
                <OutlineButton type="button">5.000.000 ت</OutlineButton>
            </div>
            <div className='box-10 flex justify-between text-white'>
                <span>دریافتی نهایی شما :</span>
                <span className="text-[#22F38F]">250.000.000 ت</span>
            </div>
            <SecondButton
                full={true}
                shadow="shadow-blue"
                type="button"
                typeBtn="filled"
                color="bg-[#2D74FF]"
                radius="rounded-xl">
                پرداخت
            </SecondButton>
        </div>
    )
}

export default Deposit