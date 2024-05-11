"use client";
import Link from "next/link";
import Dropdown from "../ui/Dropdown";
import UserHeadset from "../ui/icons/UserHeadset";
import Button from "../buttons/Button";
import User from "../ui/icons/User";
import IconButton from "../buttons/IconButton";

const Navbar = () => {
    return <nav className="px-5 py-4 flex justify-between">
        <div className="flex items-center">
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
        <div className="flex items-center [&>*]:ml-2 text-[#AAAAAA]">
            <IconButton href="/test" icon={<UserHeadset />} />
            <Button
                href="/login"
                hasRightIcon={true}
                icon={<User />}
                color="bg-[#22F38F]"
                hover="hover:border-[#22F38F]">
                ثبت نام/ورود
            </Button>
        </div>
    </nav>
}

export default Navbar;