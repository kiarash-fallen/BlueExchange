import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Binance.svg' alt='Binance'/>
                <h6 className='mr-3 font-normal'>بایننس کوین36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/ShibaIno.svg' alt='Shiba Ino'/>
                <h6 className='mr-3 font-normal'>شیبااینو36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Teter.svg' alt='Teter'/>
                <h6 className='mr-3 font-normal'>تتر36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Estaller.svg' alt='Estaller'/>
                <h6 className='mr-3 font-normal'>استالر36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Phantom.svg' alt='Phantom'/>
                <h6 className='mr-3 font-normal'>فانتوم36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Phantom.svg' alt='Phantom'/>
                <h6 className='mr-3 font-normal'>فانتوم36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__number text-white">
                <Image width={24} height={100} src='/assests/Icons/Phantom.svg' alt='Phantom'/>
                <h6 className='mr-3 font-normal'>فانتوم36.555</h6>
                <h6 className='font-normal text-red-500'>(-23%)</h6>
                <div className='h-5 w-[1px] mx-3 bg-[#ffff]'></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
