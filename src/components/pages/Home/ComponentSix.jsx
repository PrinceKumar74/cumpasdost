import React from 'react';
import picOne from '../../../assets/homePics/picOne.png'
import picTwo from '../../../assets/homePics/picTwo.png'

// A reusable arrow icon component for the "Read more" links
const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    ></path>
  </svg>
);

// A reusable card component for the portfolio items
const PortfolioCard = ({ tag, title, imageUrl, large = false }) => (
  <div className={`bg-[#27272a] p-6 rounded-lg flex flex-col ${large ? 'md:col-span-1 md:row-span-2' : ''}`}>
    {imageUrl && (
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/27272a/FFF?text=Image'; }}
        />
      </div>
    )}
    <div className="flex-grow flex flex-col">
      <span className="text-xs font-semibold bg-yellow-500 text-black px-2 py-1 rounded-md self-start mb-4">
        {tag}
      </span>
      <h3 className="text-white text-2xl font-semibold mb-4 flex-grow">{title}</h3>
      <a href="#" className="text-gray-400 hover:text-white group font-medium">
        Read more <ArrowIcon />
      </a>
    </div>
  </div>
);

// The main component as shown in the image
const ComponentSix = () => {
  const portfolioItems = [
    {
      tag: 'WEBSITE',
      title: 'Creative landing page',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      large: true,
    },
    {
      tag: 'DIGITAL MARKETING',
      title: "Why We Collect User's Data",
    },
    {
      tag: 'BRANDING',
      title: 'Creative Branding',
      imageUrl: picTwo,
    },
    {
      tag: 'BRANDING',
      title: 'Creative Branding',
    },
    {
      tag: 'DEVELOPMENT',
      title: 'Automation. Advanced Level',
    },
    {
      tag: 'SEO',
      title: 'How We Optimized Our SEO',
    },
  ];

  return (
    <div className="bg-[#18181b] min-h-screen p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Title and Description */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="text-white text-5xl md:text-6xl font-bold mb-6">
              Some pieces of our work
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Risus commodo id odio turpis pharetra elementum. Pulvinar porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
            </p>
            <button className="border border-gray-600 text-white font-semibold py-3 px-6 rounded-full self-start hover:bg-white hover:text-black transition-colors duration-300">
              SHOW MORE
            </button>
          </div>

          {/* Right Column: Portfolio Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                tag={item.tag}
                title={item.title}
                imageUrl={item.imageUrl}
                large={item.large}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSix;
