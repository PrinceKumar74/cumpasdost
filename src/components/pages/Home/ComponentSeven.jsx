import React from 'react';
import picFive from '../../../assets/homePics/picFive.png'; 

// Reusable Arrow Icon for navigation buttons
const ArrowIcon = ({ direction = 'left' }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={direction === 'left' ? 'M10 19l-7-7m0 0l7-7m-7 7h18' : 'M14 5l7 7m0 0l-7 7m7-7H3'}
    ></path>
  </svg>
);

// Main ComponentSeven
const ComponentSeven = () => {
  return (
    <div className="bg-[#18181b] text-white font-sans min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <span className="text-orange-500 font-bold tracking-wider">
            JOIN THE REVOLUTION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            The digital landscape is evolving. Are you ready to evolve with it? Let <span className="text-indigo-400">Cumpas Dost</span> guide you to success.
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Testimonial Card */}
          <div className="lg:col-span-3">
            <div className="bg-[#27272a] border border-gray-700 rounded-2xl p-8 h-full flex flex-col">
              <p className="text-gray-300 text-lg italic mb-8 flex-grow">
                “ We are really impressed with the amazing website. I really want to say big thanks to you Ronnen and to all the staff that they were part of our journey. Such a great company to work with and highly recommended to everyone... Thank you so much Ronnen again and again.”
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img 
                    src={picFive}
                    alt="Client Name"
                    className="w-16 h-16 rounded-full mr-4 border-2 border-gray-600"
                  />
                  <div>
                    <h4 className="font-bold text-white">Mr. Gagan deep</h4>
                    <p className="text-gray-400 text-sm">CEO, hairlyf</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Delivery Success Rate Card */}
            <div className="bg-indigo-400 rounded-2xl p-8 text-gray-900 flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-2">Delivery Success Rate</h3>
              <p className="text-7xl font-bold">95%</p>
            </div>

            {/* Repeat Customers Card */}
            <div className="bg-orange-600 rounded-2xl p-8 text-white flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-2">Repeat Customers</h3>
              <p className="text-gray-200">
                An impressive 85% of our customers return to us time and time again for their floral needs. Whether it's for special occasions, everyday arrangements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComponentSeven;
