"use client";
import React, { useState } from "react";
import UpDownArrow from "../ui/icons/UpDownArrow";
import IconButton from "../buttons/IconButton";
import SecondButton from "../buttons/SecondButton";
import Input from "../input/Input";
import ArrowDown from "../ui/icons/ArrowDown";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';




function ExchangeCart() {
  const type = "fdf";
  const [value, setValue] = useState(12);
  console.log(value);
  return (
    <div className="[&>*]:mb-4">
      <Input
        placeholder="از  0 تومان"
        textColor={"text-[#AAAAAA]"}
        hasRightIcon={true}
        icon={
          <span className="flex items-center text-[#AAAAAA]">
            <span className="border-r-2  h-4 w-1  pr-2 border-r-[#AAAAAA]"></span>
            <span
              className="size-[30px] text-white rounded-3xl bg-[#26a17b] flex justify-center items-center
                     text-xs"
            >
              {
                <span
                  className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs"
                >
                  ریال
                </span>
              }
            </span>
            <span className="mx-2">{type === "tether" ? "تتر" : "IRR"}</span>
            <ArrowDown />
          </span>
        }
      />
      <div className="w-full mt-3 relative bg-[#303030] h-[12px] rounded-lg">
        <div className="-translate-y-[2px] relative z-10">
          <Slider
            railStyle={{
              background: "transparent",
              height: "12px",
            }}
            handleStyle={{
              boxShadow: "none",
              background: "#22F38F",
              border: "2px solid white",
              width: "12px",
              height: "12px",
              transform: "translate(-12px,5px)",
            }}
            trackStyle={{
              background: "#22F38F",
              boxShadow: "none",
              height: "12px",
            }}
            dotStyle={{
              background: "#22F38F",
              borderColor: "white",
              boxShadow: "none",
              width: "12px",
              height: "12px",
            }}
            min={0}
            max={100}
            defaultValue={12}
            // value={value}
            onChange={(value) => setValue(value)}
          />
        </div>

        <div className="flex justify-between -mt-[10px] -translate-y-[2px] relative z-0 ">
          <span className="h-[10px] w-[0.5px] bg-[#AAAAAA]"></span>
          <span className="h-[10px] w-[0.5px] bg-[#AAAAAA]"></span>
          <span className="h-[10px] w-[0.5px] bg-[#AAAAAA]"></span>
          <span className="h-[10px] w-[0.5px] bg-[#AAAAAA]"></span>
          <span className="h-[10px] w-[0.5px]"></span>
        </div>
        <span style={{ left: `${value <= 5 ? 0 : value - 5}%` }}
          className="absolute top-[20px] shadow-green text-lg z-10 text-[#363636] size-12 rounded-xl bg-[#22F38F] flex justify-center items-center">
          %{value}
        </span>
      </div>
      <div className="flex justify-center">
        <IconButton icon={<UpDownArrow />} filled={true} />
      </div>
      <Input
        placeholder="به  0 تومان"
        textColor={"text-[#AAAAAA]"}
        hasRightIcon={true}
        icon={
          <span className="flex items-center text-[#AAAAAA]">
            <span className="border-r-2  h-4 w-1  pr-2 border-r-[#AAAAAA]"></span>
            <span
              className="size-[30px] text-white rounded-3xl bg-[#26a17b] flex justify-center items-center
                     text-xs"
            >
              {
                <span
                  className="size-[30px] text-white rounded-3xl bg-[#7660FF] flex justify-center items-center
                     text-xs"
                >
                  ریال
                </span>
              }
            </span>
            <span className="mx-2">{type === "tether" ? "تتر" : "IRR"}</span>
            <ArrowDown />
          </span>
        }
      />
      <SecondButton
        full={true}
        shadow="shadow-blue"
        type="button"
        typeBtn="filled"
        color="bg-[#2D74FF]"
        radius="rounded-xl"
      >
        محاسبه تبدیل
      </SecondButton>
    </div>
  );
}

export default ExchangeCart;
