import React from 'react';
import Apps from '../../ui/icons/Apps';
import User from '../../ui/icons/User';
import PiggyBank from '../../ui/icons/PiggyBank';
import SendMoney from '../../ui/icons/SendMoney';
import ReciveMoney from '../../ui/icons/ReciveMoney';
import Money from '../../ui/icons/Money';
import HandHoldingUsd from '../../ui/icons/HandHoldingUsd';
import Circlep from '../../ui/icons/Circlep';
import MoneyBillTransfer from '../../ui/icons/MoneyBillTransfer';
import UserAdd from '../../ui/icons/UserAdd';
import Comment from '../../ui/icons/Comment';
import MoneyCheckEdit from '../../ui/icons/MoneyCheckEdit';
import SidebarItem from './SidebarItem';
import Wallet from '../../ui/icons/Wallet';
import ChartHistogram from '../../ui/icons/ChartHistogram';
import Button from '../../buttons/Button';
import SignOut from '../../ui/icons/SignOut';
import InviteFreinds from './InviteFreinds';
import UserEdit from '../../ui/icons/UserEdit';
import Bank from '../../ui/icons/Bank';
import Bell2 from '../../ui/icons/Bell2';
import Marker from '../../ui/icons/Marker';
import Setting from '../../ui/icons/Setting';

const items = [
    {
        name: "پیشخوان",
        url: "/dashboard",
        icon: <Apps />,
        hasArrow: false,
    },
    {
        name: "حساب کاربری",
        url: "/dasboard/account",
        icon: <User />,
        hasArrow: true,
        subItems: [
            {
                name: "مشخصات کاربری",
                url: "/dashboard/account/profile",
                icon: <UserEdit />,
                hasArrow: false,
            },
            {
                name: "حساب های بانکی",
                url: "/dashboard/account/bank-accounts",
                icon: <Bank />,
                hasArrow: false,
            },
            {
                name: "هشدار قیمت",
                url: "/dashboard/account/price-warning",
                icon: <Bell2 />,
                hasArrow: false,
            },
            {
                name: "مدیریت آدرس",
                url: "/dashboard/account/adress-managment",
                icon: <Marker />,
                hasArrow: false,
            },
            {
                name: "تنظیمات",
                url: "/dashboard/account/setting",
                icon: <Setting />,
                hasArrow: false,
            },
        ]
    },
    {
        name: "کیف پول",
        url: "/dashboard/wallet",
        icon: <Wallet />,
        hasArrow: true,
        subItems: [
            {
                name: "میزان دارایی",
                url: "/dashboard/wallet/property",
                icon: <PiggyBank />,
            },
            {
                name: "واریز",
                url: "/dashboard/wallet/deposit",
                icon: <SendMoney />,
                hasArrow: false,
            },
            {
                name: "برداشت",
                url: "/dashboard/wallet/withdrawal",
                icon: <ReciveMoney />,
                hasArrow: false,
            },
        ]
    },
    {
        name: "بازار",
        url: "/dashboard/market",
        icon: <ChartHistogram />,
        hasArrow: false,
    },
    {
        name: "معامله آسان",
        url: "/dashboard/trade",
        icon: <Money />,
        hasArrow: true,
        subItems: [
            {
                name: "میزان دارایی",
                url: "/dashboard/trade/exchange",
                icon: <PiggyBank />,
            },
            {
                name: "معامله آسان",
                url: "/dashboard/trade/easy-trade",
                icon: <Money />,
                hasArrow: false,
            },
            {
                name: "خرید و فروش آسان",
                url: "/dashboard/trade/buy-and-sell",
                icon: <HandHoldingUsd />,
                hasArrow: false,
            },
        ]
    },
    {
        name: "پرفکت مانی",
        url: "/dashboard/perfect-money",
        icon: <Circlep />,
        hasArrow: false,
    },
    {
        name: "تبدیل سریع",
        url: "/dashboard/fast-exchange",
        icon: <MoneyBillTransfer />,
        hasArrow: false,
    },
    {
        name: "دعوت دوستان",
        url: "/dashboard/invite-friends",
        icon: <UserAdd />,
        hasArrow: false,
    },
    {
        name: "پیام های من",
        url: "/dashboard/messages",
        icon: <Comment />,
        hasArrow: false,
    },
    {
        name: "تاریخچه تراکنشات",
        url: "/dashboard/transaction-history",
        icon: <MoneyCheckEdit />,
        hasArrow: false,
    },
]

function Sidebar() {
    return (
        <aside dir='ltr' className="bg-[#262626] shadow-sidebar w-[14%] p-4 h-screen overflow-y-auto">
            <div dir='rtl'>
                <div className="bg-[#393939] h-12 rounded-2xl">
                </div>
                <div className="border-y-b border-y-2 py-4 mt-4 border-[#3C3C3C]">
                    {items.map(item => <SidebarItem key={item.id} item={item} />)}
                </div>
                <div className="my-4">
                    <Button
                        isFull={true}
                        iconCenter={true}
                        href="/"
                        hasRightIcon={true}
                        icon={<SignOut />}
                        color="bg-[#FF5C5C]"
                        hover="hover:border-[#FF5C5C]">
                        خروج
                    </Button>
                </div>
                <InviteFreinds />
            </div>

        </aside>
    )
}

export default Sidebar