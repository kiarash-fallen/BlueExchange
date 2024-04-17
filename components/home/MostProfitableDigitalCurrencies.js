import React from 'react'
import IconContainer from '../ui/IconContainer'
import PanelTabs from '../panel/PanelTabs'

function MostProfitableDigitalCurrencies() {
    return (
        <div className="mt-72">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                        BEX
                    </IconContainer>
                    <p className="text-sm mr-4 text-white">هوشمند ترین پلتفرم صرافی دیجیتال</p>
                </div>
                <p className="text-white text-[32px] font-light	">
                    <span className="font-semibold mx-1">پرسودترین</span>
                    ارز های دیجیتال
                </p>
                <p className='text-[#B0B0B0] mt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ا..</p>
            </div>
            <PanelTabs list={[
                { name: "روز " },
                { name: "ماه" },
                { name: "سال" },
            ]} />
        </div>
    )
}

export default MostProfitableDigitalCurrencies