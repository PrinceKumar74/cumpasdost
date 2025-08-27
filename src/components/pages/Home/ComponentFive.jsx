import React from 'react';

function ComponentFive() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-purple-600 mb-4"
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
      title: 'More Clicks, More Sales',
      description: 'Proven strategies to boost traffic and conversions.',
      bgColor: 'bg-purple-100', // Light purple
      textColor: 'text-purple-900',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-yellow-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: 'Simplified Solutions',
      description: 'We handle the tech so you can focus on your business.',
      bgColor: 'bg-yellow-100', // Light yellow
      textColor: 'text-yellow-900',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-indigo-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: 'Customized',
      description: 'Every solution is tailored to your unique needs.',
      bgColor: 'bg-indigo-100', // Light indigo
      textColor: 'text-indigo-900',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-pink-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10m0 0h16m-16 0l-1-1m17 1l1-1m-1-9H4m0 0L3 7m1 0L3 6"
          ></path>
        </svg>
      ),
      title: 'Data-Driven Development',
      description: 'We create tech products that are data-driven and market-conscious.',
      bgColor: 'bg-pink-100', // Light pink
      textColor: 'text-pink-900',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">CHOOSE US</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Why Choose Us?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg flex flex-col items-start text-left ${feature.bgColor} ${feature.textColor} transform transition duration-300 hover:scale-105`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComponentFive;
