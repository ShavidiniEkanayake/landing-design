import Image from 'next/image'
import Payment1 from '../../public/images/payment-1.png'
import Payment2 from '../../public/images/payment-2.png'
import Payment3 from '../../public/images/payment-3.png'
import Payment4 from '../../public/images/payment-4.png'

export const Payment = () => {
    return (
        <div className="py-12 px-4 text-center">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">
                    PAYMENT METHODS BUILT <span className="text-purple-600">FOR RESTAURANTS</span>
                </h1>
                <p className="text-gray-500 mt-4">
                    Every Time A Guest Pays With Qlub, You Earn Way More Than Just Revenue: More Tips, More Reviews, And More Data
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={Payment1} alt="Easy Scans Instant Service" />
                    <h3 className="mt-6 text-lg font-semibold">Easy Scans Instant Service</h3>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={Payment2} alt="QR Scan Swift Checkout" />
                    <h3 className="mt-6 text-lg font-semibold">QR Scan Swift Checkout</h3>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={Payment3} alt="Improve Your Operations" />
                    <h3 className="mt-6 text-lg font-semibold">Improve Your Operations</h3>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <Image src={Payment4} alt="Painless Payments Happy Customers" />
                    <h3 className="mt-6 text-lg font-semibold">Painless Payments Happy Customers</h3>
                </div>
            </div>
        </div>
    )
}
