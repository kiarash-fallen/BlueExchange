import React from 'react'
import CurvedArrow from '../ui/icons/CurvedArrow'
import Button from '../buttons/Button'
import IconContainer from '../ui/IconContainer'
import Image from 'next/image'
import hand from "../../public/assests/images/person-hold-mobile-phone-point-blank-screen.png";
import auth from "../../public/assests/images/ss1.png";
import money from "../../public/assests/images/bundle-dollar-bills-icon-isolated-3d-render-illustration_47987-11584.png";
import handPhone from "../../public/assests/images/MaskGroup.png";
import BEX from '../layout/BEX'

function PeiceOfCake() {
    return (
        <div className="box mt-16">
            <div className="grid grid-cols-2 gap-10">
                <div className="mt-4">
                    <div className="box-1 flex justify-between relative">
                        <div className="">
                            <p className="title-text-1 ml-28">
                                <span className="ml-4">
                                    1.
                                </span>
                                وارد کردن شماره تماس یا ایمیل خود و تایید آن
                            </p>
                            <p className="text-[#CCCCCC] mr-8 mt-2">
                                به راحتی با وارد کردن شماره تلفن یا ایمل خود در بیت کیو ثبت کنید !
                            </p>
                        </div>
                        <div className=" flex-none absolute left-0 -top-14 ">
                            <Image src={hand} alt="image" width="auto" height="auto" />
                        </div>
                    </div>
                    <div className="box-1 flex justify-between relative mt-20">
                        <div className="">
                            <p className="title-text-1 ml-28">
                                <span className="ml-4">
                                    2.
                                </span>
                                وارد کردن اطلاعات و احراز هویت در بلواکسچنج
                            </p>
                            <p className="text-[#CCCCCC] mr-8 mt-2">
                                اطلاعات خود را در پنل بیت کیو وارد کنید تا به راحتی احراز هویت شما انجام شود !
                            </p>
                        </div>
                        {/* rotate */}
                        <div className="flex-none absolute left-0 -top-14 rotate-[15deg]">
                            <Image src={auth} alt="image" width="auto" height="auto" />
                        </div>
                    </div>
                    <div className="box-1 flex justify-between relative mt-20">
                        <div className="">
                            <p className="title-text-1 ml-28">
                                <span className="ml-4">
                                    3.
                                </span>
                                شروع معاملات در پلتفرم بلواکسچنج
                            </p>
                            <p className="text-[#CCCCCC] mr-8 mt-2">
                                حالا می توانید هر نوع معامله ای را که میخواهید را به هر میزان انجام دهید !
                            </p>
                        </div>
                        {/* rotate */}
                        <div className=" flex-none absolute left-0 -top-14 ">
                            <Image src={money} alt="image" width="auto" height="auto" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center text-white">
                        <IconContainer color="bg-[#22F38F]" border="border-[#22F38F]">
                            BEX
                        </IconContainer>
                        <p className="text-sm mr-4">به آسانی آب خوردن</p>
                    </div>
                    <p className="text-white text-[32px] mt-4"> به راحتی ثبت نام کن و
                        <span className="font-light mr-2"> همین الان معاملت رو شروع کن</span>
                    </p>
                    <p className="text-[#B0B0B0] leading-8">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اس
                        پگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ...
                    </p>
                    <div className="mt-10">
                        <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]">
                            معامله تو شروع کن !
                        </Button>
                        <span className="mr-4">
                            <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]">
                                ارتباط با ما
                            </Button>
                        </span>
                        <div className="w-full">
                            <Image src={handPhone} alt="image" width="auto" height="auto" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-white m-auto bg-[#323232] bg-opacity-[36%] rounded-[52px] p-10 border border-[#373737] mt-20">
                <div className="flex">
                    <BEX />
                    <h6 className="my-auto mr-3">روندکاری ما</h6>
                </div>
                <div className="flex mt-6">
                    <h1 className="text-3xl font-semibold">بلواکسچینج</h1>
                    <h1 className="text-3xl">در تمامی مراحل همراه شماست</h1>
                </div>
                <div className="flex justify-between">
                    <p className="text-[#B0B0B0] mt-6">
                        شما میتوانید در اینجا تمامی مراحل شروع کاری ما از صفر تا صد را
                        مشاهده کنید و به راحتی آن ها را سپری کنید !
                    </p>
                    <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]">
                        معامله تو شروع کن !
                    </Button>
                </div>
                <div className="mt-12 flex justify-between relative">
                    <div className="w-[385.07px]">
                        <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]" radius={true} borderColor={true}>
                            <div className="my-2">
                                <h4 className="text-white transition ease-in-out duration-500 group-hover:text-[#22F38F]">
                                    1. ثبت نام در بیت کیو و ساخت پنل{" "}
                                </h4>
                                <p className="leading-9 text-white mt-4">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استف....
                                </p>
                            </div>
                        </Button>
                    </div>
                    <CurvedArrow fillColor="#0FB694" Placement="absolute right-[31%] bottom-[-30px] transform scale-x-[-1] rotate-180 bottom-2 stroke-[#0FB694]" />
                    <div className="w-[385.07px] transf">
                        <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]" radius={true} borderColor={true}>
                            <div className="my-2">
                                <h4 className="text-white transition ease-in-out duration-500 group-hover:text-[#22F38F]">
                                    1. ثبت نام در بیت کیو و ساخت پنل{" "}
                                </h4>
                                <p className="leading-9 text-white mt-4">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استف....
                                </p>
                            </div>
                        </Button>
                    </div>
                    <CurvedArrow fillColor="#0FB694" Placement="absolute left-[31%] top-[-30px] stroke-white" />
                    <div className="w-[385.07px]">
                        <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]" radius={true} borderColor={true}>
                            <div className="my-2">
                                <h4 className="text-white group-hover:text-[#22F38F] transition ease-in-out duration-500">
                                    1. ثبت نام در بیت کیو و ساخت پنل{" "}
                                </h4>
                                <p className="leading-9 text-white mt-4">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استف....
                                </p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeiceOfCake