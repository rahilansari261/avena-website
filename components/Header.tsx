import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="h-[70%] relative">
      <Image
        alt="banner"
        src="/Blue and Orange Modern Hotel Banner.webp"
        height={900}
        width={1600}
        className="w-full h-full object-cover "
      />
      <div className="absolute top-0 left-0 right-0 h-full bg-black z-10 opacity-25"></div>
      <div className="container mx-auto fixed top-0 left-0 right-0 flex justify-between items-center w-full z-20 text-white pt-6 ">
        <div className="font-bold text-white text-4xl cursor-pointer">
          AVENA
        </div>
        <div className="flex items-center gap-10 ">
          <div className="text-[#FDE400] cursor-pointer">Home</div>
          <div className="cursor-pointer">Booking</div>
          <div className="cursor-pointer">Service</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">Sign In</div>
          <div className="border border-wine px-4 py-2 text-wine bg-white rounded-full font-bold cursor-pointer">
            List your property
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 h-full -translate-x-1/2   text-white text-8xl z-30 font-abril ">
        More Than Just a Stay
      </div>
      <div className="absolute z-30 bottom-0 translate-y-1/2 left-0 right-0 container mx-auto flex justify-between items-end bg-white shadow-2xl rounded-3xl py-10 px-10 ">
        <div className="flex flex-col items-start gap-4">
          <div className="font-abhaya text-[#828282] ">Destination</div>
          <input
            type="text"
            className="w-full p-2 font-abhaya rounded-md bg-[#F8F8FA] outline-none text-[#262626] "
            value={"Bali, Indonesia"}
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="font-abhaya text-[#828282] ">Check In</div>
          <input
            type="date"
            className="w-full p-2 font-abhaya rounded-md bg-[#F8F8FA] outline-none text-[#262626] "
            value={"2022-03-12"}
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="font-abhaya text-[#828282] ">Check Out</div>
          <input
            type="date"
            className="w-full p-2 font-abhaya rounded-md bg-[#F8F8FA] outline-none text-[#262626] "
            value={"2022-03-12"}
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="font-abhaya text-[#828282] ">Room & Guest</div>
          <input
            type="text"
            className="w-full p-2 font-abhaya rounded-md bg-[#F8F8FA] outline-none text-[#262626] "
            value={"1 Room, 2 Guests"}
          />
        </div>
        <div className="bg-wine text-white p-4 rounded-3xl font-abhaya text-[18px]">
          Search
        </div>
      </div>
    </div>
  );
};

export default Header;
