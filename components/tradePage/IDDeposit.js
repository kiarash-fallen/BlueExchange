import React from "react";

const IDDeposit = () => {
  return (
    <div>
      <span className="text-xs text-[#CCCCCC]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم اولید سادگی.
      </span>
      <div className="relative w-[100%] mt-8">
        <input
          id="email"
          type="email"
          className="peer w-full rounded-2xl bg-[#252525] border border-[#AAAAAA] focus:border-b-2 focus:border-x-0 focus:border-t-0 focus:border-b-[#22F38F] px-3 py-4 outline-none placeholder:focus:text-white placeholder:text-[#AAAAAA]"
        />
        <label
          htmlFor="email"
          className="absolute -top-3 right-3 text-[#AAAAAA] px-1 bg-[#252525] peer-focus:text-[#22F38F]"
        >
          <span>شماره شبا :</span>
          {/* {errors.password && <span className="text-red-700">*</span>} */}
        </label>
        <span className="w-0 h-0 blur-[10px] rounded-xl mx-auto left-1/2 -translate-x-1/2 bottom-2 absolute -mb-2 peer-focus:h-1.5 peer-focus:duration-300 peer-focus:w-2/3 bg-[#22F38F]"></span>
      </div>
    </div>
  );
};

export default IDDeposit;
