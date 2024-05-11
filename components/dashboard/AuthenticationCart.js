import React from 'react';
import HeaderCart from '../ui/HeaderCart';
import IdBadge from '../ui/icons/IdBadge';
import Stepper from '../ui/Stepper';
import SecondButton from '../buttons/SecondButton';
import LeftArrow from '../ui/icons/LeftArrow';

function AuthenticationCart() {
    return (
        <div className="box-6 flex flex-col justify-between">
            <HeaderCart
                title="احراز هویت"
                icon={<IdBadge />}
                href="/" />
            <Stepper active={1} title1={"احراز هویت"} title2={"احراز هویت کاربردی"} title3={"احراز هویت پیشرفته"} />
            <SecondButton full={true} type="button" typeBtn="filled" color="border border-[#2D74FF]" radius="rounded-xl">
                <span className="flex items-center text-white">
                    <span>تکمیل احراز هویت</span>
                    <LeftArrow />
                </span>
            </SecondButton>
        </div>
    )
}

export default AuthenticationCart;