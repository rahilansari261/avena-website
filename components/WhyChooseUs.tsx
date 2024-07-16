import Image from "next/image";
import React from "react";
import AccountBalance from "./SVG/AccountBalance";
import Settings from "./SVG/Settings";
import AdUnits from "./SVG/AdUnits";
import Paid from "./SVG/Paid";
const reasons = [
  {
    icon: <AdUnits />,
    text: "We have many choices of comfortable accommodation",
  },
  {
    icon: <Settings />,
    text: "We are committed to providing the best service",
  },
  {
    icon: <Paid />,
    text: "We provide the best prices to our customers",
  },
  {
    icon: <AccountBalance />,
    text: "We provide a variety of safe and easy payment options",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-4/5 h-full flex gap-20 my-14 container mx-auto ">
      <div className="w-1/2 relative ">
        <Image
          loading="lazy"
          src="/cropped.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
          fill
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between gap-14">
        <div className="font-inter text-wine text-5xl font-bold text-right ">
          Why You Should <br />
          Choose Us
        </div>
        <div className="flex gap-10">
          <div className="bg-[#D9EAFF] p-4 rounded-lg ">
            <AdUnits />
          </div>
          <div className="text-2xl">
            We have many choices of comfortable accommodation
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-[#D9EAFF] p-4 rounded-lg ">
            <Settings />
          </div>
          <div className="text-2xl">
            We are committed to providing the best service
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-[#D9EAFF] p-4 rounded-lg ">
            <Paid />
          </div>
          <div className="text-2xl">
            We provide the best prices to our customers
          </div>
        </div>

        <div className="flex gap-10">
          <div className="bg-[#D9EAFF] p-4 rounded-lg ">
            <AccountBalance />
          </div>
          <div className="text-2xl">
            We provide a variety of safe and easy payment options
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
