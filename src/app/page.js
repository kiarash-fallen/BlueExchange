"use client";
import Image from "next/image";
import TopServices from "../../components/home/TopServices";
import DigitalCurrencies from "../../components/home/DigitalCurrencies";
import Button from "../../components/buttons/Button";
import Info from "../../components/home/Info";
import Header from "../../components/home/Header";
import BEX from "../../components/layout/BEX";
import AboutBlueExchange from "../../components/home/AboutBlueExchange";

export default function Home() {
  
  return (
    <div className="">
      {/* header */}
      <Header />
      <Info />
      <TopServices />
      <DigitalCurrencies />
      <AboutBlueExchange />
      <div className="text-white mt-48 w-11/12 m-auto bg-[url('/assests/images/EasyTrade.png')] bg-no-repeat bg-left">
        <div className="flex">
          <BEX green={false} />
          <h6 className="my-auto mr-3">پرفکت مالی</h6>
        </div>
        <div className="flex text-3xl mt-6">
          <h1>خرید و فروش آسان</h1>
          <h1 className="font-semibold">پرفکت مالی در لحظه</h1>
        </div>
        <div>
          <p className="w-[45%] mt-6 leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است ...لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
            و متون بلکه روزنام...
          </p>
          <div className="flex mt-10">
            <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
              خرید پرفکت مانی
            </Button>
            <div className="mr-6">
              <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
                معامله تو شروع کن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Home;