import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import Circlep from '../ui/icons/Circlep';
import Select from '../ui/Select';
import Image from 'next/image';
import SecondButton from '../buttons/SecondButton';
import Eth from '../../public/assests/Icons/eth.svg';
import Star2 from '../ui/icons/Star2';
import pm from "../../public/assests/images/pm.svg"


function BuyAndSellPerfectMoney() {
    return (
        <div className="box-6 flex flex-col justify-between">
            <HeaderCart title="خرید و فروش پرفکت مانی" icon={<Circlep />} href="/" />
            <div className="[&>*]:mt-3">
                <div className=" flex justify-between">
                    <div className="w-[60%] [&>*]:mt-3">
                        <Select
                            title="0 تومان"
                            hasRightIcon={true}
                            icon={<span className="size-[30px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs">ریال</span>} />
                        <Select
                            title="0 اتریم"
                            hasRightIcon={true}
                            icon={<span className="size-[30px] text-white rounded-3xl bg-[#627EEA] flex justify-center items-center
                     text-xs"><Image src={Eth} width="auto" height="auto" alt='eth' /></span>} />
                    </div>
                    <div className="w-[35%] box-8 !p-0 flex justify-center items-center text-white text-center relative">
                        <div>
                            <div className='flex items-center justify-between mt-8'>
                                <Star2 />
                                <span>موجودی پرفکت مانی</span>
                                <Star2 />
                            </div>
                            <p className="p-3  font-semibold">560.000 پرفکت مانی</p>
                        </div>
                        <div className='absolute -top-12 right-10'>
                            <Image src={pm} width={"auto"} height={"auto"} alt='پرفکت مانی' />
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-x-4 mt-4">
                <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl"> خرید</SecondButton>
                <SecondButton full={true} shadow="shadow-red" type="button" typeBtn="filled" color="bg-[#FF5C5C]" radius="rounded-xl">  فروش</SecondButton>
            </div>
        </div>
    )
}

export default BuyAndSellPerfectMoney;