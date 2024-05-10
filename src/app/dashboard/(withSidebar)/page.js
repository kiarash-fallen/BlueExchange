import React from 'react';
import AccountCart from '../../../../components/dashboard/AccountCart';
import AuthenticationCart from '../../../../components/dashboard/AuthenticationCart';
import Currency from '../../../../components/dashboard/Currency';
import WalletCart from '../../../../components/dashboard/WalletCart';
import FinancialTransactions from '../../../../components/dashboard/FinancialTransactions';
import BuyAndSellFast from '../../../../components/dashboard/BuyAndSellFast';
import Store from '../../../../components/dashboard/Store';
import BuyAndSellPerfectMoney from '../../../../components/dashboard/BuyAndSellPerfectMoney';
import Messages from '../../../../components/dashboard/Messages';

function Page() {
    return (
        <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
                <AccountCart />
                <AuthenticationCart />
                <Currency />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <WalletCart />
                <FinancialTransactions />
                <BuyAndSellFast />
                <Store height="h-[400px]" />
                <BuyAndSellPerfectMoney />
                <Messages />
            </div>
        </div>
    );
}

export default Page;