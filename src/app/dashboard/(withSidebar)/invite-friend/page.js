"use client"
import React from "react";
import Code from "../../../../../components/ui/icons/Code";
import Copy from "../../../../../public/assests/Icons/Copy";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { plugins } from "../../../../../postcss.config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InviteFriend = () => {

    const data = {
      labels: ["", "", "", "", "", "", "", "", "", "", ""],
      type: 'line',
      datasets: [
        {
            label:false,
            pointRadius: 0,
          data: [0.1, 0.2, 0.3, 0.8, 0.5, 0.8, 0.4, 0.5, 0.2, 0.4, 0.9, 0.6],
          borderColor: "#22F38F",
        },
      ],
    };
    const options = {
        plugins: {
            legend: {
                display: true
            },
            labels: {
                display: false
            }
        },
        scales : {
            y: {
                min: 0.1,
                max:1,
            },
            x:{
                grid:{
                    display: false,
                }
            }
        }
    }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="w-[70%] bg-[#262626] p-8 rounded-[32px]">
          <h6 className="text-white">
            کسب درآمد میلیونی با دعوت دوستان به بلواکسچنج
          </h6>
          <h6 className="mt-4 text-[#AAAAAA]">
            کد دعوت و یا لینک زیر را برای دوستان خود ارسال کنید و با تایید هویت
            تعداد هرچه بیشتر دوستانتان، مادام‌العمر تا 55درصد پاداش دریافت
            نمایید
          </h6>
          <div className="mt-10 text-[#AAAAAA]">
            <div className="flex">
              <Code />
              <span className="mr-3">کد دعوت</span>
            </div>
            <div className="bg-[#303030] rounded-2xl py-[14px] px-4 mt-4 flex justify-between">
              <h6>کد دعوت</h6>
              <h6 className="text-white">DASDWX</h6>
              <Copy />
            </div>
            <div className="flex mt-8">
              <Code />
              <span className="mr-3">لینک دعوت</span>
            </div>
            <div className="bg-[#303030] rounded-2xl py-[14px] px-4 mt-4 flex justify-between">
              <h6>لینک دعوت</h6>
              <h6 className="text-white">tetherland.com/register?ref=IDNUAT</h6>
              <Copy />
            </div>
          </div>
        </div>
        <div className="bg-[#262626] rounded-[32px] px-6 pt-6 w-[28%] max-h-[410px] overflow-y-scroll">
          <h1 className="text-white text-xl">میزان پاداش دریافتی</h1>
          <div className="flex justify-between bg-[#1C1C1C] text-white p-2 rounded-xl mt-6">
            <h6>دوستان تایید هویت شده</h6>
            <h6>پاداش</h6>
          </div>
          <div className="flex justify-between bg-[#1C1C1C] text-white p-2 rounded-xl mt-6">
            <h6>از 1 تا 3 نفر</h6>
            <h6>%10</h6>
          </div>
          <div className="flex justify-between text-white p-2 rounded-xl mt-2">
            <h6> 4 تا 10 </h6>
            <h6>%15</h6>
          </div>
          <div className="flex justify-between bg-[#1C1C1C] text-white p-2 rounded-xl mt-2">
            <h6> 11 تا 30 </h6>
            <h6>%20</h6>
          </div>
          <div className="flex justify-between text-white p-2 rounded-xl mt-2">
            <h6> 31 تا 100 </h6>
            <h6>%25</h6>
          </div>
          <div className="flex justify-between bg-[#1C1C1C] text-white p-2 rounded-xl mt-2">
            <h6> 101 تا 500 </h6>
            <h6>%30</h6>
          </div>
          <div className="flex justify-between text-white p-2 rounded-xl mt-2">
            <h6> 501 تا 2000 </h6>
            <h6>%35</h6>
          </div>
        </div>
      </div>
      <div className="bg-[#262626] rounded-[40px] mt-8 p-6">
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default InviteFriend;
