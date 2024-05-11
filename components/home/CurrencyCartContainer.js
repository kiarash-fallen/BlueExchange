"use client";
import React from 'react'
import CurrencyCart from './CurrencyCart';
import CarouselContainer from '../ui/CarouselContainer';


const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

function CurrencyCartContainer() {


    return (
        <div className="">
            <CarouselContainer>
                {slides.map((index) => (
                    <div className="embla__slide " key={index.id}>
                        <div className="embla__slide__number ml-4">
                            <CurrencyCart />
                        </div>
                    </div>
                ))}
            </CarouselContainer>
        </div>

    )
}

export default CurrencyCartContainer;