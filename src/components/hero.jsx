import Image from 'next/image';

import RightArrow from '../../public/images/right-arrow .png';
import { HeroCard, Sparkle } from './icons';

export const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url('/images/hero-bg.png')` }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full">
          <div className="text-left font-inter text-white pt-10 md:pt-0 max-w-2xl">
            <div className="inline-block bg-white/20 backdrop-blur text-white py-1 px-1 pr-3 rounded-lg text-sm my-5 md:mb-10 lg:mb-14">
              <Sparkle className="w-6 h-6 inline-block p-1 mr-2 backdrop-blur rounded-md bg-transparent" />
              Unlock Comfort And Convenience
            </div>
            <h1 className="text-4xl font-thin md:text-5xl lg:text-6xl leading-tight uppercase">
              Enhance Your <br />
              <span className="text-white font-black">
                Restaurant Experience
              </span>
            </h1>
            <p className="mt-6 capitalize text-white text-sm md:text-lg">
              By utilizing Qlub, businesses can unlock a new level of comfort
              and convenience both for themselves and their customers.
            </p>
            <button className="mt-5 md:mt-10 lg:mt-14 px-5 py-3 bg-purple hover:bg-white/50 transition-all duration-300 text-white rounded-lg font-semibold text-sm flex items-center space-x-2">
              <span>Book A Demo</span>
              <Image
                src={RightArrow}
                alt="Right arrow"
                className="ml-2 w-5 h-5"
              />
            </button>
          </div>

          <div className="w-full max-w-md mt-8 lg:mt-0 lg:ml-10  ">
            <HeroCard className="lg:w-[22rem] md:w-60 w-40 h-auto lg:mr-40 lg:mt-40" />
          </div>
        </div>
      </div>
    </div>
  );
};
