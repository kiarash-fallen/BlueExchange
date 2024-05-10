import React from 'react'
import CreditCart from '../../../../../../components/dashboard/CreditCart'
import BlurCart from '../../../../../../components/ui/BlurCart'
import FinancialOperation from '../../../../../../components/ui/FinancialOperation'
import Whithraw from '../../../../../../components/ui/icons/Whithraw'
import Deposit from '../../../../../../components/ui/icons/Deposit'
import TimeForward from '../../../../../../components/ui/icons/TimeForward'
import DollorCircle from '../../../../../../components/ui/icons/DollorCircle'
import TransActionHistory from '../../../../../../components/dashboard/TransActionHistory'

function page() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2 box-6">
                    <CreditCart />
                </div>
                <BlurCart bgColor="bg-[#2D74FF]" borderColor="border-[#2D74FF]">
                    <div className='mb-4'>
                        <div className="text-white flex justify-between">
                            <span className='text-lg'>میزان تومان</span>
                            <span>0 ت</span>
                        </div>
                        <div className="flex justify-end text-[#AAAAAA]">
                            <span>در دسترس : 0 ت</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-t-[#AAAAAA] mt-10 pt-4">
                        <FinancialOperation icon={<Whithraw />} text="برداشت" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<Deposit />} text="واریز" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<TimeForward />} text="تاریخچه" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<DollorCircle />} text="تاریخچه" />
                    </div>
                </BlurCart>
                <BlurCart bgColor="bg-[#22F38F]" borderColor="border-[#22F38F]">
                    <div className='mb-4'>
                        <div className="text-white flex justify-between">
                            <span>میزان تومان</span>
                            <span>0 ت</span>
                        </div>
                        <div className="flex justify-end text-[#AAAAAA]">
                            <span>در دسترس : 0 ت</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-t-[#AAAAAA] mt-10 pt-4">
                        <FinancialOperation icon={<Whithraw />} text="برداشت" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<Deposit />} text="واریز" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<TimeForward />} text="تاریخچه" />
                        <span className="bg-[#AAAAAA] w-[0.5px] h-6"> </span>
                        <FinancialOperation icon={<DollorCircle />} text="تاریخچه" />
                    </div>
                </BlurCart>
            </div>
            <div className='mt-4'>
                <TransActionHistory />
            </div>

        </>
    )
}

export default page