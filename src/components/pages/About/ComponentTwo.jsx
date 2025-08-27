import React from 'react';

const ComponentTwo = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl text-gray-600 font-medium">
            Trusted by 10,000+ companies around the world
          </h2>
        </div>
        
        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {/* Google */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <span className="text-2xl md:text-3xl font-normal text-gray-700 tracking-tight">
              Google
            </span>
          </div>
          
          {/* Facebook */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <span className="text-2xl md:text-3xl font-normal text-gray-700 tracking-tight lowercase">
              facebook
            </span>
          </div>
          
          {/* YouTube */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
              </div>
              <span className="text-2xl md:text-3xl font-normal text-gray-700 tracking-tight">
                YouTube
              </span>
            </div>
          </div>
          
          {/* Pinterest */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
              <span className="text-2xl md:text-3xl font-normal text-gray-700 tracking-tight">
                Pinterest
              </span>
            </div>
          </div>
          
          {/* Twitch */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <span className="text-2xl md:text-3xl font-bold text-gray-700 tracking-tight lowercase">
              twitch
            </span>
          </div>
          
          {/* Webflow */}
          <div className="flex items-center justify-center h-12 md:h-16">
            <span className="text-2xl md:text-3xl font-normal text-gray-700 tracking-tight lowercase italic">
              webflow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTwo;