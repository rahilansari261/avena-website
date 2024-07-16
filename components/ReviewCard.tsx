import React from "react";

import Image from "next/image";
import { ReviewData } from "@/types";

interface ReviewCardProps {
  review: ReviewData;
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className }) => {
  return (
    <div
      className={`flex flex-col ml-5 ${className} max-md:ml-0 max-md:w-full`}
    >
      <div className="flex relative flex-col grow px-7 py-8 w-full text-lg bg-[#263042] text-neutral-300 max-md:px-5 max-md:mt-9 max-md:max-w-full">
        <div className="text-7xl leading-8 max-md:max-w-full max-md:text-4xl"></div>
        <p className="mt-8 leading-8 max-md:max-w-full">{review.quote}</p>
        {/* <Image
          fill
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f823407567bf1427aacf1db95c8b9f4a24ea73e35789bf0cd4495c6415b0b5e2?apiKey=6d29990484d54963b372fe4343c1a347&"
          alt=""
          className="mt-11 w-full stroke-[1px] stroke-neutral-300 stroke-opacity-10 max-md:mt-10 max-md:max-w-full"
        /> */}
        <div className="flex gap-5 justify-between px-0.5 mt-9 w-full leading-[167%] max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 font-bold">
            {/* <Image
              fill
              loading="lazy"
              src={review.avatar}
              alt={`${review.author}'s avatar`}
              className="shrink-0 w-12 aspect-square"
            /> */}
            <div className="my-auto">{review.author}</div>
          </div>
          {className !== "w-[23%]" && (
            <div className="flex gap-4 my-auto whitespace-nowrap">
              {/* <Image
                fill
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e7afb6f4c74847f99717a9596b4abf6983d534f30ad6c965aa7ab50ac6a5dff?apiKey=6d29990484d54963b372fe4343c1a347&"
                alt=""
                className="shrink-0 my-auto w-6 aspect-square"
              /> */}
              <div>Helpful</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
