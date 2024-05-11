import React from 'react'
import Select from '../ui/Select'
import Network from '../ui/icons/Network';
import Hashtag from '../ui/icons/Hashtag';
import IconButton from '../buttons/IconButton';
import Copy from '../ui/icons/Copy';
import Qrcode from '../ui/icons/Qrcode';

function Withdrawal() {
    return (
        <div className="[&>*]:mb-4">
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <Network />
                <span className='mr-2'> نوع شبکه</span>
            </div>
            <Select title="TRC20" style="text-white" />
            <div className="flex items-center text-[#AAAAAA] text-sm">
                <Hashtag />
                <span className='mr-2'>آدرس در شبکه TRC20</span>
            </div>
            <div className='box-9 text-white'>
                s[dfksd[pk564789sad4894sa
            </div>
            <div className="w-full flex justify-between">
                <div className='w-[48%]'>
                    <IconButton filled={true} isFull={true} icon={<Copy big={true} />} />

                </div>
                <div className='w-[48%]'>
                    <IconButton filled={true} isFull={true} icon={<Qrcode />} />

                </div>
            </div>
        </div>
    )
}

export default Withdrawal;