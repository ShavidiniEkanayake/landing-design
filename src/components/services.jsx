import React from 'react';

export const Services = () => {
  const items = [
    {
      title: 'Enterprise',
      logos: [
        '/images/Enterprise-Bareburger.png',
        '/images/Enterprise-Boka-restaurant-Group.png',
        '/images/Enterprise-Brewdog.png',
        '/images/Enterprise-Chickies-Petes.png',
      ],
    },
    {
      title: 'Casual Dining',
      logos: [
        '/images/Enterprise-Lettuce-Entertain-You.png',
        '/images/Casual-Dining-Ramen-san.png',
        '/images/Casual-Dining-Pizzeria-Portofino.png',
        '/images/Casual-Dining-Delbar.png',
      ],
    },
    {
      title: 'Breweries & Sports Bars',
      logos: [
        '/images/Breweries-sports-bars-Ranallis-white.png',
        '/images/Enterprise-Chickies-Petes.png',
        '/images/Enterprise-Brewdog.png',
        '/images/Breweries-sports-bars-Yards-white.png',
      ],
    },
    {
      title: 'Hotel Restaurants',
      logos: [
        '/images/Hotel-restaurants-the-hoxton-white.png',
        '/images/Hotel-restaurants-Mama-shelter-white.png',
        '/images/Hotel-restaurants-JoJoe-white.png',
        '/images/Enterprise-Bareburger.png',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-white">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <div className="flex flex-wrap justify-start items-center gap-4">
                {item.logos.map((logo, idx) => (
                  <div key={idx} className="w-1/2 md:w-1/4 p-2">
                    <img
                      src={logo}
                      alt={`${item.title} logo ${idx}`}
                      className="max-w-full mx-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
