import React from 'react'
import Select from '../ui/Select'
import Ustd from '../../public/assests/Icons/usdt.png'
import Image from 'next/image'
import Calendar from '../ui/icons/Calendar'
import Line2 from '../ui/icons/Line'

function Currency() {
    return (
        <div className="box-7 !pb-0 border-b border-b-[#22F38F] relative overflow-hidden [&>*]:mb-3">
            <Select
                title="تتر"
                hasLeftIcon={true}
                style={"!rounded-3xl"}
                icon={<Image src={Ustd} alt='ustd' width="24" height="24" />} />
            <Select
                title="24 ساعته"
                hasLeftIcon={true}
                style={"!rounded-3xl"}
                icon={<Calendar />} />
            <Line2 />
            <div className="flex justify-between">
                <span className="text-white">بالا ترین نرخ :</span>
                <span className="text-[#22F38F]">65.200 ت</span>
            </div>
            <div className="flex justify-between">
                <span className="text-white">پایین ترین نرخ :</span>
                <span className="text-[#FF5C5C]">65.200 ت</span>
            </div>
            <div className="flex justify-center">
                <div className="absolute m-auto w-[50%] bottom-0 h-[20px] bg-[#22F38F] opacity-75 blur-[48px]"></div>
            </div>
        </div>
    )
}

export default Currency