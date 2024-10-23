const items = [
  {
    title: 'Payment Methods Built for Restaurants',
    logo: '/images/payment-1.png',
  },
  {
    title: 'Easy Scans Instant Service',
    logo: '/images/payment-2.png',
  },
  {
    title: 'QR Scan Swift Checkout',
    logo: '/images/payment-3.png',
  },
  {
    title: 'Improve Your Operations',
    logo: '/images/payment-4.png',
  },
];

export const Payment = () => {
  return (
    <div className="container">
      <div className="py-12 text-center">
        <div className="md:mb-10 py-10 md:py-20">
          <h1 className="text-4xl md:text-5xl mb-4">PAYMENT METHODS BUILT</h1>
          <h1 className="text-4xl md:text-5xl font-black text-purple">
            FOR RESTAURANTS
          </h1>
          <p className="text-black/50 mt-6 lg:px-[25rem]">
            Every Time A Guest Pays With Qlub, You Earn Way More Than Just
            Revenue: More Tips, More Reviews, And More Data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg"
            >
              <img src={item.logo} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
