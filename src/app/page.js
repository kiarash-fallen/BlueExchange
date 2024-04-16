"use client";
import Image from "next/image";
import SmallButton from "../../components/buttons/SmallButton";
import EmblaCarousel from "../../components/Embla/EmblaCarousel";
import TopServices from "../../components/layout/TopServices";
import DigitalCurrencies from "../../components/layout/DigitalCurrencies";
import Button from "../../components/buttons/Button";

export default function Home() {
  
  return (
    <div className="">
      {/* Top Services */}
      <TopServices />
      <DigitalCurrencies />
      <div className="text-white w-11/12 mx-auto mt-48">
        <div className="flex">
          <div className=" bg-[#323232] w-fit border-b border-[#2D74FF] rounded-[10px] p-2">
            BEX
          </div>
          <h6 className="mr-3 my-auto">درباره بلو اکسچنج</h6>
        </div>
        <div className="flex">
          <div className="mt-6">
            <span className="text-3xl">چقدر با</span>
            <span className="text-3xl font-semibold">بلواکسچینج آشنایی؟</span>
            <p className="w-2/3 mt-6 leading-9">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است ...لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنام...
            </p>
            <div className="mt-10 flex">
              <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
                معامله تو شروع کن !
              </Button>
              <div className="mr-6">
                <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
                  ارتباط با ما
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-4 -mt-10">
            <div className="bg-[#2C2C2C] rounded-[32px] col-span-1 h-[150px] w-[420px] pr-4 pt-4 bg-[url('/assests/images/Rocket.png')] bg-no-repeat bg-left-bottom">
              <div className="bg-white p-2 rounded-2xl w-fit mr-2">
                <Image
                  alt="DollarSign"
                  height={100}
                  width={24}
                  src="/assests/Icons/DollarSign.svg"
                />
              </div>
              <h3 className="w-1/2 text-xl mt-2">
                معامله آسان و راحت با بهترین پلتفرم های معامله
              </h3>
            </div>
            <div className="bg-[#2D74FF] rounded-[32px] col-span-1 h-[150px] w-[420px] pr-4 pt-4 bg-[url('/assests/images/GoldenSecurity.png')] bg-no-repeat bg-left-bottom">
              <div className="bg-white p-2 rounded-2xl w-fit mr-2">
                <Image
                  alt="DollarSign"
                  height={100}
                  width={24}
                  src="/assests/Icons/Sheild.svg"
                />
              </div>
              <h3 className="w-1/2 text-xl mt-2">
                معامله آسان و راحت با بهترین پلتفرم های معامله
              </h3>
            </div>
            <div className="bg-[#22F38F] rounded-[32px] flex flex-col text-black justify-end row-span-full w-[213px] pr-4 pt-4 bg-[url('/assests/images/HeadPhone.png')] bg-no-repeat ThirdBG">
              <div className="bg-[#363636] p-2 rounded-2xl w-fit h-fit">
                <Image
                  alt="DollarSign"
                  height={100}
                  width={24}
                  src="/assests/Icons/TwentyFourHour.svg"
                />
              </div>
              <div className="w-11/12 text-xl mt-2 mb-2">
                <h3 className="font-semibold">پشتیبانی</h3>
                <h4> 24 ساعته و 7 روز هفته</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Home;