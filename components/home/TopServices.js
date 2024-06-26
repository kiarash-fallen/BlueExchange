import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'
import BEX from '../layout/BEX'

function TopServices() {
  return (
    <div className="border border-[#373737] rounded-[52px] p-9 text-white bg-[#323232] bg-opacity-35 flex">
        <div className="w-1/3">
          <div className="flex items-center">
            <BEX green={true}/>
            <h6 className="text-white pr-3">برترین ویژگی ها</h6>
          </div>
          <h1 className="text-4xl font-semibold mt-6">برترین خدماتی</h1>
          <h2 className="text-2xl mt-8">در بازارهای مالی اراعه می شود</h2>
          <p className="text-[#B0B0B0] mt-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک ا..
          </p>
          <div className="mt-10 flex">
            <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]">معامله تو شروع کن!</Button>
            <div className="mr-6">
              <Button color="bg-[#22F38F]" hover="hover:border-[#22F38F]">ارتباط با ما</Button>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex mr-16">
          <div className="flex flex-col">
            <div className="w-[132.92px] h-[73.92px] border border-[#3E3E3E] rounded-[32px] mt-6 z-30 bg-[#3D3D3D] bg-opacity-[48%] mx-auto">
              <Image
                src="/assests/images/Security.png"
                width={100}
                height={100}
                alt="Security"
                className="-mt-14 m-auto "
              />
            </div>
            <div className="BoxShadow h-[149.96px] w-[186.24px] bg-[#363636] bg-opacity-[48%] rounded-[32px] -mt-10 flex items-center justify-center font-semibold text-[22px] text-center">
              <h6 className="mt-2">بالاترین امنیت برداشت</h6>
            </div>
          </div>
          <div className="flex flex-col mr-7">
            <div className="w-[132.92px] h-[73.92px] border border-[#3E3E3E] rounded-[32px] mt-6 z-30 bg-[#3D3D3D] bg-opacity-[48%] mx-auto">
              <Image
                src="/assests/images/SaleDiscount.png"
                width={105}
                height={105}
                alt="SaleDisCount"
                className="-mt-16 m-auto"
              />
            </div>
            <div className="BoxShadow h-[149.96px] w-[186.24px] bg-[#363636] bg-opacity-[48%] rounded-[32px] -mt-10 flex items-center justify-center font-semibold text-2xl text-center">
              <h6>کارمزد نگهداری رمز ارز</h6>
            </div>
          </div>
          <div className="flex flex-col mr-7">
            <div className="w-[132.92px] h-[73.92px] border border-[#3E3E3E] rounded-[32px] mt-6 z-30 bg-[#3D3D3D] bg-opacity-[48%] mx-auto">
              <Image
                src="/assests/images/Notifications.png"
                width={125}
                height={125}
                alt="Notifications"
                className="-mt-14 m-auto"
              />
            </div>
            <div className="BoxShadow h-[149.96px] w-[186.24px] bg-[#363636] bg-opacity-[48%] rounded-[32px] -mt-10 flex items-center justify-center font-semibold text-2xl text-center">
              <h6>نوتیفیکیشن بازار جهانی</h6>
            </div>
          </div>
          <div className="flex flex-col mr-7">
            <div className="w-[132.92px] h-[73.92px] border border-[#3E3E3E] rounded-[32px] mt-6 z-30 bg-[#3D3D3D] bg-opacity-[48%] mx-auto">
              <Image
                src="/assests/images/PerfectMoney.png"
                height={150}
                alt="PerfectMoney"
                width={100}
                className="-mt-10 m-auto scale-150"
              />
            </div>
            <div className="BoxShadow h-[149.96px] w-[186.24px] bg-[#363636] bg-opacity-[48%] rounded-[32px] -mt-10 flex items-center justify-center font-semibold text-2xl text-center">
              <h6>خرید و فروش پرفکت مانی</h6>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TopServices
