"use client"
import TradingView from '../../../../components/charts/TradingView';
import CurrencyCartContainer from '../../../../components/home/CurrencyCartContainer';
import Header from '../../../../components/home/Header';
import { useForm } from 'react-hook-form';
import Navbar from '../../../../components/layout/Navbar';
import PanelTabs from '../../../../components/panel/PanelTabs';
import PanelTabs2 from '../../../../components/panel/PanelTabs2';
import ArrowDown from '../../../../components/ui/icons/ArrowDown';
import '../../globals.css'
import Image from 'next/image';
import PanelTabs3 from '../../../../components/panel/PanelTabs3';
import Wallet from '../../../../public/assests/Icons/Wallet';
import DollarSign from '../../../../public/assests/Icons/DollarSign';
import Limit from '../../../../components/tradePage/Limit';
import LimitAndLoss from '../../../../components/tradePage/LimitAndLoss';
import Force from '../../../../components/tradePage/Force';
import OCO from '../../../../components/tradePage/OCO';

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Navbar />
      <div className="flex text-white">
        <div className="w-1/3">
          <div className="bg-[#252525] rounded-2xl p-3">
            <div className="flex bg-[#2D74FF] rounded-[20px] justify-between">
              <h6 className="my-[6px] mr-3">حجم خرید ( 25% )</h6>
              <h6 className="py-[6px] pl-3 bg-[#FF6767] h-full rounded-[20px] w-1/2 text-left">
                حجم فروش ( 75% )
              </h6>
            </div>
            <div className="mt-4 bg-[#565656] p-1 flex rounded-xl">
              <PanelTabs
                bgActive={true}
                widthFull={true}
                childWidth="w-1/2"
                list={[{ name: "معاملات بازار " }, { name: "معاملات اخیر" }]}
              />
            </div>
            <div className="flex justify-between mt-7 border-b-2 border-b-[#484848] pb-2">
              <h6>قیمت واحد ( IRT )</h6>
              <div>قیمت تومان</div>
              <h6>مقدار ( usdt )</h6>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-2 grid-rows-7 w-[47%] gap-y-1">
                <h6>61.000</h6>
                <h6 className="text-left text-[#22F38F]">61.000</h6>
                <h6>56.221</h6>
                <h6 className="text-left text-[#22F38F]">56.221</h6>
                <h6>56.221</h6>
                <h6 className="text-left text-[#22F38F]">56.221.399</h6>
                <h6>61.000</h6>
                <h6 className="text-left text-[#22F38F]">61.000</h6>
                <h6>61.000</h6>
                <h6 className="text-left text-[#22F38F]">61.000</h6>
                <h6>61.000</h6>
                <h6 className="text-left text-[#22F38F]">61.000</h6>
                <h6>61.000</h6>
                <h6 className="text-left text-[#22F38F]">61.000</h6>
              </div>
              <div className="bg-[#484848] h-[191px] w-0.5 mt-2"></div>
              <div className="grid grid-cols-2 grid-rows-7 w-[47%] gap-y-1">
                <h6 className="text-right text-[#FF5C5C]">61.000</h6>
                <h6 className="text-left">61.000</h6>
                <h6 className="text-right text-[#FF5C5C]">56.221</h6>
                <h6 className="text-left">56.221</h6>
                <h6 className="text-right text-[#FF5C5C]">56.221.399</h6>
                <h6 className="text-left">56.221</h6>
                <h6 className="text-right text-[#FF5C5C]">61.000</h6>
                <h6 className="text-left">61.000</h6>
                <h6 className="text-right text-[#FF5C5C]">61.000</h6>
                <h6 className="text-left">61.000</h6>
                <h6 className="text-right text-[#FF5C5C]">61.000</h6>
                <h6 className="text-left">61.000</h6>
                <h6 className="text-right text-[#FF5C5C]">61.000</h6>
                <h6 className="text-left">61.000</h6>
              </div>
            </div>
            <ArrowDown className="m-auto mt-2" />
            <div className="bg-[#323232] border-[#424242] py-2 px-4 border rounded-xl flex justify-between mt-3">
              <h6 className="text-[#AAAAAA]">آخرین قیمت :</h6>
              <div className="text-lg">
                <span> 0.99usdt = </span>
                <span className="text-[#FF5C5C]">51.711 </span>
              </div>
            </div>
          </div>
          <div className="bg-[#252525] rounded-3xl mt-6 px-3">
            <PanelTabs2
              bgActive={true}
              list={[
                { name: "محدود ", content: <Limit/> },
                { name: "فوری", content: <Force/> },
                { name: "با حد و ضرر", content: <LimitAndLoss/> },
                { name: "OCO", content: <OCO/> },
              ]}
            />
            <PanelTabs3
              bgActive={true}
              widthFull={true}
              childWidth="w-[16%]"
              list={[
                { name: "100%" },
                { name: "75%" },
                { name: "50%" },
                { name: "25%" },
                { name: "0%" },
              ]}
            />
            <div className="w-full h-0.5 bg-[#484848]"></div>
            <div className="">
              <div className="flex justify-between mt-4">
                <div className="flex items-center ">
                  <Wallet />
                  <span className="mr-2">موجودی کیف پول :</span>
                </div>
                <span>0 تومان</span>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center ">
                  <DollarSign className="fill-[#22F38F] h-5" />
                  <span className="mr-2 text-[#22F38F]">قیمت کل :</span>
                </div>
                <span className="text-[#22F38F]">54.265.321 تومان</span>
              </div>
            </div>
            <button className="bg-[#2D74FF] py-3 w-full rounded-xl shadow-blue mt-4 mb-3">
              ثبت سفارش خرید
            </button>
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </div>
    // <TradingView {...props}></TradingView>
  );
}

export default Page;