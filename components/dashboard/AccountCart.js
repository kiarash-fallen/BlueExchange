import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import User from '../ui/icons/User'
import Input3 from '../input/Input3'

function AccountCart() {
    return (
        <div className="box-6">
            <HeaderCart title="حساب کاربری" icon={<User />} href="/" />
            <form>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-5">
                    <Input3
                        type="text"
                        label="نام و نام خانوادگی :"
                        isDisable={true}
                        value={"احسان امانیان"}
                    />
                    <Input3
                        type="text"
                        label="شماره تماس :"
                        isDisable={true}
                        value={"09331809897"}
                    />
                    <Input3
                        type="email"
                        label="ایمیل :"
                        isDisable={true}
                        value={"ehsan@gmail.com"}
                    />
                    <Input3
                        type="text"
                        label="تاریخ تولد :"
                        isDisable={true}
                        value={"12 / 5 / 79"}
                    />
                </div>

            </form>
        </div>
    )
}

export default AccountCart