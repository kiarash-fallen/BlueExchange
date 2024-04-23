import React from 'react'
import Button from '../buttons/Button'
import Link from 'next/link'
import Call from '../ui/icons/Call'
import Envelope from '../ui/icons/Envelope'
import UserHeeadSet2 from '../ui/icons/UserHeeadSet2'
import Marker from '../ui/icons/Marker'
import IconButton2 from '../buttons/IconButton2'
import Whatsapp from '../ui/icons/Whatsapp'
import Line2 from '../ui/icons/Line'
import ScrollTOTop from './ScrollTOTop'
import Inista from '../ui/icons/Inista'
import Telegram from '../ui/icons/Telegram'
import Linkdin from '../ui/icons/Linkdin'

function Footer() {
    return (
        <footer className=' mx-4 mt-10 mb-5'>
            <div className='grid grid-cols-4'>

                <div>
                    <h3 className="text-[24px] text-white mb-8">بلواکسچنج</h3>
                    <Button
                        href="/"
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]">
                        کارت هدیه
                    </Button>
                    <ul className="mt-4 [&>*]:mb-4 [&>*]:text-[#B0B0B0]">
                        <li>
                            <Link href="/">
                                بلواکسچنج
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                پشتیبانی
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                شرایط و مقررات پشتیبانی
                            </Link>
                        </li>
                        <li>
                            <Link href="/">

                                بلواکسچنج

                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[24px] text-white mb-8">منابع راهنمایی بلواکسچنج</h3>
                    <Button
                        href="/"
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]">
                        مستنات API
                    </Button>
                    <ul className="mt-4 [&>*]:mb-4 [&>*]:text-[#B0B0B0]">
                        <li>
                            <Link href="/">
                                راهنمای کار با بلواکسچنج
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                کارمزد در بلواکسچنج
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                دعوت دوستان
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                راهنمای احراز هویت
                            </Link>
                        </li>
                        <li>

                            <Link href="/">
                                سطوح کاربری
                            </Link>

                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[24px] text-white mb-8">  آکادمی بلواکسچنج</h3>
                    <Button
                        href="/"
                        varient="#22F38F"
                        color="bg-[#22F38F]"
                        hover="hover:border-[#22F38F]">
                        از اینجا شروع کنید
                    </Button>
                    <ul className="mt-4 [&>*]:mb-4 [&>*]:text-[#B0B0B0]">
                        <li>
                            <Link href="/">
                                آخرین اخبار بلواکسچنج
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                چطوری تتر بخریم ؟
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                اتریم چیست ؟
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                آشنایی با NFT
                            </Link>
                        </li>
                        <li>

                            <Link href="/">
                                نقشه بازار
                            </Link>

                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[24px] text-white mb-8">راه های ارتباطی</h3>
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
                    <ul className="mt-4 [&>*]:mb-4 [&>*]:text-[#B0B0B0]">
                        <li>
                            <Link href="/" className='flex items-center'>
                                <Envelope />
                                <span className="mr-2">
                                    ehsanamani7878@gmail.com
                                </span>

                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='flex items-center'>
                                <Marker />
                                <span className="mr-2">
                                    تبریز ، خوده تبریز ، کوچه دوم تبریز ، نرسیده به میدا تبریز
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='flex items-center'>
                                <UserHeeadSet2 />
                                <span className="mr-2">
                                    پشتیبانی آنلاین 24 ساعته و 7 روز هفته
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-4 w-full flex justify-center relative z-10">
                <ScrollTOTop />
            </div>
            <div className='-mt-10 relative'>
                <Line2 />
            </div>
            <div className="flex justify-between mt-4">
                <p className="text-white mt-4">
                    تمام حقوق مادی و معنوی این اثر برای بیت کیو محفوظ است .
                </p>
                <ul className='flex [&>*]:mr-4'>
                    <li>
                        <IconButton2
                            href="/"
                            varient="#565656"
                            color="bg-[#22F38F]"
                            textCOlor="text-[#565656]"
                            hover="hover:border-[#22F38F]"
                            iconHover="hover:text-[#22F38F]"
                        >
                            <Whatsapp />
                        </IconButton2>
                    </li>
                    <li>
                        <IconButton2
                            href="/"
                            varient="#565656"
                            color="bg-[#22F38F]"
                            textCOlor="text-[#565656]"
                            hover="hover:border-[#22F38F]"
                            iconHover="hover:text-[#22F38F]"
                        >
                            <Linkdin />
                        </IconButton2>
                    </li>
                    <li>
                        <IconButton2
                            href="/"
                            varient="#565656"
                            color="bg-[#22F38F]"
                            textCOlor="text-[#565656]"
                            hover="hover:border-[#22F38F]"
                            iconHover="hover:text-[#22F38F]"
                        >
                            <Telegram />
                        </IconButton2>
                    </li>
                    <li>
                        <IconButton2
                            href="/"
                            varient="#565656"
                            color="bg-[#22F38F]"
                            textCOlor="text-[#565656]"
                            hover="hover:border-[#22F38F]"
                            iconHover="hover:text-[#22F38F]"
                        >
                            <Inista />
                        </IconButton2>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer