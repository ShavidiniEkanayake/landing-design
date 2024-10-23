import Image from "next/image";
import Payment1 from "../../public/images/payment-1.png";
import Payment2 from "../../public/images/payment-2.png";
import Payment3 from "../../public/images/payment-3.png";
import Payment4 from "../../public/images/payment-4.png";

export const Payment = () => {
  return (
    <div className="py-12 px-4 text-center font-inter">
      <div className="mb-10 py-20">
        <h1 className="text-5xl mb-4">PAYMENT METHODS BUILT</h1>
        <h1 className="text-5xl font-black text-purple">FOR RESTAURANTS</h1>
        <p className="text-black/50 mt-6">
          Every Time A Guest Pays With Qlub, You Earn Way More Than Just
          Revenue: More Tips, More Reviews, And More Data
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-16">
        <div className="flex flex-col items-center bg-white p-2 rounded-lg">
          <Image src={Payment1} alt="Easy Scans Instant Service" />
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-lg">
          <Image src={Payment2} alt="QR Scan Swift Checkout" />
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-lg">
          <Image src={Payment3} alt="Improve Your Operations" />
        </div>
        <div className="flex flex-col items-center bg-white p-2 rounded-lg">
          <Image src={Payment4} alt="Painless Payments Happy Customers" />
        </div>
      </div>
    </div>
  );
};
