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
  <div className={`cd-card p-6 rounded-2xl flex flex-col ${large ? 'md:col-span-1 md:row-span-2' : ''}`}>
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
      <span className="text-xs font-semibold bg-black/5 text-[var(--cd-text)] px-2.5 py-1 rounded-full self-start mb-4 border border-black/5">
        {tag}
      </span>
      <h3 className="text-[var(--cd-text)] text-2xl font-semibold mb-4 flex-grow">{title}</h3>
      <a href="#" className="text-[var(--cd-muted)] hover:text-[var(--cd-text)] group font-medium">
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
    <section className="p-8 md:p-16 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Title and Description */}
          <div className="md:col-span-1 flex flex-col justify-center">
            <h2 className="text-[var(--cd-text)] text-5xl md:text-6xl font-bold mb-6">
              Some pieces of our work
            </h2>
            <p className="text-[var(--cd-muted)] mb-8 text-lg">
              Explore our diverse portfolio showcasing innovative solutions and creative designs that drive success for our clients.
            </p>
            <button className="cd-gradient text-white font-semibold py-3 px-6 rounded-full self-start hover:opacity-95 transition-colors duration-300 shadow-lg shadow-indigo-600/15">
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
    </section>
  );
};

export default ComponentSix;
