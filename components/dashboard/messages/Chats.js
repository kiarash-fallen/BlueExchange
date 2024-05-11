import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div className='h-[72%] overflow-y-auto '>

            <div className='flex flex-col px-2 justify-end [&>*]:mb-2'>
                <Chat type="x" />
                <Chat type="x" />
                <Chat type="" />
                <Chat type="" />
                <div className='my-4'>
                    <div className='w-full h-[2px] bg-[#333333]'></div>
                    <div className='flex justify-center'>
                        <span className='px-4 bg-[#1E1E1E] -mt-5'>
                            <span className='rounded-lg px-3 py-2 bg-[#333333] text-white'>
                                12 بهمن 1401
                            </span>
                        </span>
                    </div>

                </div>
                <Chat type="" />
                <Chat type="" />

                <Chat type="x" />
            </div>


        </div>
    )
}

export default Chats