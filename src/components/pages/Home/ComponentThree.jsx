import React from 'react';

function ComponentThree() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      ),
      title: 'Branding',
      description: 'Build a strong and memorable identity that sets your business apart. We craft compelling brand stories, visuals, and strategies that connect deeply with your audience and leave a lasting impression.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      title: 'Web development',
      description: 'Create fast, responsive, and user-friendly websites tailored to your business goals. Our development solutions ensure seamless performance, modern design, and an engaging digital experience across all devices.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      title: 'Digital marketing',
      description: 'Accelerate your growth with data-driven marketing strategies. From social media to content marketing, we help you reach the right audience, boost engagement, and maximize your ROI.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a2 2 0 100 4m-6 10a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m10 10l4-2m0 0l4 2m-4-2v6m-2 2h4M7 16h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: 'Designing',
      description: 'Transform ideas into visually stunning designs. Our creative team delivers eye-catching graphics and intuitive layouts that enhance user experience and elevate your brand presence.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      ),
      title: 'SEO',
      description: 'Improve your visibility and rank higher on search engines. We use proven SEO techniques to drive organic traffic, increase credibility, and help your business stay ahead of the competition.',
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l4 4-4 4M7 7l-4 4 4 4m6-10l-2 12"
          ></path>
        </svg>
      ),
      title: 'Ads Campaign',
      description: 'Get measurable results with targeted advertising campaigns. We design and manage high-performing ad strategies that increase conversions, reduce costs, and grow your business effectively.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <p className="cd-gradient-text text-sm font-semibold uppercase tracking-wider mb-2">SERVICES</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[var(--cd-text)]">
          What we offer?
        </h2>
        <p className="text-[var(--cd-muted)] text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          At Campusdost, we provide everything your business needs to grow in the digital world. We help you build a strong brand identity that connects with your audience, and we create modern, responsive websites that look great and work smoothly. Our goal is simple — deliver quality, support your vision, and build a long-term partnership based on trust and results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cd-card p-8 flex flex-col items-start text-left transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-[var(--cd-text)]">{service.title}</h3>
              <p className="text-[var(--cd-muted)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComponentThree;
