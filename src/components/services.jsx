export const Services = () => {
  const items = [
    {
      title: 'Enterprise',
      logos: [
        '/images/enterprise-logo1.png',
        '/images/enterprise-logo2.png',
        '/images/enterprise-logo3.png',
        '/images/enterprise-logo4.png',
      ],
      style: 'md:border-r border-white border-b',
    },
    {
      title: 'Casual Dining',
      logos: [
        '/images/enterprise-logo5.png',
        '/images/casual-logo1.png',
        '/images/casual-logo2.png',
        '/images/casual-logo3.png',
      ],
      style: 'border-b border-white',
    },
    {
      title: 'Breweries & Sports Bars',
      logos: [
        '/images/breweries-logo1.png',
        '/images/enterprise-logo4.png',
        '/images/enterprise-logo3.png',
        '/images/breweries-logo2.png',
      ],
      style: 'md:border-r border-white md:border-b-none border-b',
    },
    {
      title: 'Hotel Restaurants',
      logos: [
        '/images/hotel-logo3.png',
        '/images/hotel-logo2.png',
        '/images/hotel-logo1.png',
        '/images/enterprise-logo1.png',
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
