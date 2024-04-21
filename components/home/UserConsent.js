import React, { useEffect, useState } from 'react'
import CurvedLine from '../ui/icons/CurvedLine'
import Button from '../buttons/Button'

const UserConsent = ({ isSelected,  indexId, selectedId }) => {

  const [indexNum , setIndexNum ] = useState(0);
    useEffect(() =>{
      if (selectedId === 1) {
        setIndexNum(5);
      }
      else if (selectedId === 5) {
        setIndexNum(1);
      }
      else {
        setIndexNum(10000);
      }
      console.log("selected");
    },[selectedId])
  
  return (
    <div
      className={`w-[679px] py-4 relative m-auto  ${
        indexId === selectedId - 1 ? "-rotate-3" : ""
      } ${indexId === selectedId + 1 ? "rotate-3" : ""} ${
        indexId === indexNum && indexId === 5 ? "-rotate-3" : ""
      } ${indexId === selectedId + 1 ? "rotate-3" : ""} ${
        indexId === indexNum && indexId === 1 ? "rotate-3" : ""
      } ${isSelected ? "!rotate-0" : ""}`}
    >
      <Button
        color="bg-[#22F38F]"
        hover="hover:border-[#22F38F]"
        radius={true}
        borderColor={true}
      >
        <div className="my-2">
          <div className="w-[74px] h-[74px] rounded-full bg-[#363636] mx-auto"></div>
          <span className="text-white mt-3">احسان مهدوی</span>
          <h4 className="text-white group-hover:text-[#22F38F] mt-3 text-[20px] font-semibold">
            بهترین پلتفرم خرید ارز دیجیتال
          </h4>
          <p className="leading-8 text-white mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="absolute bg-[#1E1E1E] rounded-full h-10 w-10"></div>
        <div className="absolute bg-[#1E1E1E] rounded-full h-10 w-10 left-4"></div>
        <div className="absolute z-10 -right-20 translate-y-4">
          <CurvedLine />
        </div>
        <div className="absolute z-10 -left-[90px] rotate-[170deg]">
          <CurvedLine />
        </div>
      </Button>
    </div>
  );
}

export default UserConsent
