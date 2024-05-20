import React from 'react'
import Breadcrums from '../../../../components/ui/Breadcrums'
import IconContainer from '../../../../components/ui/IconContainer'
import Button from '../../../../components/buttons/Button'
import Call from '../../../../components/ui/icons/Call'
import ContactForm from '../../../../components/forms/ContactForm'
import Marker from '../../../../components/ui/icons/Marker'

function page() {
    return (
        <div>
            <div className="mt-4">
                <Breadcrums breadcrums={[
                    { label: "خانه", link: "/" },
                    { label: "ارتباط با ما" },
                ]} />
            </div>
            <div className="box mt-2 mb-10 grid grid-cols-1 lg:grid-cols-2 ">
                <div>
                    <div className="flex justify-center md:justify-start items-center my-2 lg:my-4 text-white">
                        <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                            BEX
                        </IconContainer>
                        <p className="text-sm mr-4">ارتباط با ما</p>
                    </div>
                    <p className="flex flex-col text-center md:text-right text-[32px] text-white font-light	">
                        هر ساعت از شبانه روز که باشه ،
                        <span className="font-semibold">
                            ما کنارتیم
                        </span>
                    </p>
                    <p className="text-[#AAAAAA] my-4 text-center md:text-right">
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
                        style={"w-full md:w-auto"}
                        iconCenter={true}
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
                            style={"w-full md:w-auto"}
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
                        icon={<Marker />}
                        style={"w-full md:w-auto"}
                    >
                        <p className='max-w-[100px] truncate  sm:hidden'>
                            گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده

                        </p>
                        <p className='hidden sm:block'>
                            گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده

                        </p>
                    </Button>
                </div>
                <div className="contact-bg mt-6 lg:mt-0 lg:pt-16 lg:px-12">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default page