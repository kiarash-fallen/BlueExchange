"use client";
import TradingView from "../../../../../components/charts/TradingView";
import CurrencyCartContainer from "../../../../../components/home/CurrencyCartContainer";
import Header from "../../../../../components/home/Header";
import { useForm } from "react-hook-form";
import Navbar from "../../../../../components/layout/Navbar";
import PanelTabs from "../../../../../components/panel/PanelTabs";
import PanelTabs2 from "../../../../../components/panel/PanelTabs2";
import ArrowDown from "../../../../../components/ui/icons/ArrowDown";
// import "";
import Image from "next/image";
import PanelTabs3 from "../../../../../components/panel/PanelTabs3";
import Wallet from "../../../../../public/assests/Icons/Wallet";
import DollarSign from "../../../../../public/assests/Icons/DollarSign";
import Limit from "../../../../../components/tradePage/Limit";
import LimitAndLoss from "../../../../../components/tradePage/LimitAndLoss";
import Force from "../../../../../components/tradePage/Force";
import OCO from "../../../../../components/tradePage/OCO";
import YourOrder from "../../../../../components/modal/YourOrder";

function Page(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const TableData = [
        {
            date: "2024-12-12",
            DealType: "Deal",
            MarketType: "Market",
            Type: "Trade",
            UnitPrice: "UnitPrice",
            Mount: "Mount",
            Activator: "Activitor",
            TotalPrice: "Total Price",
            DonePercentage: "Done Percentage",
        },
        {
            date: "2024-12-12",
            DealType: "Deal",
            MarketType: "Market",
            Type: "Trade",
            UnitPrice: "UnitPrice",
            Mount: "Mount",
            Activator: "Activitor",
            TotalPrice: "Total Price",
            DonePercentage: "Done Percentage",
        },
        {
            date: "2024-12-12",
            DealType: "Deal",
            MarketType: "Market",
            Type: "Trade",
            UnitPrice: "UnitPrice",
            Mount: "Mount",
            Activator: "Activitor",
            TotalPrice: "Total Price",
            DonePercentage: "Done Percentage",
        },
        {
            date: "2024-12-12",
            DealType: "Deal",
            MarketType: "Market",
            Type: "Trade",
            UnitPrice: "UnitPrice",
            Mount: "Mount",
            Activator: "Activitor",
            TotalPrice: "Total Price",
            DonePercentage: "Done Percentage",
        },
        {
            date: "2024-12-12",
            DealType: "Deal",
            MarketType: "Market",
            Type: "Trade",
            UnitPrice: "UnitPrice",
            Mount: "Mount",
            Activator: "Activitor",
            TotalPrice: "Total Price",
            DonePercentage: "Done Percentage",
        },
    ];

    return (
        <div className="mt-4">
            <div className="flex justify-between text-white">
                <div className="w-[31%] mr-8">
                    <div className="bg-[#252525] rounded-2xl p-3">
                        <div className="flex bg-[#2D74FF] rounded-[20px] justify-between">
                            <h6 className="my-[6px] mr-3">حجم خرید ( 25% )</h6>
                            <h6 className="py-[6px] pl-3 bg-[#FF6767] h-full rounded-[20px] w-1/2 text-left">
                                حجم فروش ( 75% )
                            </h6>
                        </div>
                        <div className="mt-4 p-1 flex rounded-xl">
                            <PanelTabs
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
                                { name: "محدود ", content: <Limit /> },
                                { name: "فوری", content: <Force /> },
                                { name: "با حد و ضرر", content: <LimitAndLoss /> },
                                { name: "OCO", content: <OCO /> },
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
                        <YourOrder />
                    </div>
                </div>
                <div className="w-[63%] ml-8 ">
                    <div className="p-3 bg-[#252525] rounded-[28px]">
                        <div className="bg-[#323232] p-1.5 rounded-xl flex">
                            <Image
                                src="/assests/images/ETH.png"
                                width={40}
                                height={100}
                                alt="ETH"
                            />
                            <div className="text-sm">
                                <h6>اتریوم</h6>
                                <h6 className="text-[#CCCCCC]">(ETH/IRR)</h6>
                            </div>
                            <ArrowDown className="my-auto mr-4" />
                            <div className="ms-auto text-sm flex">
                                <div className="">
                                    <h6 className="text-[#CCCCCC] text-center">پایین ترین</h6>
                                    <h6>192.352.323</h6>
                                </div>
                                <div className="mr-6">
                                    <h6 className="text-[#CCCCCC] text-center">بالا ترین</h6>
                                    <h6>192.352.323</h6>
                                </div>
                                <div className="mr-6">
                                    <h6 className="text-[#CCCCCC] text-center">
                                        حجم معاملاتی 24 ساعت
                                    </h6>
                                    <h6 className="text-center">192.352.323</h6>
                                </div>
                                <div className="h-full w-0.5 bg-[#AAAAAA] mx-4"></div>
                                <h4 className="text-base my-auto text-[#CCCCCC]">
                                    بازار بیت پین
                                </h4>
                                <button className="mr-4 bg-[#22F38F] text-black px-3 rounded-[10px]">
                                    بازار جهانی
                                </button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <TradingView {...props}></TradingView>
                        </div>
                    </div>
                    <div className="mt-4 bg-[#252525] p-3 rounded-xl">
                        <PanelTabs
                            widthFull={true}
                            childWidth="w-1/2"
                            list={[{ name: "معاملات" }, { name: "سفارشات باز" }]}
                        />
                        <table className="w-full">
                            <thead className="border-b-2 border-b-[#484848] pb-4">
                                <tr>
                                    <th>زمان</th>
                                    <th>نوع معامله</th>
                                    <th>نوع بازار</th>
                                    <th>نوع</th>
                                    <th>مقدار</th>
                                    <th>قیمت واحد</th>
                                    <th>فعال ساز</th>
                                    <th>قیمت کل</th>
                                    <th>درصد انجام شده</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TableData.map((item, index) => (
                                    <tr key={index} className="text-center h-12 border-b-2 border-b-[#484848]">
                                        <td>{item.date}</td>
                                        <td>{item.DealType}</td>
                                        <td>{item.MarketType}</td>
                                        <td>{item.Type}</td>
                                        <td>{item.Mount}</td>
                                        <td>{item.UnitPrice}</td>
                                        <td>{item.Activator}</td>
                                        <td>{item.TotalPrice}</td>
                                        <td>{item.DonePercentage}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {TableData === null ? (
                            <Image
                                src="/assests/Icons/EmptyTable.svg"
                                width={158}
                                height={100}
                                alt="EmptyTable"
                                className="mx-auto my-14"
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
        //
    );
}

export default Page;
