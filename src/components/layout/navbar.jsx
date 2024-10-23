import React, { useRef, useState } from 'react';

import { X } from 'lucide-react';

import { Logo } from '../icons';

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navBarRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const item = [
    {
      path: '#takePayments',
      label: 'Take Payments',
    },
    {
      path: '#powerYourBusiness',
      label: 'Power Your Business',
    },
    {
      path: '#resources',
      label: 'Resources',
    },
  ];

  return (
    <>
      <header className="absolute w-full bg-transparent top-0 z-[100]">
        <div ref={navBarRef} className="container font-inter">
          <div className="flex justify-between items-center min-h-20">
            <div className="flex items-center gap-20">
              <Logo className="w-16 lg:w-28 h-auto2" />

              <div className="hidden lg:flex items-center gap-14">
                {item.map(navItem => (
                  <a
                    key={navItem.path}
                    href={navItem.path}
                    className="hover:text-purple transition-all duration-300 text-white font-inter"
                  >
                    {navItem.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 lg:hidden">
              <button onClick={handleMenuToggle}>
                <svg
                  className="h-6 w-6  text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="flex space-x-4">
                <a
                  className="rounded-lg text-white px-4 py-2   hover:text-purple transition-all duration-300"
                  href="/sign-in"
                >
                  Sign Up
                </a>
                <a
                  className="rounded-lg text-white px-4 py-2  bg-black/65 hover:bg-white/65 hover:text-purple transition-all duration-300"
                  href="/get-started"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-white transition-all duration-700 z-[60] ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center m-6 font-inter uppercase gap-6">
          {item.map(navItem => (
            <a
              key={navItem.path}
              href={navItem.path}
              className=" font-inter font-semibold text-lg"
            >
              {navItem.label}
            </a>
          ))}

          <div className="mt-10 flex flex-col space-y-4  items-center">
            <a
              className="rounded-lg  px-4 py-2 bg-purple-600 transition-all duration-300 text-center"
              href="/sign-in"
            >
              Sign Up
            </a>
            <a
              className="rounded-lg  text-white px-4 py-2 bg-black  transition-all duration-300  text-center"
              href="/get-started"
            >
              Get Started
            </a>
          </div>
        </div>
        <span className="fixed flex justify-center bottom-10 left-0 right-0">
          <X
            role="banner"
            onClick={handleMenuToggle}
            className="text-black/40 w-6 h-6"
          />
        </span>
      </div>
    </>
  );
};
