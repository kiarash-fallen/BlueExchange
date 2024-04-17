import React from 'react'

const BEX = ({green}) => {
  return (
    <div className={`bg-[#323232] text-white w-fit border-b ${green ? "border-[#22F38F]" : "border-[#2D74FF]"}  rounded-[10px] p-2`}>
      BEX
      <div className={`w-2/3 h-2 blur-md ${green ? "bg-[#22f38f]" : "bg-[#2D74FF]"} rounded-xl mx-auto -mb-2`}></div>
    </div>
  );
}

export default BEX
