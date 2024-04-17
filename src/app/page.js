"use client";
import Image from "next/image";
import TopServices from "../../components/home/TopServices";
import DigitalCurrencies from "../../components/home/DigitalCurrencies";
import Button from "../../components/buttons/Button";
import Info from "../../components/home/Info";
import Header from "../../components/home/Header";
import BEX from "../../components/layout/BEX";
import AboutBlueExchange from "../../components/home/AboutBlueExchange";
import MostProfitableDigitalCurrencies from "../../components/home/MostProfitableDigitalCurrencies";
import PerfectMoney from "../../components/home/PerfectMoney";
import CurvedArrow from "../../components/ui/icons/CurvedArrow";

export default function Home() {

  return (
    <div className="">
      {/* header */}

      <div className="px-4">
        <Header />
        <Info />
      </div>

      <TopServices />
      <DigitalCurrencies />
      <div className="px-4">
        <MostProfitableDigitalCurrencies />
      </div>

      <AboutBlueExchange />
      <PerfectMoney />
      <div className="text-white w-11/12 m-auto bg-[#323232] bg-opacity-[36%] rounded-[52px] p-10 border border-[#373737]">
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
                <h4 className="text-white group-hover:text-[#22F38F]">
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
                <h4 className="text-white group-hover:text-[#22F38F]">
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
                <h4 className="text-white group-hover:text-[#22F38F]">
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
  );
}

// export default Home;