import React, { useState } from 'react';
import IconContainer from '../ui/IconContainer';
import SecondButton from '../buttons/SecondButton';
import Image from 'next/image';
import dollor from "../../public/assests/icons/DollarSign.svg";

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
            <div className="box-3 -mt-8">

            </div>
        </div>
    )
}

export default CurrentPrice