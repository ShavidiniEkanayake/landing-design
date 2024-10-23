import Image from 'next/image'
import React from 'react';
import ScanImg from '../../public/images/scan-img.png'; 

export const Scan = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-16 bg-white">
      <div className="md:w-1/2 w-full text-center md:text-left mt-8 md:mt-0">
        <span className="text-purple-600 font-semibold bg-purple-100 p-2 rounded-md text-sm inline-block mb-4">
          Instant Transactions
        </span>
        <h1 className="text-4xl font-bold text-gray-900">Simple Scans</h1>
        <h2 className="text-4xl font-bold text-gray-900">Seamless Payments</h2>
        <p className="text-gray-600 text-lg mt-4">
          Experience the ultimate convenience of QR payments with our simple scans and seamless transactions.
        </p>
        <button className="bg-black text-white font-medium py-3 px-6 rounded-lg mt-6 hover:bg-gray-800 transition-all">
          Learn More
        </button>
      </div>
      

      <div className="md:w-1/2 w-full flex justify-center">
        <Image 
          src={ScanImg} 
          alt="Scan to pay" 
          className="rounded-lg shadow-lg w-full md:max-w-sm"
        />
      </div>
    </section>
  );
};
