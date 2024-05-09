import React, { Suspense } from 'react'
import Breadcrums from '../../../../components/ui/Breadcrums'
import IconContainer from '../../../../components/ui/IconContainer'
import Blogs from "../../../../public/assests/images/blogs.png"
import Image from 'next/image'
import BlogCart from '../../../../components/blogs/BlogCart'
import BlogSlider from '../../../../components/blogs/BlogSlider'
import Input2 from '../../../../components/input/Input2'
import Search from '../../../../components/ui/icons/Search'
import PaginationContainer from '../../../../components/pagination/PaginationContainer'

function page(props) {
    console.log(props)

    return (
        <>
            <div className="mt-4">
                <Breadcrums breadcrums={[
                    { label: "خانه", link: "/" },
                    { label: "مقالات ما" },
                ]} />
            </div>
            <div className="grid grid-cols-2">
                <div className="text-white flex items-center">
                    <div>
                        <div className="flex items-center my-4">
                            <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                                BEX
                            </IconContainer>
                            <p className="text-sm mr-4">مقالات ما</p>
                        </div>
                        <p className="font-light text-[40px]">
                            <span className="font-semibold">جدید ترین</span>
                            اخبار و مقالات بازار مالی
                        </p>
                        <p className="font-normal text-[#B0B0B0] my-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است. چاپگرها و متون
                        </p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Image src={Blogs} width="auto" height="auto" alt="blogs" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 -mt-4">
                <BlogCart />
                <BlogCart />
            </div>
            <div className="my-4">
                <BlogSlider />
            </div>
            <div>
                <div className="flex items-center my-4 text-white">
                    <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                        BEX
                    </IconContainer>
                    <p className="text-sm mr-4">دسته بندی مقالات</p>
                </div>
                <p className="font-light text-[40px] text-white mb-5">
                    <span className="font-semibold">تمام مقالات</span>
                    بلواکسچنج
                </p>
            </div>
            <div className="grid grid-cols-3">
                <div></div>
                <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8"></span>
                <Input2
                    id="search"
                    label="جستجو :"
                    placeholder="نام یا دسته بندی مقالات ...."
                    hasRightIcon={true}
                    icon={<Search />}
                />
            </div>
            <div>
                <div className="grid grid-cols-4 gap-4 mb-10">
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                    <BlogCart />
                </div>
            </div>
            <PaginationContainer />
        </>
    )
}

export default page