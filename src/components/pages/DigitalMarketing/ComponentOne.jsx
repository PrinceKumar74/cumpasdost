import React from 'react';
import img1 from '../../../assets/marketingPics/main.png';

// A reusable component for the statistic cards
const StatCard = ({ value, label }) => (
  <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
    <p className="text-4xl lg:text-5xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-600 mt-2">{label}</p>
  </div>
);

// The main component built from the image
export default function ComponentOne() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="container mx-auto px-4 py-16 lg:py-24">

        {/* --- Top Section: Header and Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-gray-700 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Best Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Transforming Businesses with Data-Driven <span className="text-orange-500">Marketing Excellence</span>
            </h1>
            <p className="text-gray-400 mt-6 text-lg">
              We are providing personalized digital marketing solutions to help your business grow online. From different digital marketing sections, we ensure to meet your expectations.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-1/2">
            <img 
              src={img1}
              alt="Data-driven marketing meeting" 
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a202c/ff0000?text=Image+Error'; }}
            />
          </div>
        </div>

        {/* --- Bottom Section: Achievements --- */}
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column: Achievement Text */}
            <div className="lg:col-span-1">
               <span className="inline-block text-gray-400 text-sm font-semibold uppercase tracking-wider">
                Our Achievement
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">
                Recognized Excellence, Proven Results
              </h2>
            </div>

            {/* Middle Column: Description */}
            <div className="lg:col-span-2 lg:pl-8">
              <p className="text-gray-400 text-base leading-relaxed mt-2">
                Our approaches meet massive growth to the business, whether it is increasing traffic, sales, value, or brand visibility in the market.
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <StatCard value="95%" label="Delivery Success Rate" />
            <StatCard value="3x" label="ROI on Ads" />
            <StatCard value="200+" label="Successful Campaigns" />
          </div>
        </div>

      </div>
    </div>
  );
}
