import React from 'react'
import BEX from '../layout/BEX';
import UserConsent from './UserConsent';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../Embla/EmblaCarouselDotButton'
import EmblaCarousel from '../Embla/EmblaCarousel';

const OPTIONS = {
    dragFree: false,
  loop: true,
  align: "center",
  direction: "rtl",

};
const slides = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

const UserConsentContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="mt-48 text-white">
      <div className="flex justify-center">
        <BEX />
        <h6 className="my-auto mr-3">رضایت کاربران</h6>
      </div>
      <div className="flex justify-center mt-6">
        <h1 className="text-3xl font-semibold">رضایت کاربران</h1>
        <h1 className="text-3xl ">بهترین بیانگر اعتبار ماست</h1>
      </div>
      <div>
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index.id}>
                  <div className="embla__slide__number ml-12 ">
                    <UserConsent indexId={index.id} selectedId={selectedIndex + 1} isSelected={index.id - 1 === selectedIndex} />
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
                    className={`embla__dot bg-[#AAAAAA] size-2 rounded-full ml-2 ${
                      index === selectedIndex ? "!bg-[#2D74FF] !w-[24px]" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserConsentContainer
