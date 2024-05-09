import Image from 'next/image'
import React from 'react'
import Invite from "../../../public/assests/images/media-journalism-sales-background.png";
import Star2 from '../../ui/icons/Star2';
import Button from '../../buttons/Button';
import Copy from '../../ui/icons/Copy';

function InviteFreinds() {
    return (
        <div>
            <Image className="m-auto" src={Invite} alt="invite friends" />
            <div className="box-8 text-white text-center -mt-10 z-10 relative">
                <div className='flex items-center justify-between'>
                    <Star2 />
                    <span>دعوت دوستان</span>
                    <Star2 />
                </div>
                <p className="p-3 rounded-xl bg-[#292929] my-3">sas6d554dw</p>
                <Button
                    isFull={true}
                    iconCenter={true}
                    href="/login"
                    hasRightIcon={true}
                    icon={<Copy />}
                    color="bg-[#22F38F]"
                    hover="hover:border-[#22F38F]">
                    کپی متن
                </Button>
            </div>
        </div>
    )
}

export default InviteFreinds