import React from 'react'
import Modal from '../../modal/Modal'
import Input3 from '../../input/Input3'
import SecondButton from '../../buttons/SecondButton'
import Tick from '../../ui/icons/Tick'
import Select2 from '../../ui/Select2'


function AddAlarm() {
    return (
        <div>
            <Modal btnText={"افزودن هشدار"} titleText="افزودن هشدار قیمت جدید">
                <form className='mt-5 '>
                    <div className='grid grid-cols-2 gap-4'>
                        <Select2
                            label={"رمز ارز :"}
                            title="نام رمز مورد نظر ...."
                            hasRightIcon={true}
                        />
                        <Select2
                            label={" حد اعلان : :"}
                            title="بیشتر از"
                            hasRightIcon={true}
                        />
                        <Select2
                            label={" نوع ارز :"}
                            title="تومان"
                            hasRightIcon={true}
                        />
                        <Input3
                            label="شماره کارت :"
                            placeholder="شماره کارت خود را وارد کنید ...." />
                        <div className='col-span-2'>
                            <Select2
                                label={"نوع اطلاع رسانی :"}
                                title="ایمیل"
                                hasRightIcon={true}
                            />
                        </div>
                    </div>
                    <SecondButton full={true} shadow="shadow-blue" type="button" typeBtn="filled" color="bg-[#2D74FF]" radius="rounded-xl" style={"!p-2 !mt-5"}>
                        <Tick />
                        <span className='mx-2'>
                            ساخت هشدار قیمت
                        </span>
                    </SecondButton>
                </form>
            </Modal>
        </div>
    )
}

export default AddAlarm