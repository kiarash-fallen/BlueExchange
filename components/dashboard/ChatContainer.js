import React from 'react'
import Avatar from '../ui/Avatar'
import SmallCalendar from '../ui/icons/SmallCalendar'
import Close from '../ui/icons/Close'
import EmptyMessage from './messages/EmptyMessage'
import Input3 from '../input/Input3'
import IconButton from '../buttons/IconButton'
import Send from '../ui/icons/Send'
import Chats from './messages/Chats'

function ChatContainer() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col justify-between">
            <div className="box-6 flex justify-between items-center">
                <span className="flex ">
                    <Avatar />
                    <span className="mr-2">
                        <span className="text-white">احسان امانیان</span>
                        <div className="flex items-center mt-1 text-2xs text-[#22F38F]">
                            <SmallCalendar />
                            <span className="flex-none">12 مرداد - 1401 / 22:36 عصر</span>
                        </div>
                    </span>

                </span>
                <button className='rounded-full bg-[#FF6666] flex justify-center items-center size-6 shadow-red'>
                    <Close />
                </button>
            </div>
            <Chats />
            {/* <EmptyMessage /> */}
            <Input3
                type="text"
                placeholder="پیام مورد نظر خود را بنویسید ....."
                hasRightIcon={true}
                style={"!p-2 !border-[#484848] !placeholder-[#AAAAAA]"}
                icon={<span className='pr-4 flex items-center'>
                    <span className='w-[0.5px] h-5 bg-[#343434] mx-2'></span>
                    <IconButton filled={true} icon={<Send />} />
                </span>}
            />
        </div>
    )
}

export default ChatContainer