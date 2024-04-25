import React from "react";
import ArrowDown from "../../../components/ui/icons/ArrowDown";
import BEX from "../../../components/layout/BEX";
import Button from "../../../components/buttons/Button";
import AddPerson from "../../../components/ui/icons/AddPerson";
import Person from "../../../components/ui/icons/Person";
import Image from "next/image";
import SignIn from "../../../components/forms/SignIn";

const Login = () => {
  return (
    <div className="text-white">
      <div className="flex items-center">
        <h6 className="text-[#AAAAAA]">خانه</h6>
        <ArrowDown className="!stroke-[#AAAAAA] rotate-90 mr-3" />
        <h6 className="mr-3">ورود حساب کاربری</h6>
      </div>
      <div className="border flex justify-between border-[#373737] rounded-[52px] p-8 bg-[#323232] bg-opacity-[36%] mb-[156px]">
        <div className="w-[38%]">
          <div className="flex items-center">
            <BEX />
            <h6 className="mr-3">خوش برگشتی</h6>
          </div>
          <div className="flex mt-4">
            <h1 className="text-3xl">به خانواده بلواکسچینج،</h1>
            <h1 className="text-3xl font-semibold">خوش آمدید</h1>
          </div>
          <p className="text-[#AAAAAA] mt-6">
            با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه
            هاتون خبر بگیرید !
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-8 mt-9">
            <Button
              color="bg-[#2D74FF]"
              hover="hover:border-[#2D74FF]"
              hasRightIcon={true}
              radius="rounded-[16px]"
              icon={
                <Person className="group-hover:fill-white fill-[#AAAAAA] hover-animation" />
              }
            >
              ورود به حساب کاربری
            </Button>
            <Button
              color="bg-[#2D74FF]"
              hover="hover:border-[#2D74FF]"
              hasRightIcon={true}
              radius="rounded-[16px]"
              icon={
                <AddPerson className="group-hover:fill-white fill-[#AAAAAA] hover-animation" />
              }
            >
              ورود به حساب کاربری
            </Button>
            <Button
              color="bg-[#2D74FF]"
              hover="hover:border-[#2D74FF]"
              hasRightIcon={true}
              radius="rounded-[16px]"
              icon={
                <Image
                  src="/assests/images/Google.png"
                  alt="person"
                  width={16}
                  height={100}
                />
              }
            >
              ورود به حساب کاربری
            </Button>
            <Button
              color="bg-[#2D74FF]"
              hover="hover:border-[#2D74FF]"
              hasRightIcon={true}
              radius="rounded-[16px]"
              icon={
                <Image
                  src="/assests/images/Apple.png"
                  alt="person"
                  width={16}
                  height={100}
                />
              }
            >
              ورود به حساب کاربری
            </Button>
          </div>
          <div className="flex justify-between mt-10 items-center">
            <div className="LineGradient h-0.5 w-[40%]"></div>
            <span className="">یا میتونید</span>
            <div className="LineGradient h-0.5 w-[40%] rotate-180"></div>
          </div>
          <div className="mt-12">
            <SignIn />
          </div>
        </div>
        <div className='w-[58%] bg-[#323232] bg-opacity-[36%] border border-[#373737] rounded-[52px]'></div>
      </div>
    </div>
  );
};

export default Login;
