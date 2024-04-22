import React from 'react'
import BEX from '../layout/BEX'
import Bazaar from '../../public/assests/images/Bazaar.png';
import GooglePlay from '../../public/assests/images/GooglePlay.png';
import AppStore from '../../public/assests/images/AppStore.png';
import Button from '../buttons/Button';
import Image from 'next/image';

const HandlyMarket = () => {
  return (
    <div className="flex flex-col mt-52 items-center text-white">
      <div className="flex items-center">
        <BEX />
        <h6 className="mr-3">بازار تو دستته !</h6>
      </div>
      <div className="flex text-[32px] mt-6">
        <h1 className="font-semibold">دنیای بازار مالی</h1>
        <h1>در دستای تو</h1>
      </div>
      <p className="mt-6 text-[16px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون..
      </p>
      <div className="flex mt-12">
        <div className="ml-6">
          <Button
            type="button"
            hasRightIcon={true}
            icon={<Image src={Bazaar} width={28} height={100} alt="Bazaar" />}
            color="bg-[#22F38F]"
            hover="hover:border-[#22F38F]"
          >
            <span className="text-white">دانلود از کافه بازار</span>
          </Button>
        </div>
        <div className="ml-6">
          <Button
            type="button"
            hasRightIcon={true}
            icon={
              <Image src={GooglePlay} width={28} height={100} alt="Bazaar" />
            }
            color="bg-[#22F38F]"
            hover="hover:border-[#22F38F]"
          >
            <span className="text-white">دانلود از کافه بازار</span>
          </Button>
        </div>
        <div className="ml-6">
          <Button
            type="button"
            hasRightIcon={true}
            icon={<Image src={AppStore} width={28} height={100} alt="Bazaar" />}
            color="bg-[#22F38F]"
            hover="hover:border-[#22F38F]"
          >
            <span className="text-white">دانلود از کافه بازار</span>
          </Button>
        </div>
      </div>
      <Image src='/assests/images/FinatailMarket.png' height={100} width={1000} alt='FinatailMarket' className='mt-20'/>
    </div>
  );
}

export default HandlyMarket
