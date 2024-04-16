import IconContainer from "../ui/IconContainer";

const Header = () => {
    return <header>
        <div>
            <div className="flex items-center">
                <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                    BEX
                </IconContainer>
                <p className="text-white mr-4">هوشمند ترین پلتفرم صرافی دیجیتال</p>
                <p className="">بیش از 125.025+</p>
                تعداد معامله گرانی که به بلواکسچنج اعتماد کردن
            </div>
        </div>
    </header >
}

export default Header;