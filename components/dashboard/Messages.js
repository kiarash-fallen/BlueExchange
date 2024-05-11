import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import Comment from '../ui/icons/Comment';
import Line4 from '../ui/icons/Line4';
import Message from './Message';

function Messages() {
    return (
        <div className="box-6 p-0 py-4 ">
            <div className='px-4'>
                <HeaderCart
                    title={<span>پیام های من <span className="text-[#22F38F]">( 5 )</span></span>}
                    icon={<Comment />} href="/" />
            </div>
            <div className="mt-4 h-52 overflow-y-auto">
                <Line4 />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    )
}

export default Messages;