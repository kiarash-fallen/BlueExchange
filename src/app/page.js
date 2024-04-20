"use client";
import Image from "next/image";
import TopServices from "../../components/home/TopServices";
import DigitalCurrencies from "../../components/home/DigitalCurrencies";
import Info from "../../components/home/Info";
import Header from "../../components/home/Header";
import AboutBlueExchange from "../../components/home/AboutBlueExchange";
import MostProfitableDigitalCurrencies from "../../components/home/MostProfitableDigitalCurrencies";
import PerfectMoney from "../../components/home/PerfectMoney";
import PeiceOfCake from "../../components/home/PeiceOfCake";

export default function Home() {
  // i will fix the padding 
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
      <div className="px-4">
        <PeiceOfCake />
      </div>

    </div>
  );
}

// export default Home;