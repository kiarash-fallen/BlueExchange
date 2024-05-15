import React from 'react'
import Store from '../../../../../components/dashboard/Store'
import PanelTabs4 from '../../../../../components/panel/PanelTabs4'
import HandHoldingUsd from '../../../../../components/ui/icons/HandHoldingUsd'
import TetherToToman from '../../../../../components/dashboard/TetherToToman'

function page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="box-6 ">
                    <div className="text-white bg-[#3A3A3A] rounded-xl p-4 flex items-center [&>*]:ml-2 mb-4">
                        <HandHoldingUsd />
                        <span>خرید و فروش سریع</span>
                    </div>
                    <PanelTabs4
                        color={"!bg-[#1C1C1C]"}
                        btnFull={true}
                        list={[
                            { name: " تتر به تومان ", content: <TetherToToman type={"tether"} /> },
                            { name: "تومان به تتر", content: <TetherToToman type={"toman"} /> },
                        ]}
                    />
                </div>
            </div>

            <Store height="h-screen" />
        </div>
    )
}

export default page