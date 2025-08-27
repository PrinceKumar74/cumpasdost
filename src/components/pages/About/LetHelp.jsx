import React from 'react';
import { Link } from 'react-router-dom';

const LetHelp = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Let us help.
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get started with our free-of-charge, personalized support. Create your custom ads plan with us.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Action Button */}
          <Link to ='/contact'><button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 min-w-[180px]">
            Primary Action
          </button></Link>
          
          {/* Secondary Action Button */}
          <Link to ='/contact'><button className="px-8 py-4 bg-transparent hover:bg-orange-50 text-orange-600 font-semibold border-2 border-orange-600 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 min-w-[180px]">
            Secondary Action
          </button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default LetHelp;