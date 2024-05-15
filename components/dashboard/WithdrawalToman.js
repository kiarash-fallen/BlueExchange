import React from 'react'
import HandHoldingUsd from '../ui/icons/HandHoldingUsd'
import Select from '../ui/Select'
import Wallet from '../ui/icons/Wallet'
import ExclamationMark from '../ui/icons/ExclamationMark'
import OutlineButton from '../buttons/OutlineButton'
import SecondButton from '../buttons/SecondButton'
import Input from '../input/Input'

function WithdrawalToman() {
    return (
        <div className="[&>*]:mb-4">
            <div className='box-10 flex justify-between text-white'>
                <span>موجودی شما :</span>
                <span className="text-[#22F38F]">250.000.000 ت</span>
            </div>
            <Select title="شبا را انتخاب کنید" style="text-white" />
            {/* <div className='box-9 flex justify-between'>
                <span className="text-[#AAAAAA]">0 تومان</span>
                <span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs">ریال</span>
            </div> */}
            <Input
                textColor="text-[#AAAAAA]"
                hasRightIcon={true}
                placeholder={"0 تتر"}
                icon={<span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs">ریال</span>}
            />
            <div className='flex items-center text-[#FF5C5C]'>
                <ExclamationMark />
                <span className='mr-2'> کارمزد درگاه پرداخت 4.000 ت است .</span>
            </div>
            <div className="flex justify-between">
                <OutlineButton type="button">تمام موجودی </OutlineButton>
                <OutlineButton type="button">%75</OutlineButton>
                <OutlineButton type="button">%50</OutlineButton>
                <OutlineButton type="button">%25</OutlineButton>
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

export default WithdrawalToman