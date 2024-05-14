import React from 'react'
import PanelTabs from '../../../../../../components/panel/PanelTabs'
import Store from '../../../../../../components/dashboard/Store'
import WithdrawalToman from '../../../../../../components/dashboard/WithdrawalToman'
import WithdrawalTeter from '../../../../../../components/dashboard/WithdrawalTeter'
import WithdrawalCurrency from '../../../../../../components/dashboard/WithdrawalCurrency'
import PanelTabs4 from '../../../../../../components/panel/PanelTabs4'

function page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="box-6 ">
                    <PanelTabs4
                        widthFull={true}
                        list={[
                            { name: "برداشت تومان", content: <WithdrawalToman /> },
                            { name: "برداشت تتر", content: <WithdrawalTeter /> },
                            { name: "برداشت ارز", content: <WithdrawalCurrency /> },
                        ]}
                    />
                </div>
            </div>

            <Store height="h-screen" />
        </div>
    )
}

export default page