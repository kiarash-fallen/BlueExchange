import React from "react";
import EmblaCarousel from "../Embla/EmblaCarousel";
import Image from "next/image";
import Currencies from "../ui/Currencies";

const OPTIONS = {
  dragFree: true,
  loop: true,
  align: "start",
  direction: "rtl",
};
const DigitalCurrencies = () => {
  return (
    <div className="w-10/12 bg-[#373737] m-auto rounded-b-[52px] py-4 overflow-hidden">
      <EmblaCarousel options={OPTIONS}>
        <Currencies/>
      </EmblaCarousel>
    </div>
  );
};

export default DigitalCurrencies;
