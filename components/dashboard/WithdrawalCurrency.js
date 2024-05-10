import React from 'react'
import Select from '../ui/Select'
import ExclamationMark from '../ui/icons/ExclamationMark'
import OutlineButton from '../buttons/OutlineButton'
import SecondButton from '../buttons/SecondButton'
import Bitcoin from '../../public/assests/images/bitcoin.svg'
import Image from 'next/image'
import Network from '../ui/icons/Network'

function WithdrawalCurrency() {
    return (
        <div className="[&>*]:mb-4">
            <div className='box-10 flex justify-between text-white'>
                <span>موجودی شما :</span>
                <span className="text-[#22F38F]">250.000.000 ت</span>
            </div>
            <div className='box-9 flex justify-between'>
                <span className="text-[#AAAAAA]">0 بیت کوین</span>
                <Image src={Bitcoin} width="auto" height="auto" alt='' />
            </div>
            <div className="flex justify-between">
                <OutlineButton type="button">تمام موجودی </OutlineButton>
                <OutlineButton type="button">%75</OutlineButton>
                <OutlineButton type="button">%50</OutlineButton>
                <OutlineButton type="button">%25</OutlineButton>
            </div>
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <Network />
                <span className='mr-2'> نوع شبکه</span>
            </div>
            <Select title="BTC" style="text-white" />
            <div className='flex items-center text-[#FF5C5C]'>
                <ExclamationMark />
                <span className='mr-2'> کارمزد انتقال شبکه 0.0015 کوین است .</span>
            </div>
            <Select title="آدرس مقصد" />
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

export default WithdrawalCurrency;