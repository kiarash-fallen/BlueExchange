import React from 'react'
import Modal from '../../modal/Modal'
import Input3 from '../../input/Input3'
import SecondButton from '../../buttons/SecondButton'
import Tick from '../../ui/icons/Tick'

function AddAddress() {
    return (
        <div>
            <Modal btnText={"افزودن آدرس"} titleText="افزودن آدرس قیمت جدید">
                <form className='mt-5 '>
                    <div className="[&>*]:mb-5">
                        <Input3
                            label=" نام آدرس :"
                            placeholder=" نام آدرس خود را وارد کنید ...." />
                        <Input3
                            label="  آدرس :"
                            placeholder="  آدرس خود را وارد کنید ...." />
                    </div>

                    <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl" style={"!p-2 !mt-5"}>
                        <Tick />
                        <span className='mx-2'>
                            ثبت آدرس
                        </span>
                    </SecondButton>
                </form>
            </Modal>
        </div>
    )
}

export default AddAddress;