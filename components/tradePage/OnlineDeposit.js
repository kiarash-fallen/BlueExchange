import Image from "next/image";
import React from "react";

const OnlineDeposit = () => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="relative w-[48%]">
          <input
            id="email"
            type="email"
            className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="0تومان "
          />
          <label
            htmlFor="email"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
          >
            <span>مبلغ واریزی :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
        </div>
        <div className="relative w-[48%]">
          <input
            id="email"
            type="email"
            className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
          />
          <label
            htmlFor="email"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
          >
            <span>شماره کارت :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
        </div>
      </div>
      <div className="mt-12 flex items-center text-sm text-white">
        <Image
          src="assests/Icons/Info.svg"
          width={12}
          height={100}
          alt="Info"
        />
        <span className=" mr-2">برای واریز بیش از</span>
        <span className="text-[#2D74FF]">
          25 میلیون تومان از روش واریز شناسه{" "}
        </span>
        <span> استفاده کنید</span>
        <span></span>
      </div>
    </>
  );
};

export default OnlineDeposit;
