import { Squre } from './icons';

export const Scan = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white container pb-10">
      <div className="lg:w-1/2 w-full text-center lg:text-left mt-8 md:mt-0">
        <div className="inline-block bg-purple/15 backdrop-blur text-purple py-1 px-1 pr-3 rounded-md text-sm my-5 md:mb-10 lg:mb-14">
          <Squre className="w-7 h-7 inline-block p-1 mr-2 backdrop-blur rounded-md bg-transparent" />
          Instant Transactions
        </div>
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
        <button className="bg-black text-white font-medium py-3 px-6 rounded-lg my-10 md:mt-16 hover:bg-black/55 transition-all">
          Learn More
        </button>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src="./images/scan-img.png"
          alt="Scan to pay"
          className="rounded-lg w-full md:p-10"
        />
      </div>
    </section>
  );
};
