"use client"
import React from 'react';
import EmblaCarousel from "../Embla/EmblaCarousel";
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react';
import BlogCart from './BlogCart';

const OPTIONS = {
    dragFree: true,
    loop: false,
    align: "start",
    direction: "rtl",
};
const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }]

function BlogSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    console.log(scrollSnaps)
    console.log(selectedIndex)
    return (
        <div>
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <div className="" key={index.id}>
                                <div className="ml-4 w-[400px]">
                                    <BlogCart />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-5">
                        <div className="embla__dots">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={`embla__dot bg-[#AAAAAA] size-2 rounded-full ml-2 ${index === selectedIndex ? "!bg-[#22F38F] !w-[24px]" : ""}`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogSlider