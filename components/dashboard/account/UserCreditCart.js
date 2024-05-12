import React from 'react'
import IconButton from '../../buttons/IconButton'
import Delete from '../../ui/icons/Delete'

function UserCreditCart() {
    return (
        <div className="flex justify-between items-center py-2 border-b border-b-[#4B4B4B]">
            <span className="flex items-center">
                <span className="bg-[#393939] size-[44px] rounded-2xl">
                </span>
                <span className='mr-2 flex flex-col text-sm'>
                    <span>
                        <span className='text-white'>
                            بانک سامان
                        </span>
                        <span className='text-[#2D74FF] mr-1'>( احسان امانیان )</span>
                    </span>
                    <span className='text-[#AAAAAA] mt-1'> 4658 - 5985 - 9874 - 5698</span>
                </span>
            </span>
            <IconButton type="button" icon={<Delete />} style={"!border-[#FF5C5C] !text-[#FF5C5C] !size-8"} />

        </div>
    )
}

export default UserCreditCart