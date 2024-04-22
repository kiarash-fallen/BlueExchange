import React, { useState } from 'react';
import IconContainer from '../ui/IconContainer';
import SecondButton from '../buttons/SecondButton';
import Image from 'next/image';
import dollor from "../../public/assests/images/dollorBig.svg";
import Dropdown from '../ui/Dropdown';
import TableLine from '../ui/icons/TableLine';
import Xlm from "../../public/assests/images/xlm.svg";
import GreenChart from "../../public/assests/images/Group 889.svg";
import RedChart from "../../public/assests/images/Vector 7.svg";
import ArrowDown from '../ui/icons/ArrowDown';

function CurrentPrice() {
    const [profitCurrency, setProfitCurrency] = useState(0);
    const [currencyType, setCurrencyType] = useState(0);
    return (
        <div className="mt-60">
            <div className="flex flex-col items-center">
                <div className="flex items-center text-white">
                    <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                        BEX
                    </IconContainer>
                    <p className="text-sm mr-4 font-semibold">به آسانی آب خوردن</p>
                </div>
                <p className="text-white text-[32px] mt-4"> به راحتی ثبت نام کن و
                    <span className="font-light mr-2"> همین الان معاملت رو شروع کن</span>
                </p>
            </div>
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
            <div>
                <div className="flex justify-center -mt-10">
                    <Image src={dollor} alt="image" width="auto" height="auto" />
                </div>
            </div>
            <div className="box-3 -mt-8 pb-0">
                <div className="w-full flex justify-between items-center my-5">
                    <span className="text-white font-medium text-xl">نام رمز ارز</span>
                    <span className="text-white font-medium text-xl">آخرین قیمت</span>
                    <Dropdown title={"وضعیت هفتگی"} textClass={"text-white font-medium text-xl"} />
                    <span className="text-white font-medium text-xl">  نمودار 24 ساعت</span>
                    <span className="text-white font-medium text-xl">  عملیات</span>
                </div>
                <TableLine />
                <div className="w-full flex justify-between items-center my-5">
                    <span className="flex items-center">
                        <span>
                            <Image src={Xlm} alt="image" width="auto" height="auto" />
                        </span>
                        <span className="flex flex-col mr-2">
                            <span className="text-white">استلا </span>
                            <span className="text-[#CCCCCC]">( XLM / IRR ) </span>
                        </span>
                    </span>
                    <span className="text-white"> 2.652.362 تومان</span>
                    <span className="flex justify-center w-60 ">
                        <span className="bg-[#22F38F] text-[#363636] box-shadow-green-2 py-2 px-4 rounded-xl ">
                            +%65
                        </span>
                    </span>

                    <span className="text-white font-medium text-xl">
                        <Image src={GreenChart} alt="chart" width="auto" height="auto" />
                    </span>
                    <span className="text-white font-medium text-xl">
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
                <div className="w-full flex justify-between items-center my-5">
                    <span className="flex items-center">
                        <span>
                            <Image src={Xlm} alt="image" width="auto" height="auto" />
                        </span>
                        <span className="flex flex-col mr-2">
                            <span className="text-white">استلا </span>
                            <span className="text-[#CCCCCC]">( XLM / IRR ) </span>
                        </span>
                    </span>
                    <span className="text-white"> 2.652.362 تومان</span>

                    <span className="flex justify-center w-60">
                        <span className="bg-[#FF5C5C] text-[#363636] box-shadow-green-2 py-2 px-4 rounded-xl">
                            +%65
                        </span>
                    </span>

                    <span className="text-white font-medium text-xl">
                        <Image src={RedChart} alt="chart" width="auto" height="auto" />
                    </span>
                    <span className="text-white font-medium text-xl">
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
    )
}

export default CurrentPrice