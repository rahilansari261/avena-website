import Image from "next/image";
import React from "react";

interface HotelCardProps {
  imageSrc: string;
  name: string;
  price: string;
  heartIconSrc: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  imageSrc,
  name,
  price,
  heartIconSrc,
}) => {
  return (
    <div className="flex flex-col px-1 py-1.5 mt-8 bg-white rounded-2xl border border-solid border-black border-opacity-50">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-2.5 pb-20 aspect-[1.36] max-md:pl-5">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative justify-center items-center px-4 mb-3.5 bg-white bg-opacity-40 h-[59px] rounded-[50px] w-[59px]">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54b28857d70a362ab059d0b9aa66b682c7b0f36836b65e6b54814faebaeb0fb9?apiKey=6d29990484d54963b372fe4343c1a347&"
            alt=""
            className="w-full aspect-square"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold leading-10 text-neutral-800">{name}</h3>
      <p className="mt-2.5 text-lg leading-8 text-zinc-500">{price}</p>
      <div className="flex gap-5 justify-between px-px mt-6 text-lg font-bold text-center text-white">
        <button className="justify-center px-11 py-4 my-auto rounded-2xl bg-fuchsia-950 max-md:px-5">
          Book Now
        </button>
        <Image
          loading="lazy"
          src={heartIconSrc}
          alt="Favorite"
          className="shrink-0 aspect-[0.92] w-[43px]"
        />
      </div>
    </div>
  );
};

export default HotelCard;
