import React from 'react'
import Circles from '../ui/icons/Circles'
import Money from '../ui/icons/Money'
import Down from '../ui/icons/Down'

function CreditCart() {
    return (
        <div className="grid grid-cols-4 gap-4 pt-4">
            <div className="col-span-2 wallet-background rounded-xl p-4 shadow-credit">
                <div className="flex justify-between">
                    <Circles />
                    <span className="text-white text-xl capitalize">blue exchange</span>
                </div>
                <p className="flex justify-between text-white my-4 text-2xl	" dir='ltr'>
                    <span>1234</span> -
                    <span>4567</span> -
                    <span>7891</span> -
                    <span>2345</span>
                </p>
                <div className='w-full h-1.5 bg-white'>

                </div>
                <div className="flex justify-between mt-3">
                    <span className='flex items-center'>
                        <Money />
                        <span className='mr-2'>موجودی شما :</span>
                    </span>
                    <span>350.000.000 ت</span>
                </div>
            </div>
            <div className='bg-[#2D74FF] rounded-2.5xl text-white shadow-blue-1 my-2 flex flex-col p-4 justify-center items-center '>
                <Down />
                <span className="mt-4">مجموع واریزی :</span>
                <span className="mt-2">560.000.000 ت</span>
            </div>
            <div className='bg-[#FF5C5C] rounded-2.5xl text-white shadow-red my-2 flex flex-col p-4 justify-center items-center '>
                <Down />
                <span className="mt-4">مجموع واریزی :</span>
                <span className="mt-2">560.000.000 ت</span>
            </div>
        </div>
    )
}

export default CreditCart