"use client";
import React from 'react'
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react';
import "../Embla/css/embla.css"

const OPTIONS = {
    dragFree: true,
    loop: false,
    align: "start",
    direction: "rtl",
};

function CarouselContainer({ children }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);


    return (
        <div>
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {children}
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

export default CarouselContainer;