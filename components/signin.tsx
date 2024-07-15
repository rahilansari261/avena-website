import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
    <div className="flex items-center justify-between lg:h-full p-4 md:p-10 lg:p-20 ">
      <div className="container mx-auto border flex rounded-3xl h-full ">
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <Image
            className="w-full h-full"
            alt="hotel login page "
            src={"/login.webp"}
            height={400}
            width={400}
          />
          <div className=" absolute top-1/4 left-10 font-playfair text-[64px] font-bold text-white">
            FIND YOUR <br /> PERFECT{" "}
            <span className="text-[#883E3E]">HOTEL</span> <br /> NOW
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8 flex flex-col gap-10 lg:gap-40 py-10  items-center">
          <div className="text-wine text-2xl lg:text-[40px] font-bold text-center ">
            Welcome Back
          </div>
          <div className="flex flex-col justify-center items-center  gap-4 w-full ">
            <input
              type="email"
              placeholder="email"
              className="w-full mt-5 p-2 pl-5 border border-wine rounded-md  outline-none "
            />
            <input
              type="password"
              placeholder="password"
              className="w-full mt-5 p-2 pl-5 border border-wine rounded-md  outline-none "
            />
            <button className="bg-wine text-white font-abhaya font-bold text-xl  text-[32px] px-8 py-4 rounded-full mt-10  ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
