import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-20 w-full bg-slate-950 max-md:px-5 ">
      <div className="flex gap-5 justify-between items-start mb-14 w-full  max-md:flex-wrap max-md:mb-10 container mx-auto ">
        <div className="flex flex-col mt-1.5 font-bold text-white">
          <h2 className="text-4xl">AVENA</h2>
          <p className="mt-5 text-base tracking-wide leading-6">
            Where to book the best lodging in <br />
            its class, register immediately to <br />
            get points
          </p>
          <button className="justify-center px-6 py-5 mt-7 text-xl tracking-wide rounded-xl bg-fuchsia-950 max-md:px-5">
            Get Started
          </button>
        </div>
        <nav className="flex flex-col text-base text-white">
          <h3 className="text-xl font-semibold">Product</h3>
          <Link href="#" className="mt-8">
            Home
          </Link>
          <Link href="#" className="mt-6">
            Find Hotel
          </Link>
          <Link href="#" className="mt-6">
            About
          </Link>
        </nav>
        <nav className="flex flex-col text-base text-white">
          <h3 className="text-xl font-semibold">Company</h3>
          <Link href="#" className="mt-7">
            Term Of Use
          </Link>
          <Link href="#" className="mt-6">
            Privacy Policy
          </Link>
          <Link href="#" className="mt-6">
            Careers
          </Link>
        </nav>
        <div className="flex flex-col self-stretch">
          <h3 className="text-xl font-semibold text-white">Contact</h3>
          <Link
            href="mailto:Ngendongatuh@email.com"
            className="mt-8 text-base text-white"
          >
            Ngendongatuh@email.com
          </Link>
          <Link href="tel:+17045550127" className="mt-6 text-base text-white">
            (704) 555-0127
          </Link>
          <address className="mt-6 text-base leading-6 text-white not-italic">
            4517 Washington Ave. Manchester, <br />
            Kentucky 39495
          </address>
          <div className="flex gap-4 mt-7 max-md:pr-5 text-white text-xl">
            <Link href="#" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
