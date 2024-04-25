import React from 'react';
import IconContainer from '../ui/IconContainer';
import PriceTable from '../table/PriceTable';

function CurrentPrice() {

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
            <PriceTable />
        </div>
    )
}

export default CurrentPrice