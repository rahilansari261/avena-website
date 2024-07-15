import Image from "next/image";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import AccountBalance from "./SVG/AccountBalance";
import Settings from "./SVG/Settings";
import AdUnits from "./SVG/AdUnits";
import Paid from "./SVG/Paid";

const HomePage = () => {
  const hotels = [
    {
      id: 1,
      name: "Grand Aston Hotel",
      price: 79,
    },
    {
      id: 2,
      name: "Grand Aston Hotel",
      price: 79,
    },
    {
      id: 3,
      name: "Grand Aston Hotel",
      price: 79,
    },
    {
      id: 4,
      name: "Grand Aston Hotel",
      price: 79,
    },
    // {
    //   id: 5,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
    // {
    //   id: 6,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
    // {
    //   id: 7,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
    // {
    //   id: 8,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
    // {
    //   id: 9,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
    // {
    //   id: 10,
    //   name: "Grand Aston Hotel",
    //   price: 79,
    // },
  ];
  return (
    <div className="h-full">
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
      <div className="container mx-auto">
        <div className=" mt-28 mb-8 font-barlow text-2xl">
          TRENDING THIS SEASON
        </div>
        <div className="flex justify-start items-center gap-6">
          {["ALL", "Delhi", "Mumbai", "Jaipur", "Hyderabad", "Kolkata"].map(
            (item) => (
              <div
                key={item}
                className={`font-barlow text-lg border border-black border-opacity-30 rounded-md px-2 text-[#6F6F6F] cursor-pointer ${
                  item === "ALL" ? " text-wine border-wine " : ""
                } `}
              >
                {item}
              </div>
            )
          )}
        </div>

        <div className="flex justify-start items-center gap-6 mt-6 flex-wrap">
          {hotels.map((item) => (
            <div
              key={item.id}
              className="rounded-md overflow-hidden shadow-md bg-white border border-black border-opacity-50 w-80  "
            >
              <div className="w-full h-40 relative p-[2px]">
                <Image
                  src="/Blue and Orange Modern Hotel Banner.webp"
                  width={250}
                  height={185}
                  alt="hotel"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="my-4 px-2 font-abhaya text-[22px] font-bold">
                {item.name}
              </div>
              <div className="my-8 px-2 font-abhaya text-[#828282] ">
                starts from ${item.price}/night
              </div>
              <div className="flex justify-between items-center mb-4 px-2">
                <button className="bg-wine text-white font-abhaya font-bold text-xl  text-[32px] px-8 py-4 rounded-3xl   ">
                  Book Now
                </button>

                <TfiArrowCircleRight className="text-wine text-5xl" />
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          <Image
            src="/Book Now 1.png"
            width={250}
            height={185}
            alt="hotel"
            className="rounded-md w-full h-full object-cover"
          />
        </div> */}

        <div className="w-full h-full flex gap-20 my-14">
          <div className="w-1/2 relative">
            <Image
              src={"/Blue and Orange Modern Hotel Banner.webp"}
              width={250}
              height={600}
              alt="hotel"
              className="rounded-md w-full h-full object-cover absolute left-0 right-0 top-0 bottom-0"
            />
            <Image
              src={"/Rectangle 4400.png"}
              width={450}
              height={400}
              alt="hotel"
              className="rounded-md object-cover absolute bottom-0 -right-20 z-10"
            />
            {/* <Image
              src={"/Blue and Orange Modern Hotel Banner.webp"}
              width={250}
              height={185}
              alt="hotel"
              className="rounded-md w-full h-full object-cover absolute"
            />
            <Image
              src={"/Blue and Orange Modern Hotel Banner.webp"}
              width={250}
              height={185}
              alt="hotel"
              className="rounded-md w-full h-full object-cover absolute"
            /> */}
          </div>
          <div className="w-1/2 flex flex-col justify-between gap-8">
            <div className="font-inter text-wine text-5xl font-bold ">
              Why You Should Choose Us
            </div>
            <div className="flex gap-8">
              <div className="bg-[#D9EAFF] p-4 rounded-lg ">
                <AdUnits />
              </div>
              <div className="text-2xl">
                We have many choices of comfortable accommodation
              </div>
            </div>

            <div className="flex gap-8">
              <div className="bg-[#D9EAFF] p-4 rounded-lg ">
                <Settings />
              </div>
              <div className="text-2xl">
                We are committed to providing the best service
              </div>
            </div>

            <div className="flex gap-8">
              <div className="bg-[#D9EAFF] p-4 rounded-lg ">
                <Paid />
              </div>
              <div className="text-2xl">
                We provide the best prices to our customers
              </div>
            </div>

            <div className="flex gap-8">
              <div className="bg-[#D9EAFF] p-4 rounded-lg ">
                <AccountBalance />
              </div>
              <div className="text-2xl">
                We provide a variety of safe and easy payment options
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
