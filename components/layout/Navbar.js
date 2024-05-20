"use client";
import Link from "next/link";
import Dropdown from "../ui/Dropdown";
import UserHeadset from "../ui/icons/UserHeadset";
import Button from "../buttons/Button";
import User from "../ui/icons/User";
import IconButton from "../buttons/IconButton";
import Hamburgur from "../ui/icons/Hamburgur";
import IconButton2 from "../buttons/IconButton2";

const Navbar = () => {
    return <nav className="px-5 py-4 flex justify-between items-center">
        <div className="lg:hidden">
            <IconButton2
                active={false}
                type={"button"}
                varient="#565656"
                color="bg-[#2D74FF]"
                textCOlor="text-[#565656]"
                hover="hover:border-[#2D74FF]"
                iconHover="hover:text-[#22F38F]"
            >
                <Hamburgur />
            </IconButton2>
        </div>
        <div className="hidden lg:flex items-center">
            <span className="inline-block w-24 h-16 rounded-2xl bg-[#323232]"></span>
            <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8"></span>
            <Button
                href="/"
                varient="#2D74FF"
                color="bg-[#2D74FF]"
                hover="hover:border-[#2D74FF]">خرید ارز دیجیتال
            </Button>
            <ul className="text-[#AAAAAA] mr-4 text-sm flex items-center [&>*]:ml-4">
                <li>
                    <Dropdown title={"معاملات ما "} />
                </li>
                <li>
                    <Link href="/">قیمت بازار</Link>
                </li>
                <li>
                    <Link href="/">راهنمای معاملات</Link>
                </li>
                <li>
                    <Dropdown title={"موارد بیشتر"} />
                </li>
            </ul>

        </div>
        <span className="inline-block w-[58px] h-[48px] md:w-[96px] md:h-[48px] lg:hidden rounded-2xl bg-[#323232]"></span>
        <div className="flex items-center [&>*]:ml-2 text-[#AAAAAA]">
            <IconButton href="/test" icon={<UserHeadset />} />
            <div className="hidden lg:block">
                <Button
                    href="/login"
                    hasRightIcon={true}
                    icon={<User />}
                    color="bg-[#22F38F]"
                    hover="hover:border-[#22F38F]">
                    ثبت نام/ورود
                </Button>
            </div>
            <div className="lg:hidden">
                <IconButton2
                    active={false}
                    type={"button"}
                    varient="#565656"
                    color="bg-[#22F38F]"
                    textCOlor="text-[#fff]"
                    hover="hover:border-[#22F38F]"
                    iconHover="hover:text-[#fff]"
                >
                    <User />
                </IconButton2>
            </div>

        </div>
    </nav>
}

export default Navbar;