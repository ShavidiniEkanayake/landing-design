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
      style: 'md:border-r border-white border-b',
    },
    {
      title: 'Casual Dining',
      logos: [
        '/images/Enterprise-Lettuce-Entertain-You.png',
        '/images/Casual-Dining-Ramen-san.png',
        '/images/Casual-Dining-Pizzeria-Portofino.png',
        '/images/Casual-Dining-Delbar.png',
      ],
      style: 'border-b border-white',
    },
    {
      title: 'Breweries & Sports Bars',
      logos: [
        '/images/Breweries-sports-bars-Ranallis-white.png',
        '/images/Enterprise-Chickies-Petes.png',
        '/images/Enterprise-Brewdog.png',
        '/images/Breweries-sports-bars-Yards-white.png',
      ],
      style: 'md:border-r border-white md:border-b-none border-b',
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
    <section className=" bg-black ">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-white py-16 lg:px-20 px-10 ${item.style || ''}`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                {item.title}
              </h3>
              <div className="flex flex-wrap justify-start items-center ">
                {item.logos.map((logo, idx) => (
                  <div key={idx} className="w-1/2 md:w-1/4 p-2">
                    <img
                      src={logo}
                      alt={`${item.title} logo ${idx}`}
                      className="w-32 mx-auto md:pr-2"
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
