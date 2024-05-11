import React from 'react'
import Clock from '../../ui/icons/Clock'

function Chat({ type }) {
    return (
        <div className={`w-full flex ${type ? "justify-end" : "justify-start"}`} >
            <div className=''>
                <span className='flex text-white items-center w-full mb-2'>
                    <Clock />
                    <span className='text-sm mr-2'>11:30</span>
                </span>
                <div className={`p-4 rounded-xl max-w-[400px] text-white ${type ? "bg-[#2D74FF] !rounded-bl-[0px]" : "bg-[#363636]  !rounded-br-[0px]"}`}>
                    سلام خدمت شما ، امیدوارم حالتون خوب باشه !
                </div>
            </div>
        </div>
    )
}

export default Chat