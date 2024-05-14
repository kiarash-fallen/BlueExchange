import React from 'react'
import AccountTable from '../../../../../../components/table/AccountTable'
import EmptyState from '../../../../../../components/ui/EmptyState';
import Marker from '../../../../../../components/ui/icons/Marker';
import AddAddress from '../../../../../../components/dashboard/account/AddAddress';
import IconButton from '../../../../../../components/buttons/IconButton';
import Delete from '../../../../../../components/ui/icons/Delete';

const headerItems = [
    { id: 0, name: "نام" },
    { id: 1, name: "آدرس" },
    { id: 2, name: "عملیات" },
];

const data = [
    {}
]

function page() {
    return (
        <>
            <div className="box-13">
                <div className="flex items-center justify-between">
                    <span className='flex items-center text-white'>
                        <Marker />
                        <span className='mr-2'>هشدار قیمت</span>
                    </span>
                    <AddAddress />
                </div>
            </div>
            <AccountTable width={" "} headerItems={headerItems} contents={<>
                {data?.map(item => <div key={item.id} className="flex justify-between items-center">
                    <span className='flex [&>*]:ml-1'>
                        احسان امانیان
                    </span>
                    <span className="">گیلان ، رشت ، دریا کنار ، خیابان سفال ، کوچه سوم ، پلاک 4</span>
                    <IconButton type="button" icon={<Delete />} style={"!border-[#FF5C5C] !text-[#FF5C5C] !size-8"} />
                </div>)}
                <EmptyState text="هیچ آدرسی قرار نداده اید !" />
            </>} />
        </>
    )
}

export default page