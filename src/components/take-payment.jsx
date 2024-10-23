import React from 'react';

export const TakePayment = () => {
  return (
    <section className="bg-purple text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-lg md:text-xl font-light">Choose To Take Payments</p>
            <p className="text-2xl md:text-3xl font-semibold">With Qlub</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <p className="text-2xl font-semibold">Save 16 Min</p>
              <p className="text-sm font-light">Per Table</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Earn 300%</p>
              <p className="text-sm font-light">More Tips</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Get 7X</p>
              <p className="text-sm font-light">Positive Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
