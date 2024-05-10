"use client"
import React, { useState } from 'react'
import MoneyCheckEdit from '../ui/icons/MoneyCheckEdit'
import ThirdButton from '../buttons/ThirdButton'
import Dropdown from '../ui/Dropdown';
import Calendar from '../ui/icons/Calendar';
import EmptyState from '../ui/EmptyState';

function TransActionHistory() {
    const [currency, setCurrency] = useState("teter");
    return (
        <div className="box-6">
            <div className="flex justify-between">
                <span className='flex [&>*]:ml-3'>
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
                <span className='flex [&>*]:ml-3'>
                    <Dropdown title={"معاملات ما "} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" rightIcon={<Calendar />} />
                </span>

            </div>
            <EmptyState text="هنوز معامله ای انجام نداده اید !" />
        </div>
    )
}

export default TransActionHistory