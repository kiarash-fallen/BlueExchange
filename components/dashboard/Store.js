import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import ChartHistogram from '../ui/icons/ChartHistogram'
import StoreTable from '../table/StoreTable'

function Store({ height }) {
    return (
        <div className={`box-6 p-0 py-4 ${height}`}>
            <div className='px-4'>
                <HeaderCart title="بازار" icon={<ChartHistogram />} href="/" />
            </div>
            <div className={`h-[90%] overflow-auto   pr-4`}>
                <StoreTable />
            </div>
        </div>
    )
}

export default Store