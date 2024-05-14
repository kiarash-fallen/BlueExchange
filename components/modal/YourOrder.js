import React, { useState } from "react";
import DollarEdit from "../../public/assests/Icons/DollarEdit";
import Wallet from "../ui/icons/Wallet";
import RaiseWallet from "../ui/icons/RaiseWallet";
import PanelTabs from "../panel/PanelTabs";
import OnlineDeposit from "../tradePage/OnlineDeposit";
import IDDeposit from "../tradePage/IDDeposit";

const YourOrder = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {   
    setOpenModal(true);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <>
      <button
        onClick={() => handleOpenModal(true)}
        className="bg-[#2D74FF] py-3 w-full rounded-xl shadow-blue mt-4 mb-3"
      >
        ثبت سفارش خرید
      </button>
      {openModal && (
        <>
          <div className="absolute z-50 top-1/4 left-1/2 -translate-x-1/2 bg-white rounded-[48px] p-8 flex text-black">
            <div>
              <div className="flex  items-center">
                <DollarEdit />
                <span className="mr-2 font-semibold">سفارش شما</span>
              </div>
              <div className="OrderGradient1 h-0.5 rotate-180 my-2"></div>
              <div className="w-[297px] bg-[#E7E7E7] pr-3 py-2 rounded-xl">
                <span>+</span>
                <span className="mr-1.5">نوع سفارش شما : </span>
                <span className="text-[#2D74FF]">خرید تتر</span>
              </div>
              <div className="w-[297px] pr-3 py-2 rounded-xl mt-4">
                <span>+</span>
                <span className="mr-1.5">نوع و مقدار ارز : </span>
                <span className="text-[#2D74FF]">25.000 تتر</span>
              </div>
              <div className="w-[297px] pr-3 py-2 rounded-xl mt-4 bg-[#E7E7E7] ">
                <span>+</span>
                <span className="mr-1.5">قیمت معامله :</span>
                <span className="text-[#2D74FF]"> 6.000.000 تومان</span>
              </div>
              <div className="w-[297px] pr-3 py-2 rounded-xl mt-4 flex items-center text-sm">
                <Wallet />
                <h6 className="mr-3">اعتبار کیف پول :</h6>
                <h6 className="ms-auto">25.000.000 تومان</h6>
              </div>
              <div className="flex mt-4 justify-between">
                <button className="bg-[#2D74FF] py-3 w-[45%] text-white rounded-xl">
                  ثبت سفارش
                </button>
                <button
                  onClick={() => handleCloseModal(false)}
                  className="bg-[#FF5C5C] py-3 w-[45%] text-white rounded-xl"
                >
                  لغو سفارش
                </button>
              </div>
            </div>
            <div className="h-[232px] w-0.5 OrderGradient2 my-auto mx-12"></div>
            <div>
              <div className="flex items-center">
                <RaiseWallet />
                <h6 className="font-semibold mr-3">افزایش اعتبار کیف پول</h6>
              </div>
              <div className="OrderGradient1 h-0.5 rotate-180 my-2 w-[451px]"></div>
              <div className="bg-[#262626] rounded-[24px] px-4 py-3">
                <PanelTabs
                  widthFull={true}
                  childWidth="w-1/2"
                  list={[
                    { name: "واریز آنلاین", content: <OnlineDeposit /> },
                    { name: "واریز شناسه دار", content: <IDDeposit /> },
                  ]}
                />
                <button className="w-full bg-[#2D74FF] rounded-xl py-3 text-white mt-4">
                  انتقال به درگاه بانکی
                </button>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-[#232323] z-40 bg-opacity-[48%]"
            onClick={() => handleCloseModal(false)}
          ></div>
        </>
      )}
    </>
  );
};

export default YourOrder;
