"use client";
import React from 'react'
import EmblaCarousel from "../Embla/EmblaCarousel";
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react';

const OPTIONS = {
    dragFree: true,
    loop: false,
    align: "start",
    direction: "rtl",
};
const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

function AdsContaimer() {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    console.log(scrollSnaps)
    console.log(selectedIndex)

    return (
        <div className="my-4 w-full">
            <section className="embla w-full">
                <div className="embla__viewport w-full" ref={emblaRef}>
                    <div className="embla__container w-full">
                        {slides.map((index) => (
                            <div className="embla__slide w-[99%] h-[225px] mx-2" key={index.id}>
                                <div className="embla__slide__number min-w-0 box-4 w-full h-full">
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

export default AdsContaimer;