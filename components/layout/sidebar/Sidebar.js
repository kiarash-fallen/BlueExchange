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
                name: "???",
                url: "/???",
                icon: <Apps />,
                hasArrow: false,
            },
        ]
    },
    {
        name: "کیف پول",
        url: "/dashboard/wallet",
        icon: <User />,
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
        icon: <Apps />,
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
        name: "پیام های من",
        url: "/dashboard/messages",
        icon: <Comment />,
        hasArrow: false,
    },
    {
        name: "تاریخچه تراکنشات",
        url: "/dashboard/messages",
        icon: <MoneyCheckEdit />,
        hasArrow: false,
    },
]

function Sidebar() {
    return (
        <aside className="bg-[#262626] shadow-sidebar w-[192px] h-screen p-4">
            <div className="bg-[#393939] h-12 rounded-2xl">
            </div>
            <div className="border-b border-2 my-4 border-[#3C3C3C]"></div>
            {items.map(item => <SidebarItem key={item.id} item={item} />)}

        </aside>
    )
}

export default Sidebar