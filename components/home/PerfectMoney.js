import React from 'react'
import Button from '../buttons/Button'
import BEX from '../layout/BEX'

const PerfectMoney = () => {
  return (
    <div className="text-white mt-48 w-11/12 m-auto bg-[url('/assests/images/EasyTrade.png')] bg-no-repeat bg-left">
        <div className="flex">
          <BEX green={false} />
          <h6 className="my-auto mr-3">پرفکت مانی</h6>
        </div>
        <div className="flex text-3xl mt-6">
          <h1>خرید و فروش آسان</h1>
          <h1 className="font-semibold">پرفکت مالی در لحظه</h1>
        </div>
        <div>
          <p className="w-[45%] mt-6 leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است ...لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
            و متون بلکه روزنام...
          </p>
          <div className="flex mt-10">
            <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
              خرید پرفکت مانی
            </Button>
            <div className="mr-6">
              <Button color="bg-[#2D74FF]" hover="hover:border-[#2D74FF]">
                معامله تو شروع کن
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PerfectMoney
