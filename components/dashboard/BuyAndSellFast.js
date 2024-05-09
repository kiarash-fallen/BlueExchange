import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import MoneyCheckEdit from '../ui/icons/MoneyCheckEdit'
import Select from '../ui/Select'
import Image from 'next/image'
import Eth from '../../public/assests/Icons/eth.svg'
import SecondButton from '../buttons/SecondButton'

function BuyAndSellFast() {
    return (
        <div className="box-6 flex flex-col justify-between">
            <HeaderCart title="خرید و فروش سریع" icon={<MoneyCheckEdit />} href="/" />
            <div className="[&>*]:mt-3">
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
                <div className="flex justify-between gap-4">
                    <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl"> خرید</SecondButton>
                    <SecondButton full={true} shadow="shadow-red" type="button" typeBtn="filled" color="bg-[#FF5C5C]" radius="rounded-xl">  فروش</SecondButton>
                </div>
            </div>

        </div>
    )
}

export default BuyAndSellFast