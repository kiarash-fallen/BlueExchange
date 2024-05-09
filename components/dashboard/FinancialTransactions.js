import React from 'react'
import HeaderCart from '../ui/HeaderCart'
import MoneyCheckEdit from '../ui/icons/MoneyCheckEdit';
import CarouselContainer from '../ui/CarouselContainer';
import Transaction from './Transaction';
const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]


function FinancialTransactions() {
    return (
        <div className="box-6 flex flex-col justify-between">
            <HeaderCart title="تراکنشات مالی" icon={<MoneyCheckEdit />} href="/" />
            <div className=''>
                <CarouselContainer>
                    {slides.map((index) => (
                        <div className="embla__slide " key={index.id}>
                            <div className="embla__slide__number ml-4">
                                <Transaction type="increase" />
                            </div>
                        </div>
                    ))}
                </CarouselContainer>
            </div>

        </div>
    )
}

export default FinancialTransactions;