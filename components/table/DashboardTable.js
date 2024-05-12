import React from 'react'

function DashboardTable({ headerItems, contents, height, width }) {
    return (
        <>
            <div className={`rounded-md bg-[#2E2E2E] text-[#AAAAAA]  px-3 py-2 flex justify-between mt-4 [&>*]:text-center ${width}`}>
                {headerItems?.map(item => <span key={item.id}>{item.name}</span>)}
            </div>
            <div className={`[&>*]:py-4 text-white [&>*]:border-b [&>*]:border-b-[#565656] [&>*:last-child]:!boder-b-transparent px-1 overflow-y-auto ${height}`}>
                {contents}
            </div>
        </>
    )
}

export default DashboardTable