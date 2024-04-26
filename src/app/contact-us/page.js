import React from 'react'
import Breadcrums from '../../../components/ui/Breadcrums'
import IconContainer from '../../../components/ui/IconContainer'
import Button from '../../../components/buttons/Button'
import Call from '../../../components/ui/icons/Call'
import ContactForm from '../../../components/forms/ContactForm'

function page() {
    return (
        <div>
            <div className="mt-4">
                <Breadcrums breadcrums={[
                    { label: "خانه", link: "/" },
                    { label: "ارتباط با ما" },
                ]} />
            </div>
            <div className="box mt-2 mb-10 grid grid-cols-2">
                <div>
                    <div className="flex items-center my-4 text-white">
                        <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                            BEX
                        </IconContainer>
                        <p className="text-sm mr-4">ارتباط با ما</p>
                    </div>
                    <p className="text-[32px] text-white font-light	">
                        هر ساعت از شبانه روز که باشه ،
                        <span className="font-semibold">
                            ما کنارتیم
                        </span>
                    </p>
                    <p className="text-[#AAAAAA] my-4">
                        هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و انتقادات شما هستند
                        تا در اسرع وقت مشکلتان را حل کنیم !
                    </p>
                    <Button
                        href="/"
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]"
                        hasRightIcon={true}
                        icon={<Call />}
                    >
                        09331809897 - 09938879026
                    </Button>
                    <div className="my-4">
                        <Button
                            href="/"
                            varient="#22F38F"
                            color="bg-[#22F38F]"
                            hover="hover:border-[#22F38F]"
                            hasRightIcon={true}
                            icon={<span>@</span>}
                        >
                            Delta@gmail.com
                        </Button>
                    </div>
                    <Button
                        href="/"
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]"
                        hasRightIcon={true}
                        icon={<span>@</span>}
                    >
                        گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده
                    </Button>
                </div>
                <div className="contact-bg pt-16 px-12">
                    <ContactForm />
                </div>

            </div>
        </div>
    )
}

export default page