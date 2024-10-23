import Image from "next/image";
import React from "react";
import ScanImg from "../../public/images/scan-img.png";
import { Squre } from "./icons";

export const Scan = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center bg-white font-inter container pb-10">
      <div className="md:w-1/2 w-full text-center md:text-left mt-8 md:mt-0">
        <span className="text-purple font-semibold bg-purple/15 p-2 rounded-md text-sm inline-block my-10 md:mb-16 pr-5">
          <Squre className="w-7 h-7 inline-block p-[0.3rem] mr-2 backdrop-blur rounded-md bg-purple/20" />
          Instant Transactions
        </span>
        <h1 className="text-4xl md:text-5xl font-light text-black uppercase mb-2">
          Simple Scans
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase">
          Seamless Payments
        </h2>
        <p className="text-black/55 md:text-lg mt-4">
          Experience the ultimate convenience of QR payments with our simple
          scans and seamless transactions.
        </p>
        <button className="bg-black text-white font-medium py-3 px-6 rounded-lg my-10 md:mt-16 hover:bg-gray-800 transition-all">
          Learn More
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center">
        <Image
          src={ScanImg}
          alt="Scan to pay"
          className="rounded-lg w-full md:p-10"
        />
      </div>
    </section>
  );
};
