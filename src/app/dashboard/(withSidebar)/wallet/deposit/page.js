import React from 'react'
import PanelTabs from '../../../../../../components/panel/PanelTabs'
import Deposit from '../../../../../../components/dashboard/Deposit'
import Withdrawal from '../../../../../../components/dashboard/Withdrawal'
import Store from '../../../../../../components/dashboard/Store'
import PanelTabs4 from '../../../../../../components/panel/PanelTabs4'

function page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="box-6 ">
                    <PanelTabs4
                        btnFull={true}
                        list={[
                            { name: " تومان ", content: <Deposit /> },
                            { name: "واریز تتر", content: <Withdrawal /> },
                        ]}
                    />
                </div>
            </div>

            <Store height="h-screen" />
        </div>
    )
}

export default page