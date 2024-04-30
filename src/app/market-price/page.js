import AdsContaimer from "../../../components/market-price/AdsContaimer";
import PaginationContainer from "../../../components/pagination/PaginationContainer";
import PriceTable from "../../../components/table/PriceTable";
import Breadcrums from "../../../components/ui/Breadcrums";

export default function Home() {
    return (
        <div className="mb-40">
            <Breadcrums breadcrums={[
                { label: "خانه", link: "/" },
                { label: "قیمت بازار" },
            ]} />
            <AdsContaimer />
            <PriceTable />
            <PaginationContainer />
        </div>
    );
}

// export default Home;