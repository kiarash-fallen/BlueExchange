import Image from "next/image";
import Button from "../buttons/Button";
import IconContainer from "../ui/IconContainer";
import Coins from "../../public/assests/images/coins.svg"
import BuyDigitalCurrency from "../forms/BuyDigitalCurrency";

const Header = () => {
    return <header className="grid grid-cols-3">
        <div className="text-white col-span-2">
            <div className="flex ">
                <div className="flex items-end mb-10">
                    <div>
                        <div className="flex items-center">
                            <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                                BEX
                            </IconContainer>
                            <p className="text-sm mr-4">هوشمند ترین پلتفرم صرافی دیجیتال</p>
                        </div>
                        <p className="font-semibold text-5xl mt-8">بیش از 125.025+</p>
                    </div>
                </div>
                <div className="">
                    <Image src={Coins} width="auto" height={300} alt="coins" />
                </div>
            </div>
            <p className="font-light text-[40px]">تعداد معامله گرانی که به  <span className="font-semibold">بلواکسچنج</span> اعتماد کردن</p>
            <p className="font-normal text-[#B0B0B0]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
            </p>
            <p className="font-normal text-[#B0B0B0] mt-2">بلکه
                روزنامه و مجله در ستون و سطرآنچنان که لازم است ...</p>

            <div className="mt-10">
                <Button
                    href="/"
                    varient="#2D74FF"
                    color="bg-[#2D74FF]"
                    hover="hover:border-[#2D74FF]">
                    معامله تو شروع کن !
                </Button>
                <span className="mr-4">
                    <Button
                        href="/"
                        varient="#2D74FF"
                        color="bg-[#2D74FF]"
                        hover="hover:border-[#2D74FF]">
                        ارتباط با ما
                    </Button>
                </span>

            </div>
        </div>
        {/* change */}
        <div className="flex justify-end items-center ml-12">
            <BuyDigitalCurrency />
        </div>
    </header >
}

export default Header;