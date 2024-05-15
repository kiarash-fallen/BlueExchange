'use client'
import React, { useState } from 'react'
import MoneyCheckEdit from '../../ui/icons/MoneyCheckEdit'
import Dropdown from '../../ui/Dropdown'
import IconButton from '../../buttons/IconButton'
import Eye from '../../../public/assests/Icons/Eye'
import EmptyState from '../../ui/EmptyState'
import DashboardTable from '../../table/DashboardTable'
import Calendar from '../../ui/icons/Calendar'

const headerItems1 = [
    { id: 0, name: "تعداد" },
    { id: 1, name: "نرخ ( تومان )" },
    { id: 2, name: "مبلغ کل ( تومان )" },
    { id: 3, name: "نوع" },
    { id: 4, name: "کد پیگیری" },
    { id: 5, name: "زمان" },
    { id: 6, name: "وضعیت" },
    { id: 7, name: "رسید" },
];


const headerItems2 = [
    { id: 0, name: "مقدار" },
    { id: 1, name: "نوع" },
    { id: 2, name: "شیوه" },
    { id: 3, name: "زمان" },
    { id: 4, name: "رسید" },
];

const headerItems3 = [
    { id: 0, name: "تعداد" },
    { id: 1, name: "نرخ ( تومان )" },
    { id: 2, name: "مبلغ کل ( تومان )" },
    { id: 3, name: "زمان" },
    { id: 5, name: "وضعیت" },
    { id: 4, name: "رسید" },
];

const headerItems4 = [
    { id: 0, name: "از" },
    { id: 1, name: "به" },
    { id: 2, name: "مسیر" },
    { id: 3, name: "نرخ تبدیل" },
    { id: 5, name: "کد پیگیری" },
    { id: 7, name: "زمان" },
    { id: 8, name: "وضعیت" },
    { id: 9, name: "رسید" },
];

const headerItems5 = [
    { id: 0, name: "مقدار" },
    { id: 1, name: "نوع" },
    { id: 2, name: "شیوه" },
    { id: 3, name: "زمان" },
    { id: 5, name: "عملیات" },
    { id: 4, name: "رسید" },
];

const data1 = [
    { id: 0, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 1, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 2, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 3, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
    { id: 4, number: 1, value: "560.000 ت", allValue: "61.200 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
];


const data2 = [
    { id: 0, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", },
    { id: 1, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", },
    { id: 2, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", },
    { id: 3, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", },
    { id: 4, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", },
];

const data4 = [
    { id: 0, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", operation: "انجام شده" },
    { id: 1, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", operation: "انجام شده" },
    { id: 2, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", operation: "انجام شده" },
    { id: 3, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", operation: "انجام شده" },
    { id: 4, value: "560.000 ت", kind: "فروش", trackingCode: "54873219841", time: "12 مرداد - 1402", operation: "انجام شده" },
];

const data3 = [
    { id: 0, from: "تومان", to: "تتر", path: "کارت به کارت", value: "560.000 ت", trackingCode: "54873219841", time: "12 مرداد - 1402", condition: "بسته شده" },
];
function TransactionTable() {
    const [headerItems, setHeaderItems] = useState(headerItems1);
    const [data, setData] = useState(data1);
    const [select, setSelect] = useState(1);
    return (
        <div className="box-6 h-[calc(100vh-8rem)]">
            <div className="flex justify-between">
                <span className='flex [&>*]:mr-3'>
                    <span className="flex items-center pl-3 border-l border-l-white text-white">
                        <MoneyCheckEdit />
                        <span className="mr-2">تاریخچه تراکنشات</span>
                    </span>
                    <Dropdown
                        title={"تاریخچه معاملات آسن تتر"}
                        bgColor="bg-[#2E2E2E]"
                        textClass="text-[#AAAAAA]"
                        width={"w-[250px]"}
                        items={[
                            {
                                id: 1, name: 'تاریخچه معاملات آسن تتر', action: () => {
                                    setSelect(1)
                                    setHeaderItems(headerItems1);
                                    setData(data1);
                                }
                            },
                            {
                                id: 2, name: 'تاریخچه واریز و برداشت', action: () => {
                                    setSelect(2)
                                    setHeaderItems(headerItems2);
                                    setData(data2)
                                }
                            },
                            {
                                id: 3, name: 'تاریخچه بازار', action: () => {
                                    setSelect(3)
                                    setHeaderItems(headerItems3);
                                    setData(data1)
                                }
                            },
                            {
                                id: 5, name: 'تاریخچه تبدیل', action: () => {
                                    setSelect(4)
                                    setHeaderItems(headerItems4);
                                    setData(data2)
                                }
                            },
                            {
                                id: 6, name: 'در حال انجام', action: () => {
                                    setSelect(5)
                                    setHeaderItems(headerItems5);
                                    setData(data1)
                                }
                            },
                        ]}
                    />
                </span>
                <span className='flex [&>*]:mr-3'>
                    <Dropdown title={"تمام وضعیت ها"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"12 مرداد - 1401"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" rightIcon={<Calendar />} />
                </span>

            </div>
            <DashboardTable width="[&>*]:w-[12.5%]" height="h-[80%]" headerItems={headerItems} contents={<>
                {select === 1 &&
                    data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
                        <span>{item.number}</span>
                        <span>{item.value}</span>
                        <span>{item.allValue}</span>
                        <span className={`${item.kind === "فروش" ? "text-[#FF5C5C]" : "text-[#22F38F]"}`}>{item.kind}</span>
                        <span>{item.trackingCode}</span>
                        <span>{item.time}</span>
                        <span>{item.condition}</span>
                        <span className="flex justify-center">
                            <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                        </span>
                    </div>)}
                {select === 2 &&
                    data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
                        <span>{item.value}</span>
                        <span className={`${item.kind === "فروش" ? "text-[#FF5C5C]" : "text-[#22F38F]"}`}>{item.kind}</span>
                        <span>{item.trackingCode}</span>
                        <span>{item.time}</span>
                        <span className="flex justify-center">
                            <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                        </span>
                    </div>)}
                {select === 3 &&
                    data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
                        <span>{item.value}</span>
                        <span>{item.allValue}</span>
                        <span className={`${item.kind === "فروش" ? "text-[#FF5C5C]" : "text-[#22F38F]"}`}>{item.kind}</span>
                        <span>{item.trackingCode}</span>
                        <span>{item.time}</span>
                        <span className="flex justify-center">
                            <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                        </span>
                    </div>)}
                {select === 4 &&
                    data3?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
                        <span>{item.from}</span>
                        <span>{item.to}</span>
                        <span>{item.path}</span>
                        <span>{item.value}</span>
                        <span>{item.trackingCode}</span>
                        <span>{item.time}</span>
                        <span>{item.condition}</span>
                        <span className="flex justify-center">
                            <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                        </span>
                    </div>)}
                {select === 5 &&
                    data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
                        <span>{item.number}</span>
                        <span className={`${item.kind === "فروش" ? "text-[#FF5C5C]" : "text-[#22F38F]"}`}>{item.kind}</span>
                        <span>{item.trackingCode}</span>
                        <span>{item.time}</span>
                        <span>{item.condition}</span>
                        <span className="flex justify-center">
                            <IconButton icon={<Eye />} style={"!border-white hover:bg-white hover:text-[#363636]"} />
                        </span>
                    </div>)}
            </>} />
            {/* <EmptyState text="هنوز معامله ای انجام نداده اید !" /> */}
        </div>
    )
}

export default TransactionTable