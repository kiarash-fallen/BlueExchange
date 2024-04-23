import React from 'react'
import Select from '../ui/Select'
import Input from '../input/Input'
import SecondButton from '../buttons/SecondButton'
import Image from 'next/image'
import Eth from '../../public/assests/Icons/eth.svg'

function BuyDigitalCurrency() {
    return (
        <div className="w-[349px] h-auto rounded-[32px] border border-[#4B4B4B] header-shadow-cart header-cart-background">
            <div className="w-[150px] h-[36px] bg-[#4B4B4B] m-auto rounded-b-3xl shadow-1">
                <p className="text-white text-center pt-[5px]">
                    خرید ارز دیجیتال
                </p>
            </div>
            <form className="p-4 [&>*]:mb-4" onSubmit={(e) => e.preventDefault()}>
                <Select
                    title="تومان ( IRR )"
                    hasLeftIcon={true}
                    icon={<span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs">ریال</span>} />
                <Input
                    id="email"
                    type="text"
                    focus="focus-within:border-[#22F38F]"
                    color="bg-[#22F38F]"
                    textColor="text-[#22F38F]"
                    placeholder="پرداخت میکنم"
                    hasRightIcon={true}
                    icon={<small className="text-xs text-[#CCCCCC] peer-focus:text-[#22F38F]">0 تومان</small>}
                    // hasError={errors?.email ? true : false}
                    hasError={false}
                // errorMessage={errors?.email?.message}
                // register={{
                //     ...register("email", {
                //         required: "Email is required",
                //     })
                // }}
                />
                <Select
                    title="اتریم ( ETH )"
                    hasLeftIcon={true}
                    icon={<span className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs"><Image src={Eth} width="auto" height="auto" alt='eth' /></span>} />
                <Input
                    id="email"
                    type="text"
                    focus="focus-within:border-[#22F38F]"
                    color="bg-[#22F38F]"
                    textColor="text-[#22F38F]"
                    placeholder="دریافت میکنم"
                    hasRightIcon={true}
                    icon={<small className="text-xs text-[#CCCCCC] peer-focus:text-[#22F38F]">0 ETH</small>}
                    // hasError={errors?.email ? true : false}
                    hasError={false}
                // errorMessage={errors?.email?.message}
                // register={{
                //     ...register("email", {
                //         required: "Email is required",
                //     })
                // }}
                />
                <p className="text-white text-left font-semibold">1ETH = 1,182,835,022 IRR</p>
                <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl">همین الان بخرش</SecondButton>
            </form>
        </div>
    )
}

export default BuyDigitalCurrency