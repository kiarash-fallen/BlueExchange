import React from 'react'
import Modal from '../../modal/Modal'
import Input3 from '../../input/Input3'
import SecondButton from '../../buttons/SecondButton'
import Tick from '../../ui/icons/Tick'

function AddAlarm() {
    return (
        <div>
            <Modal btnText={"افزودن هشدار"} titleText="افزودن هشدار قیمت جدید">
                <form className='mt-5'>
                    <Input3
                        label="شماره کارت :"
                        placeholder="شماره کارت خود را وارد کنید ...." />
                    <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl" style={"!p-2 !mt-5"}>
                        <Tick />
                        <span className='mx-2'>
                            افزودن کارت
                        </span>
                    </SecondButton>
                </form>
            </Modal>
        </div>
    )
}

export default AddAlarm