import Image from 'next/image'
import React from 'react'
import Shib from '../../public/assests/images/Shib.png';
import Binance from '../../public/assests/images/Bnb.png';
import Phantom from '../../public/assests/images/Ftm.png';

const Currencies = () => {
  return (
    <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
            
              <Image
                width={24}
                height={100}
                src={Binance}
                alt="Binance"
              />
              <h6 className="mr-3 font-normal">بایننس کوین36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src={Shib}
                alt="Shiba Ino"
              />
              <h6 className="mr-3 font-normal">شیبااینو36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src="/assests/Icons/Teter.svg"
                alt="Teter"
              />
              <h6 className="mr-3 font-normal">تتر36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src="/assests/Icons/Estaller.svg"
                alt="Estaller"
              />
              <h6 className="mr-3 font-normal">استالر36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src={Phantom}
                alt="Phantom"
              />
              <h6 className="mr-3 font-normal">فانتوم36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src={Phantom}
                alt={Phantom}
              />
              <h6 className="mr-3 font-normal">فانتوم36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number text-white">
              <Image
                width={24}
                height={100}
                src={Phantom}
                alt={Phantom}
              />
              <h6 className="mr-3 font-normal">فانتوم36.555</h6>
              <h6 className="font-normal text-red-500">(-23%)</h6>
              <div className="h-5 w-[1px] mx-3 bg-[#ffff]"></div>
            </div>
          </div>
        </div>
  )
}

export default Currencies
