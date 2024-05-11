import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import Wallet from '../ui/icons/Wallet';
import CreditCart from './CreditCart';

function WalletCart() {
    return (
        <div className="box-6">
            <HeaderCart title="کیف پول" icon={<Wallet />} href="/" />
            <CreditCart />
        </div>
    )
}

export default WalletCart;