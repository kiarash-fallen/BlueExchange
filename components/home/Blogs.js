import React from 'react'
import IconContainer from '../ui/IconContainer'
import Button from '../buttons/Button'
import BlogSlider from '../blogs/BlogSlider'
import FrequentlyAskedQuestions from '../panel/FrequentlyAskedQuestions'
import Answer from './Answer'

function Blogs() {
    return (
        <div className="box mt-60">
            <div className="flex items-center">
                <IconContainer color="bg-[#22F38F]" border="border-[#22F38F]">
                    BEX
                </IconContainer>
                <p className="text-sm mr-4 text-white">مقالات بلو اکسچنج</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-white text-[32px] font-light	mt-4">
                    <span className="font-semibold mx-1">
                        جدید ترین
                    </span>
                    اخبار و مقالات بازار مالی
                </p>
                <Button
                    href="/"
                    varient="#22F38F"
                    color="bg-[#22F38F]"
                    hover="hover:border-[#22F38F]">
                    مشاهده همه
                </Button>
            </div>
            <div className="mt-10">
                <BlogSlider />
            </div>
            <div className="box mt-60">
                <div className="flex items-center">
                    <IconContainer color="bg-[#22F38F]" border="border-[#22F38F]">
                        BEX
                    </IconContainer>
                    <p className="text-sm mr-4 text-white">  سوالات متداول</p>
                </div>
                <p className="text-white text-[32px] font-light	mt-4">
                    <span className="font-semibold mx-1">
                        سوالات متداول
                    </span>
                    که کاربران از ما دارند
                </p>
                <FrequentlyAskedQuestions list={[
                    { name: "چگونه می تونیم انواع رمز ارز های دیجیتال رو بخریم ؟ ", content: <Answer /> },
                    { name: "چگونه می تونیم انواع رمز ارز های دیجیتال رو بخریم ؟", content: <Answer /> },
                    { name: "چگونه می تونیم انواع رمز ارز های دیجیتال رو بخریم ؟", content: <Answer /> },
                    { name: "چگونه می تونیم انواع رمز ارز های دیجیتال رو بخریم ؟", content: <Answer /> },
                    { name: "چگونه می تونیم انواع رمز ارز های دیجیتال رو بخریم ؟", content: <Answer /> },
                ]} />


            </div>
        </div>
    )
}

export default Blogs