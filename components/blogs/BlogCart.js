import React from 'react'
import Star from '../ui/icons/Star'
import Tag from '../ui/Tag'
import Time from '../ui/icons/Time'
import Button from '../buttons/Button'

function BlogCart() {
    return (
        <div className="relative pt-4">
            <div className="bg-[#2C2C2C] rounded-[20px] border border-transparent hover-animation hover:border-[#22F38F] w-full h-52">
                <div className=" flex justify-end">
                    <div className="rating-background w-20 h-12 absolute top-0 flex flex-col items-center pt-2">
                        <Star />
                        <span className='text-[10px] text-white'>4.5</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex px-1">

                <Tag color="border-transparent text-white bg-[#F39422]" hasRightIcon={true} icon={<Time />}>
                    12 مرداد - 1401
                </Tag>
                <span className="w-[1.5px] h-8 bg-white mx-4">

                </span>
                <Tag color="border-[#646464] text-[#AAAAAA] bg-[#2A2A2A]">
                    #بازار جهانی
                </Tag>

                <Tag color="border-[#646464] text-[#AAAAAA] bg-[#2A2A2A]" margin="mr-2">
                    #بازار جهانی
                </Tag>

            </div>
            <p className="text-white text-[20px] mt-4 font-medium px-1">
                بهترین رمز ارز های سال 2024 برای پوزیشن خرید
            </p>
            <p className="text-white mt-4 font-medium px-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>

            <div className="mt-10">
                <Button
                    href="/"
                    varient="#22F38F"
                    color="bg-[#22F38F]"
                    hover="hover:border-[#22F38F]"
                    isFull={true}
                >
                    <span className="font-semibold w-full">ادامه مطلب</span>
                </Button>
            </div>

        </div>
    )
}

export default BlogCart