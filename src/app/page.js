"use client";
import Image from "next/image";
import SmallButton from "../../components/buttons/SmallButton";
import EmblaCarousel from "../../components/Embla/EmblaCarousel";
import TopServices from "../../components/layout/TopServices";
import DigitalCurrencies from "../../components/layout/DigitalCurrencies";
import Header from "../../components/home/Header";
import Info from "../../components/home/Info";

export default function Home() {

  return (
    <div className="">
      {/* header */}
      <Header />
      <Info />
      {/* Top Services */}
      <TopServices />
      <DigitalCurrencies />
    </div>
  );
}

// export default Home;