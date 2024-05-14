import React from 'react';
import Store from '../../../../../../components/dashboard/Store';
import EastExchange from '../../../../../../components/dashboard/EastExchange';
import UsdCircle from '../../../../../../components/ui/icons/UsdCircle';
import HandHoldingUsd from '../../../../../../components/ui/icons/HandHoldingUsd';

function page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="box-6 ">
                    <div className="text-white bg-[#3A3A3A] rounded-xl p-4 flex items-center [&>*]:ml-2 mb-4">
                        <HandHoldingUsd />
                        <span> خرید و فروش آسان</span>
                    </div>
                    <EastExchange type={"easy"} />
                </div>
            </div>

            <Store height="h-screen" />
        </div>
    )
}

export default page