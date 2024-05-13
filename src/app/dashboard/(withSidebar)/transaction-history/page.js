import React from 'react'
import MoneyCheckEdit from '../../../../../components/ui/icons/MoneyCheckEdit'
import Dropdown from '../../../../../components/ui/Dropdown'
import IconButton from '../../../../../components/buttons/IconButton'
import Eye from '../../../../../public/assests/Icons/Eye'
import EmptyState from '../../../../../components/ui/EmptyState'
import DashboardTable from '../../../../../components/table/DashboardTable'
import Calendar from '../../../../../components/ui/icons/Calendar'

const headerItems = [
    { id: 0, name: "تعداد" },
    { id: 1, name: "نرخ ( تومان )" },
    { id: 2, name: "مبلغ کل ( تومان )" },
    { id: 3, name: "نوع" },
    { id: 4, name: "کد پیگیری" },
    { id: 5, name: "زمان" },
    { id: 6, name: "وضعیت" },
    { id: 7, name: "رسید" },
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
        <div className="box-6 h-[calc(100vh-8rem)]">
            <div className="flex justify-between">
                <span className='flex [&>*]:mr-3'>
                    <span className="flex items-center pl-3 border-l border-l-white text-white">
                        <MoneyCheckEdit />
                        <span className="mr-2">تاریخچه تراکنشات</span>
                    </span>
                    <Dropdown title={"تاریخچه معاملات آسن تتر"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                </span>
                <span className='flex [&>*]:mr-3'>
                    <Dropdown title={"تمام وضعیت ها"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"همه تراکنشات"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" />
                    <Dropdown title={"12 مرداد - 1401"} bgColor="bg-[#2E2E2E]" textClass="text-[#AAAAAA]" rightIcon={<Calendar />} />
                </span>

            </div>
            <DashboardTable width="[&>*]:w-[12.5%]" height="h-[80%]" headerItems={headerItems} contents={<>
                {data?.map(item => <div key={item.id} className="flex justify-between items-center [&>*]:text-center [&>*]:w-[12.5%]">
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
            </>} />
            {/* <EmptyState text="هنوز معامله ای انجام نداده اید !" /> */}
        </div>
    )
}

export default page