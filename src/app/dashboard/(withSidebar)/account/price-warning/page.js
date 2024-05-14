import React from 'react'
import Bell2 from '../../../../../../components/ui/icons/Bell2'
import AddAlarm from '../../../../../../components/dashboard/account/AddAlarm'
import AccountTable from '../../../../../../components/table/AccountTable'
import IconButton from '../../../../../../components/buttons/IconButton';
import Delete from '../../../../../../components/ui/icons/Delete';
import Toggle from '../../../../../../components/ui/Toggle';
import Checkbox from '../../../../../../components/checkbox/Checkbox';
import Ustd from '../../../../../../public/assests/Icons/usdt.png'
import Image from 'next/image';
import EmptyState from '../../../../../../components/ui/EmptyState';

const headerItems = [
    { id: 0, name: "نام رمز ارز" },
    { id: 1, name: "عبور قیمت" },
    { id: 2, name: "واحد ارز" },
    { id: 3, name: "فعال / غیر فعال بودن" },
    { id: 4, name: "عملیات" },
];

const data = [
    { id: 0, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 1, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 2, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 3, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 4, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
]

function page() {
    return (
        <>
            <div className="box-13">
                <div className="flex items-center justify-between">
                    <span className='flex items-center text-white'>
                        <Bell2 />
                        <span className='mr-2'>هشدار قیمت</span>
                    </span>
                    <AddAlarm />
                </div>
            </div>
            <AccountTable width={" "} headerItems={headerItems} contents={<>
                {data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:w-[20%]">
                    <span className='flex [&>*]:ml-1'>
                        <Checkbox type={"outline"} />
                        <Image className='' src={Ustd} alt='ustd' width="40" height="40" />
                        <span className=' text-sm'>
                            <span className=' text-white block text-right'>تتر</span>
                            <span className='text-[#CCCCCC] block text-right'>
                                ( USDT / IRR )
                            </span>
                        </span>
                    </span>
                    <span className="ml-10">{item.value}</span>
                    <span className="ml-10">تتر</span>
                    <span className="ml-10">
                        <Toggle />
                    </span>
                    <IconButton type="button" icon={<Delete />} style={"!border-[#FF5C5C] !text-[#FF5C5C] !size-8"} />


                </div>)}
                <EmptyState text="هیچ اعلانی قرار نداده اید !" />
            </>} />
        </>
    )
}

export default page