import React from 'react'
import Wallet from '../../../../../../components/ui/icons/Wallet'
import Add from '../../../../../../components/ui/icons/Add'
import CloseCircle from '../../../../../../components/ui/icons/CloseCircle'
import UserCreditCart from '../../../../../../components/dashboard/account/UserCreditCart'
import MoneyCheckEdit from '../../../../../../components/ui/icons/MoneyCheckEdit'

function page() {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className="box-11">
                <div className="flex items-center justify-between border-b border-b-[#4B4B4B] pb-4">
                    <span className='flex items-center text-white'>
                        <Wallet />
                        <span className='mr-2'>کارت های بانکی</span>
                    </span>
                    <button type='button' className='text-[#22F38F] flex items-center'>
                        <Add />
                        <span className="mr-2">افزودن کارت</span>
                    </button>
                </div>
                <UserCreditCart />
                <div className='flex flex-col justify-center items-center text-[#AAAAAA] py-10'>
                    <CloseCircle />
                    <span className='mt-4'>کارت بانکی یافت نشد !</span>
                </div>
            </div>
            <div className="box-11">
                <div className="flex items-center justify-between border-b border-b-[#4B4B4B] pb-4">
                    <span className='flex items-center text-white'>
                        <MoneyCheckEdit />
                        <span className='mr-2'>شبا های بانکی</span>
                    </span>
                    <button type='button' className='text-[#22F38F] flex items-center'>
                        <Add />
                        <span className="mr-2">افزودن کارت</span>
                    </button>
                </div>
                <UserCreditCart />
                <div className='flex flex-col justify-center items-center text-[#AAAAAA] py-10'>
                    <CloseCircle />
                    <span className='mt-4'>کارت بانکی یافت نشد !</span>
                </div>
            </div>
        </div>
    )
}

export default page