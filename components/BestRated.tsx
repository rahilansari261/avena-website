import Image from "next/image";
import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

const BestRated = () => {
  const locations = [
    "All",
    "Delhi",
    "Mumbai",
    "Jaipur",
    "Hyderabad",
    "Kolkata",
  ];

  const hotelData = [
    {
      id: 101,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/38f2184052ca0881a7450b1381d8bb862da44e95c15ac9662c3271a4cead83da?apiKey=6d29990484d54963b372fe4343c1a347&",
      name: "Grand Aston Hotel",
      price: "start from $79/night",
      heartIconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/52777d24401c57f524b5bd1bb483838d151306ae7b9fd930469f698679203fb5?apiKey=6d29990484d54963b372fe4343c1a347&",
    },
    {
      id: 102,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/14831a6e2570a8e8c84b6d45d68f4425c556d8e153539c219b33a9e285c169cf?apiKey=6d29990484d54963b372fe4343c1a347&",
      name: "Grand Aston Hotel",
      price: "start from $79/night",
      heartIconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ec7d879fd9b0a2bca4c2579be467c7838122ce0f5ac4e6396bd7c4d6034e2f8a?apiKey=6d29990484d54963b372fe4343c1a347&",
    },
    {
      id: 103,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf833e6276d27caa8a34c38924ddc59e9a6e76fef1717c542ec8147a4532cb55?apiKey=6d29990484d54963b372fe4343c1a347&",
      name: "Grand Aston Hotel",
      price: "start from $79/night",
      heartIconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a47e8c1c4b13b8f67dccb5a78543a6a6a97c0921f18b4e078f964f0357b797b9?apiKey=6d29990484d54963b372fe4343c1a347&",
    },
    {
      id: 104,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e55d5737af1caca97ebd1750eb16bf058609f3f23b1d5e09e4e4a91a5c9e7bc?apiKey=6d29990484d54963b372fe4343c1a347&",
      name: "Grand Aston Hotel",
      price: "start from $79/night",
      heartIconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a20d0e40e0d472dba2aae4eca18be7965f23f261c762e0ce3300468a31b85cf7?apiKey=6d29990484d54963b372fe4343c1a347&",
    },
  ];
  return (
    <section className="self-start mt-24 ml-16 max-md:mt-10 max-md:ml-2.5">
      <div className="container mx-auto">
        <div className=" mt-28 mb-8 font-barlow text-2xl">Best Rated</div>
        <div className="flex justify-start items-center gap-6">
          {locations.map((item) => (
            <div
              key={item}
              className={`font-barlow text-lg border border-black border-opacity-30 rounded-md px-2 text-[#6F6F6F] cursor-pointer ${
                item === "ALL" ? " text-wine border-wine " : ""
              } `}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-6 mt-6 flex-wrap">
          {hotelData.map((item) => (
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
      </div>
    </section>
  );
};

export default BestRated;
