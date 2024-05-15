"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import UpDownArrow from "../ui/icons/UpDownArrow";
import IconButton from "../buttons/IconButton";
import SecondButton from "../buttons/SecondButton";
import Input from "../input/Input";
import ArrowDown from "../ui/icons/ArrowDown";
import "react-range-slider-input/dist/style.css";
import "./style.css";

function ExchangeCart() {
  const type = "fdf";
  const [value, setValue] = useState([30, 60]);
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
      <div className="w-full mt-3">
        <RangeSlider
          className="single-thumb"
          defaultValue={[0,0]}
          thumbsDisabled={[true, false]}
          rangeSlideDisabled={true}
        />
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
