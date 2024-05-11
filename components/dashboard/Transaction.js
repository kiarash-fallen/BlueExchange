import React from 'react'
import Decrease from '../ui/icons/Decrease'
import Increase from '../ui/icons/Increase'

function Transaction({ type }) {
    return (
        <div className={`border  rounded-2.5xl p-2 ${type === "increase" ? "border-[#2D74FF]" : "border-[#FF5C5C]"}`}>

            <div className={`text-white p-2 rounded-xl ${type === "increase" ? "bg-[#2D74FF] shadow-blue" : "bg-[#FF5C5C] shadow-red"}`}>
                250.000.000 ت
            </div>
            <span className={`-mt-2 mx-auto border border-white w-10	rounded-md flex justify-center p-1 ${type === "increase" ? "bg-[#2D74FF] shadow-blue" : "bg-[#FF5C5C] shadow-red"}`}>
                {type === "increase" ? <Increase /> : <Decrease />}
            </span>
            <p className={`text-center mt-2 text-sm ${type === "increase" ? "text-[#2D74FF]" : "text-[#FF5C5C]"}`}>
                {type === "increase" ? "افزایش موجودی" : "کاهش موجودی"}
            </p>
        </div>
    )
}

export default Transaction