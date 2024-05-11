import React from 'react'
import Comment from '../../ui/icons/Comment'
import Input4 from '../../input/Input4'
import Search from '../../ui/icons/Search'
import UserHeadset from '../../ui/icons/UserHeadset'
import ClientChat from './ClientChat'

function ClientsContainer() {
    return (
        <div className='box-11 [&>*]:mb-4 h-[calc(100vh-8rem)]'>
            <div className='flex items-center text-white'>
                <Comment />
                <span className='mr-2'>
                    پیام و تیکت ها
                    <span className="text-[#FF5E5E] mx-1">{" "} ( 5 ) {" "}</span>
                </span>
            </div>
            <Input4
                type="search"
                placeholder="جستوجو..."
                RightIcon={<Search />}
            />
            <div className='h-1 w-full bg-[#1E1E1E]'></div>
            <div className="flex justify-between text-white">
                <span className='flex items-center'>
                    <UserHeadset />
                    <span className="mr-2">تیکت ها</span>
                </span>
                <span className='rounded-full size-5 bg-[#2D74FF] shadow text-white text-center text-sm'>
                    1
                </span>
            </div>
            <ClientChat />
            <div className="flex justify-between text-white">
                <span className='flex items-center'>
                    <Comment />
                    <span className="mr-2">پیام ها</span>
                </span>
                <span className='rounded-full size-5 bg-[#2D74FF] shadow text-white text-center text-sm'>
                    1
                </span>
            </div>
            <div className='h-[40%] overflow-y-auto [&>*]:mb-2 p-0 pl-2'>
                <ClientChat />
                <ClientChat />
                <ClientChat />
                <ClientChat />


            </div>
        </div>
    )
}

export default ClientsContainer