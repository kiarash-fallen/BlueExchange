import React from 'react'
import UserEdit from '../../../../../../components/ui/icons/UserEdit'
import Input2 from '../../../../../../components/input/Input2'
import Copy from '../../../../../../components/ui/icons/Copy'
import SecondButton from '../../../../../../components/buttons/SecondButton'
import Qedit from '../../../../../../components/ui/icons/Qedit'
import AuthenticationCart from '../../../../../../components/dashboard/AuthenticationCart'

function page() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="box-12 flex items-center text-white">
                    <UserEdit />
                    <span className="mr-2">مشخصات کاربری</span>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-5">
                    <Input2
                        type="text"
                        label="نام و نام خانوادگی :"
                        // isDisable={true}
                        value={"احسان امانیان"}
                    />
                    <Input2
                        type="text"
                        label="تاریخ تولد :"
                        // isDisable={true}
                        value={"12 / 5 / 79"}
                    />
                    <Input2
                        type="text"
                        label=" کد ملی :"
                        // isDisable={true}
                        value={" 546987132 "}
                    />
                    <Input2
                        type="text"
                        label="شماره تماس :"
                        // isDisable={true}
                        value={"546987132"}
                    />
                    <Input2
                        type="email"
                        label="ایمیل :"
                        // isDisable={true}
                        value={"ehsan@gmail.com"}
                    />
                    <Input2
                        type="text"
                        label="شناسه کاربری :"
                        // isDisable={true}
                        value={"09331809897"}
                        hasRightIcon={true}
                        icon={<Copy />}
                        clickableIcon={true}
                    />
                </div>
                <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl" style={"!p-2 mt-4"}>
                    <Qedit />
                    <span className='mx-2'>
                        ویرایش آدرس
                    </span>

                </SecondButton>
            </div>
            {/* <div> */}
            <AuthenticationCart />
            {/* </div> */}
        </div>
    )
}

export default page