"use client"
import React, { useMemo, useState } from 'react'
import ArrowDown from '../ui/icons/ArrowDown'
import SecondButton from '../buttons/SecondButton'
import TableLine from '../ui/icons/TableLine'
import Image from 'next/image'
import Dropdown from '../ui/Dropdown'
import dollor from "../../public/assests/images/dollorBig.svg";
import Xlm from "../../public/assests/images/xlm.svg";
import GreenChart from "../../public/assests/images/Group 889.svg";
import RedChart from "../../public/assests/images/Vector 7.svg";
import { usePathname } from 'next/navigation'
import Heart from '../ui/icons/Heart'
import Pagination from '../pagination/Pagination'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 }, { id: 3 },];
let PageSize = 1;

function PriceTable() {

    const [profitCurrency, setProfitCurrency] = useState(0);
    const [currencyType, setCurrencyType] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const path = usePathname();
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    console.log(path)
    return (
        <>
            <div className="box-2 mt-10 flex items-center justify-between">
                <div className="flex">
                    <SecondButton
                        typeBtn="filled"
                        type="button"
                        color={profitCurrency === 0 ? "bg-[#2D74FF]" : ""}
                        radius="rounded-2xl"
                        shadow={profitCurrency === 0 ? "shadow-blue" : ""}
                        onClick={() => setProfitCurrency(0)}
                    >
                        ارز های برتر
                    </SecondButton>
                    <SecondButton
                        typeBtn="filled"
                        type="button"
                        color={profitCurrency === 1 ? "bg-[#2D74FF]" : ""}
                        radius="rounded-2xl"
                        shadow={profitCurrency === 1 ? "shadow-blue" : ""}
                        onClick={() => setProfitCurrency(1)}
                    >
                        بیشترین رشد
                    </SecondButton>
                    <SecondButton
                        typeBtn="filled"
                        type="button"
                        color={profitCurrency === 2 ? "bg-[#2D74FF]" : ""}
                        radius="rounded-2xl"
                        shadow={profitCurrency === 2 ? "shadow-blue" : ""}
                        onClick={() => setProfitCurrency(2)}
                    >
                        بیشترین ریزش
                    </SecondButton>
                </div>
                <div className="flex items-center">
                    {path === "/market-price" && <span className="flex items-start ml-4">

                        <span className="size-[20px] text-xs text-white rounded ml-4 bg-[#2D74FF] flex justify-center items-center">3</span>
                        <Heart />
                    </span>}
                    <div className="flex py-2 pr-2 border-r border-r-[#CCCCCC]">
                        <SecondButton
                            typeBtn="filled"
                            type="button"
                            color={currencyType === 1 ? "bg-[#F39422]" : ""}
                            radius="rounded-2xl"
                            shadow={currencyType === 1 ? "box-shadow-orange" : ""}
                            onClick={() => setCurrencyType(1)}
                        >
                            تتر
                        </SecondButton>
                        <SecondButton
                            typeBtn="filled"
                            type="button"
                            color={currencyType === 0 ? "bg-[#F39422]" : ""}
                            radius="rounded-2xl"
                            shadow={currencyType === 0 ? "box-shadow-orange" : ""}
                            onClick={() => setCurrencyType(0)}
                        >
                            تومان
                        </SecondButton>
                    </div>
                </div>

            </div>
            <div>
                <div className="flex justify-center -mt-10">
                    <Image src={dollor} alt="image" width="auto" height="auto" />
                </div>
            </div>
            <div>
                <div className="box-3 -mt-8 pb-0">
                    <div className="w-full grid grid-cols-5   my-5">
                        <span className="text-white font-medium text-xl justify-self-start">نام رمز ارز</span>
                        <span className="text-white font-medium text-xl justify-self-start">آخرین قیمت</span>
                        <span className=' justify-self-center'>
                            <Dropdown title={"وضعیت هفتگی"} textClass={"text-white font-medium text-xl"} />
                        </span>
                        <span className="text-white font-medium text-xl justify-self-end">  نمودار 24 ساعت</span>
                        <span className="text-white font-medium text-xl justify-self-end">  عملیات</span>
                    </div>
                    <TableLine />
                    <div className="w-full grid grid-cols-5 my-5">
                        <span className="flex items-center ">
                            <span className="flex items-center">
                                {path === "/market-price" && <Heart />}
                                <span className={`${path === "/market-price" && "mr-4"}  flex items-center`}>
                                    <span>
                                        <Image src={Xlm} alt="image" width="auto" height="auto" />
                                    </span>
                                    <span className="flex flex-col mr-2">
                                        <span className="text-white">استلا </span>
                                        <span className="text-[#CCCCCC]">( XLM / IRR ) </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                        <span className="text-white self-center justify-self-start"> 2.652.362 تومان</span>
                        <span className={` justify-self-center`}>
                            <span className="bg-[#22F38F] text-[#363636] box-shadow-green-2 py-2 px-4 rounded-xl ">
                                +%65
                            </span>
                        </span>

                        <span className="text-white font-medium text-xl justify-self-end">
                            <Image src={GreenChart} alt="chart" width="auto" height="auto" />
                        </span>
                        <span className="text-white font-medium text-xl justify-self-end">
                            <SecondButton
                                type="button"
                                typeBtn="outline"
                                color="border-[#0FB694]"
                                textColor="text-[#0FB694]"
                                bgHover="hover:bg-[#0FB694]"
                                textSize="text-sm"
                            >
                                خرید / فروش
                            </SecondButton>
                        </span>
                    </div>
                    <TableLine />
                    <div className="w-full grid grid-cols-5 my-5">
                        <span className="flex items-center justify-self-start">
                            {path === "/market-price" && <Heart color="blue" />}
                            <span className={`${path === "/market-price" && "mr-4"}  flex items-center`}>
                                <span>
                                    <Image src={Xlm} alt="image" width="auto" height="auto" />
                                </span>
                                <span className="flex flex-col mr-2">
                                    <span className="text-white">استلا </span>
                                    <span className="text-[#CCCCCC]">( XLM / IRR ) </span>
                                </span>
                            </span>
                        </span>
                        <span className="text-white justify-self-start self-center"> 2.652.362 تومان</span>
                        <span className=" justify-self-center">
                            <span className="bg-[#FF5C5C] text-[#363636] box-shadow-green-2 py-2 px-4 rounded-xl justify-self-center">
                                +%65
                            </span>
                        </span>

                        <span className="text-white font-medium text-xl justify-self-end">
                            <Image src={RedChart} alt="chart" width="auto" height="auto" />
                        </span>
                        <span className="text-white font-medium text-xl justify-self-end">
                            <SecondButton
                                type="button"
                                typeBtn="outline"
                                color="border-[#0FB694]"
                                textColor="text-[#0FB694]"
                                bgHover="hover:bg-[#0FB694]"
                                textSize="text-sm"
                            >
                                خرید / فروش
                            </SecondButton>
                        </span>
                    </div>
                    <div className="w-[158px] m-auto flex justify-center items-center py-2 text-white bg-[#565656] rounded-tr-[24px] rounded-tl-[24px]">
                        <span className="ml-2">
                            همه رمز ارز ها
                        </span>
                        <ArrowDown />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalCount={data.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>

        </>
    )
}

export default PriceTable