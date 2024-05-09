import React from 'react'
import Check from './icons/Check'

function Stepper({ active, title1, title2, title3 }) {
    return (
        <div className='-mt-10'>

            <div className="flex justify-between text-sm relative z-10">
                <span className='flex flex-col'>
                    <span className={`size-10 rounded-lg flex justify-center items-center border 
                    ${active <= 3 ? "bg-[#2D74FF] border-[#2D74FF] shadow-blue" : "bg-[#3A3A3A] border-[#4E4E4E] text-[#4E4E4E] bg-[##3A3A3A]"}`}>
                        {active <= 3 ? <Check /> : 1}
                    </span>
                    <span className={`mt-4 ${active <= 3 ? "text-white" : "text-[#AAAAAA]"}`}>{title1}</span>
                </span>
                <span className='flex flex-col items-center'>
                    <span className={`size-10 rounded-lg flex justify-center items-center border 
                    ${active >= 2 ? "bg-[#2D74FF] border-[#2D74FF] shadow-blue" : "bg-[#3A3A3A] border-[#4E4E4E] text-[#4E4E4E] bg-[##3A3A3A]"}`}>
                        {active >= 2 ? <Check /> : 2}
                    </span>
                    <span className={`mt-4 ${active >= 2 ? "text-white" : "text-[#AAAAAA]"}`}>{title2}</span>
                </span>
                <span className='flex flex-col items-end'>
                    <span className={`size-10 rounded-lg flex justify-center items-center border 
                    ${active === 3 ? "bg-[#2D74FF] border-[#2D74FF] shadow-blue" : "bg-[#3A3A3A] border-[#4E4E4E] text-[#4E4E4E] bg-[##3A3A3A]"}`}>
                        {active === 3 ? <Check /> : 1}
                    </span>
                    <span className={`mt-4 ${active === 3 ? "text-white" : "text-[#AAAAAA]"}`}>{title3}</span>
                </span>

            </div>
            <div className='w-full h-2 bg-[#3A3A3A] -mt-14 flex z-0'>
                <div className={`w-4/12	 ${active <= 3 && "bg-[#2D74FF]"}`}></div>
                <div className={`w-4/12	 ${active >= 2 && "bg-[#2D74FF]"}`}></div>
                <div className={`w-4/12	 ${active === 3 && "bg-[#2D74FF]"}`}></div>
            </div>
        </div>
    )
}

export default Stepper