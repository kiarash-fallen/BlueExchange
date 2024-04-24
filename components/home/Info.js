import IconContainer from "../ui/IconContainer";
import TrophyStar from "../ui/icons/TrophyStar";
import UsdCircle from "../ui/icons/UsdCircle";
import UserCrown from "../ui/icons/UserCrown";
import Group9998 from "../../public/assests/images/Group9998.png";
import Image from "next/image";

const Info = () => {
    return <main className="grid grid-cols-2 mt-10">
        <div className="grid grid-cols-3">
            <div>
                <IconContainer color="bg-[#2D74FF]" border="border-[#2D74FF]">
                    <UserCrown />
                </IconContainer>
                <div className="flex justify-between">
                    <div>
                        <p className="text-white font-semibold text-2xl my-2">125.025+</p>
                        <p className="text-white text-2xl !font-light">معامله گر در لحظه</p>
                    </div>
                    <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8 self-center"></span>
                </div>
            </div>
            <div>
                <IconContainer color="bg-[#22F38F]" border="border-[#22F38F]">
                    <UsdCircle />
                </IconContainer>
                <div className="flex justify-between">
                    <div>
                        <p className="text-white font-semibold text-2xl my-2">200+</p>
                        <p className="text-white text-2xl !font-light">ارز های جهانی در بازار</p>
                    </div>
                    <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8 self-center"></span>
                </div>
            </div>
            <div>
                <IconContainer color="bg-[#F39422]" border="border-[#F39422]">
                    <TrophyStar />
                </IconContainer>
                <div className="flex justify-between">
                    <div>
                        <p className="text-white font-semibold text-2xl my-2">32+</p>
                        <p className="text-white text-2xl !font-light"> سال تجربه در بازار مالی  </p>
                    </div>
                    {/* <span className="inline-block w-0.5 h-8 bg-[#323232] mx-8 self-center"></span> */}
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <Image src={Group9998} alt="image" width="auto" height="auto" className="ml-14 -mb-0.5"/>
        </div>
    </main >
}

export default Info;