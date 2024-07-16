import React from "react";

import Image from "next/image";
import { ReviewData } from "@/types";
import ReviewCard from "./ReviewCard";

const reviewsData: ReviewData[] = [
  {
    quote:
      "Nginep is very easy to use, the customer service is friendly and very responsive when there are questions and complaints from customers. I am very satisfied using Nginep to book my dream hotel",
    author: "Jesselyn Wu",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/632f4acb4cd6976f35f425cf8b3550b1858e90733f1bd9c826d823b14c19d42e?apiKey=6d29990484d54963b372fe4343c1a347&",
  },
  {
    quote:
      "The price of the hotel in the stay tends to be cheap compared to the price on other platforms, I am very satisfied with Nginep. Hope it grows to be a better booking platform!",
    author: "Enzy Storia",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/afec364408734808d4240901f0114296ecb106261f3585303853f9396e466bb4?apiKey=6d29990484d54963b372fe4343c1a347&",
  },
  {
    quote:
      "The price of the hotel in the stay tends to be cheap compared to the price on other platforms, I am very satisfied with Nginep. Hope it grows to be a better booking platform!",
    author: "Freya Kayyona",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/afec364408734808d4240901f0114296ecb106261f3585303853f9396e466bb4?apiKey=6d29990484d54963b372fe4343c1a347&",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="flex overflow-hidden w-full relative z-10 flex-col items-center py-20 pl-20 mt-28  bg-[#1C2534] min-h-[859px] max-md:pl-5 max-md:mt-10 ">
      <div className="relative mt-16 w-full  max-md:mt-10 max-md:max-w-full container mx-auto">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h2 className="relative text-6xl font-bold text-white leading-[92px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
              What Our Customers Say About Nginep?
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow text-lg leading-8 text-neutral-300 max-md:mt-10 max-md:max-w-full">
              <p className="max-md:max-w-full">
                If you don&apos;t trust us enough, take a look at the reviews
                from some of our users below. We hope it can help you in making
                your decision
              </p>
              {/* <Image
                fill
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3278842d4e50a415326c3c73b3efd3282e61d5a0cd6b40dc863687eab4d98893?apiKey=6d29990484d54963b372fe4343c1a347&"
                alt=""
                className="self-end mt-16 w-36 max-w-full aspect-[2.44] max-md:mt-10"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16 mb-6 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {reviewsData.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              className={index === 2 ? "w-[23%]" : "w-[38%]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
