import React from 'react'
import Select from '../ui/Select'
import Network from '../ui/icons/Network';
import ExclamationMark from '../ui/icons/ExclamationMark';
import SecondButton from '../buttons/SecondButton';
import Input from '../input/Input';

function WithdrawalTeter() {
    return (
        <div className="[&>*]:mb-4">
            <div className='box-10 flex justify-between text-white'>
                <span>موجودی شما :</span>
                <span className="text-[#22F38F]">250.000.000 ت</span>
            </div>
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <Network />
                <span className='mr-2'> نوع شبکه</span>
            </div>
            <Select title="TRC20" style="text-white" />
            <div className='flex items-center text-[#FF5C5C]'>
                <ExclamationMark />
                <span className='mr-2'>کارمزد انتقال شبکه 1.9 تتر است.</span>
            </div>
            <Select title="آدرس مقصد" style="text-white" />
            {/* <div className='box-9 flex justify-between'>
                <span className="text-[#AAAAAA]">0 تتر</span>
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

export default WithdrawalTeter;