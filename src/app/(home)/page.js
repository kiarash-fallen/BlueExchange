import TopServices from "../../../components/home/TopServices";
import DigitalCurrencies from "../../../components/home/DigitalCurrencies";
import Info from "../../../components/home/Info";
import Header from "../../../components/home/Header";
import AboutBlueExchange from "../../../components/home/AboutBlueExchange";
import MostProfitableDigitalCurrencies from "../../../components/home/MostProfitableDigitalCurrencies";
import PerfectMoney from "../../../components/home/PerfectMoney";
import PeiceOfCake from "../../../components/home/PeiceOfCake";
import CurrentPrice from "../../../components/home/CurrentPrice";
import UserConsentContainer from "../../../components/home/UserConsentContainer";
import Blogs from "../../../components/home/Blogs";
import HandlyMarket from "../../../components/home/HandlyMarket";
import Checkbox from "../../../components/checkbox/Checkbox";

export default function Home() {
  // i will fix the padding 
  return (
    <div className="">
      {/* header */}
      <Header />
      <Info />
      <TopServices />
      <DigitalCurrencies />
      <MostProfitableDigitalCurrencies />
      <PeiceOfCake />
      <AboutBlueExchange />
      <PerfectMoney />
      <CurrentPrice />
      <UserConsentContainer />
      <Blogs />
      <HandlyMarket />
    </div>
  );
}
