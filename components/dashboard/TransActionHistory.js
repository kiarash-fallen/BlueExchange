"use client"
import React, { useState } from 'react'
import MoneyCheckEdit from '../ui/icons/MoneyCheckEdit'
import ThirdButton from '../buttons/ThirdButton'
import Dropdown from '../ui/Dropdown';
import Calendar from '../ui/icons/Calendar';
import EmptyState from '../ui/EmptyState';
import DashboardTable from '../table/DashboardTable';
import IconButton from '../buttons/IconButton';
import Eye from '../../public/assests/Icons/Eye';

const headerItems = [
    { id: 0, name: "مقدار" },
    { id: 1, name: "نوع" },
    { id: 2, name: "شیوه" },
    { id: 3, name: "زمان" },
    { id: 4, name: "رسید" },
];

const data = [
    { id: 0, value: "560.000 ت", kind: "فروش", method: "کارت به کارت", time: "12 مرداد - 1402" },
    { id: 1, value: "560.000 ت", kind: "فروش", method: "کارت به کارت", time: "12 مرداد - 1402" },
    { id: 2, value: "560.000 ت", kind: "فروش", method: "کارت به کارت", time: "12 مرداد - 1402" },
    { id: 3, value: "560.000 ت", kind: "فروش", method: "کارت به کارت", time: "12 مرداد - 1402" },
    { id: 4, value: "560.000 ت", kind: "فروش", method: "کارت به کارت", time: "12 مرداد - 1402" },
]

function TransActionHistory() {
    const [currency, setCurrency] = useState("teter");
    return (
        <div className="box-6">
            <div className="flex justify-between">
                <span className='flex [&>*]:mr-3'>
                    <span className="flex items-center pl-3 border-l border-l-white text-white">
                        <MoneyCheckEdit />
                        <span className="mr-2">تاریخچه تراکنشات</span>
                    </span>
                    <ThirdButton active={currency === "teter"} onClick={() => setCurrency("teter")}>
                        تتر
                    </ThirdButton>
                    <ThirdButton active={currency === "toman"} onClick={() => setCurrency("toman")}>
                        تومان
                    </ThirdButton>
                    <ThirdButton active={currency === "other"} onClick={() => setCurrency("other")}>
                        سایر
                    </ThirdButton>
                </span>
                <span className='flex [&>*]:mr-3'>
                    <Dropdown title={"معاملات ما "} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" rightIcon={<Calendar />} />
                </span>

            </div>
            <DashboardTable height="h-80" headerItems={headerItems} contents={<>
                {data?.map(item => <div key={item.id} className="flex justify-between items-center">
                    <span>{item.value}</span>
                    <span>{item.kind}</span>
                    <span>{item.method}</span>
                    <span>{item.time}</span>
                    <span>
                        <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                    </span>
                </div>)}
            </>} />
            <EmptyState text="هنوز معامله ای انجام نداده اید !" />
        </div>
    )
}

export default TransActionHistory