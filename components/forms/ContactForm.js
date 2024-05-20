import React from 'react'
import Input3 from '../input/Input3'
import Textarea from '../input/TextArea'
import Button from '../buttons/Button'
import LeftArrow2 from '../ui/icons/LeftArrow2'

function ContactForm() {
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <Input3
                    type="text"
                    label="نام و نام خانوادگی :"
                />
            </div>
            <div>
                <Input3
                    type="text"
                    label="ایمیل شما :"
                />
            </div>
            <div className='md:col-span-2'>
                <Textarea
                    cols={3}
                    rows={3}
                    label="پیام شما"></Textarea>
            </div>
            <div className='md:col-span-2'>
                <Button
                    isFull={true}
                    type="submit"
                    varient="#2D74FF"
                    color="bg-[#2D74FF]"
                    hover="hover:border-[#2D74FF]"
                    hasRightIcon={true}
                >
                    <span className="flex items-center">
                        <span className="ml-4">ارسال درخواست</span>
                        <LeftArrow2 />
                    </span>
                </Button>
            </div>
        </form>
    )
}

export default ContactForm