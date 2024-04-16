"use client";
import Image from "next/image";
import SmallButton from "../../components/buttons/SmallButton";
import EmblaCarousel from "../../components/Embla/EmblaCarousel";
import TopServices from "../../components/layout/TopServices";
import DigitalCurrencies from "../../components/layout/DigitalCurrencies";

export default function Home() {
  
  return (
    <div className="">
      {/* Top Services */}
      <TopServices />
      <DigitalCurrencies/>
    </div>
  );
}

// export default Home;