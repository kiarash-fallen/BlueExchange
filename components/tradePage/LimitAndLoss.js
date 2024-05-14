import Image from "next/image";
import React from "react";
import PanelTabs from "../panel/PanelTabs";

const LimitAndLoss = () => {
  return (
    <>
      <div className="w-full mx-auto h-0.5 bg-[#484848] -mt-[25px]"></div>
      <div className="mt-4 p-1 flex rounded-xl">
        <PanelTabs
          widthFull={true}
          childWidth="w-1/2"
          list={[{ name: "فروش" }, { name: "خرید" }]}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 justify-between mb-5">
        <div className="relative w-[95%] mt-7">
          <input
            id="email"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="0تومان "
          />
          <label
            htmlFor="email"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
          >
            <span>استاپ :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
        </div>
        <div className="relative w-[95%] mt-7 align-bottom  justify-self-end">
          <input
            id="email"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="0تومان "
          />
          <label
            htmlFor="email"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
          >
            <span>لیمیت :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
        </div>
        <div className="relative w-full col-span-2 mt-7">
          <input
            id="email"
            type="email"
            // {...register("email", { required: true })}
            className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA] "
            placeholder="0"
          />
          <label
            htmlFor="email"
            className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
          >
            <span>مقدار :</span>
            {/* {errors.password && <span className="text-red-700">*</span>} */}
          </label>
          <label htmlFor="email" className="absolute left-4 bottom-1/4">
            <div className="flex justify-center items-center">
              <span className="bg-[#2D74FF] rounded-full p-0.5 ml-2 ">
                <Image
                  src="/assests/Icons/eth.svg"
                  height={100}
                  width={20}
                  alt="eth"
                />
              </span>
              <span className="my-auto h-fit pt-1">ETH</span>
            </div>
          </label>
          <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
        </div>
      </div>
    </>
  );
};

export default LimitAndLoss;
