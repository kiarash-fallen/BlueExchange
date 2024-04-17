import Image from 'next/image';
import React from 'react';
import BitCoin from "../../public/assests/images/bitcoin.png";

function CurrencyCart() {
    return (
        <div className="pt-20">
            <div className="relative rounded-[20px] currency-bg w-[212px] h-[230px] pt-6 px-2">
                <div className="absolute -top-[40%] mr-5">
                    <Image src={BitCoin} alt="image" width="auto" height="auto" />
                </div>
                <p className="text-white text-2xl text-center mt-10">بیت کوین </p>
                <div className="flex justify-between mt-12">
                    <span className="text-white text-sm font-semibold">قیمت بروز :</span>
                    <span className="font-semibold text-[#22F38F]">41.265.235 ت</span>
                </div>
                <div className="flex justify-between mt-4 text-sm border-b border-b-[#22F38F] text-white p-2 rounded-xl price-background green-shadow">
                    <span>بالاترین قیمت :</span>
                    <span>51.223.977</span>
                </div>
            </div>
        </div>

    )
}

export default CurrencyCart