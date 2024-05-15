import React from 'react'

function AccountTable({ headerItems, contents, height, width }) {
    return (
        <>
            <div className={` text-[#AAAAAA] py-2 flex justify-between mt-4 border-b border-b-[#565656] ${width}`}>
                {headerItems?.map(item => <span key={item.id}>{item.name}</span>)}
            </div>
            <div className={`[&>*]:py-4 text-white [&>*:not(:last-child)]:border-b [&>*]:border-b-[#565656] px-1 overflow-y-auto ${height}`}>
                {contents}
            </div>
        </>
    )
}

export default AccountTable