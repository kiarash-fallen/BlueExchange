"use client";
import React from 'react'
import CurrencyCart from './CurrencyCart';
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react';

const OPTIONS = {
    dragFree: true,
    loop: false,
    align: "start",
    direction: "rtl",
};
const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

function CurrencyCartContainer() {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    console.log(scrollSnaps)
    console.log(selectedIndex)

    return (
        <div className="">
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <div className="embla__slide" key={index.id}>
                                <div className="embla__slide__number ml-4">
                                    <CurrencyCart />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="embla__dots  ">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={`embla__dot bg-[#AAAAAA] size-2 rounded-full ml-2 ${index === selectedIndex ? "!bg-[#2D74FF] !w-[24px]" : ""}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default CurrencyCartContainer;