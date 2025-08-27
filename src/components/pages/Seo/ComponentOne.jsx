import React from 'react';

// SVG Icon Components

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const GrowthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


// Circular Progress Bar Component
const CircularProgressBar = ({ percentage }) => {
    const radius = 50;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
            >
                <circle
                    stroke="#e6e6e6"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#8b5cf6"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-bold text-gray-800">{percentage}%</span>
                <span className="text-sm text-gray-500">Saved</span>
            </div>
        </div>
    );
};

// Main Component
export default function ComponentOne() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen flex flex-col items-center justify-center p-4 lg:p-8 relative overflow-hidden">
        {/* Background decorative dots */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto">
            {/* Pill */}
            <div className="mb-4">
                <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-4 py-1 rounded-full">
                    YOUR RELIABLE OUTSOURCED IT PARTNER
                </span>
            </div>

            {/* Main Headline */}
            <div className="flex items-center justify-center flex-wrap">
                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Drive Traffic, Boost <br className="sm:hidden"/> Sales, Grow Your Brand
                </h1>
                <div className="mt-[-20px] ml-2">
                    <ArrowUpRightIcon />
                </div>
            </div>

            {/* Sub-headline */}
            <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
                Experience unparalleled growth with comprehensive SEO and digital marketing services.
            </p>

            {/* Analytics UI Section */}
            <div className="mt-12 w-full flex justify-center">
                <div className="relative w-full max-w-4xl">
                    
                    {/* Main Central Card */}
                    <div className="relative z-20 bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center">
                            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
                                {/* Revenue Card */}
                                <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 shadow-md">
                                    <div className="bg-white p-2 rounded-full">
                                        <WalletIcon />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-gray-800">$50,000</p>
                                        <p className="text-sm text-gray-500">Total Revenue</p>
                                    </div>
                                </div>
                                
                                {/* Circular Progress */}
                                <div className="my-6 md:my-0">
                                    <CircularProgressBar percentage={48} />
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 w-full my-6"></div>

                            <div className="w-full flex justify-between items-center text-center">
                                <div>
                                    <p className="text-sm text-gray-500">Total Spent</p>
                                    <p className="text-xl font-bold text-gray-800">$18,570</p>
                                </div>
                                <div className="flex items-center gap-2">
                                     <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                                    <div>
                                        <p className="text-sm text-gray-500">Money Saved</p>
                                        <p className="text-xl font-bold text-gray-800">$31,430</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="#" className="text-blue-600 font-semibold hover:underline">
                                    View Full Report
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Growth Card - Top Right */}
                    <div className="absolute z-30 top-[-20px] right-[10%] md:right-[5%] bg-white text-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-3 transform hover:rotate-3 transition-transform duration-300">
                        <div className="bg-green-100 p-2 rounded-full">
                            <GrowthIcon />
                        </div>
                        <div>
                            <p className="font-bold text-green-500 text-lg">+2.0%</p>
                            <p className="text-sm text-gray-500">Growth</p>
                        </div>
                    </div>

                    {/* Bar Chart Card - Bottom Right */}
                    <div className="absolute z-10 bottom-[-40px] right-0 md:right-[-20px] w-full max-w-sm bg-white text-gray-800 rounded-2xl shadow-xl p-6 transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2">
                                <button className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">Monthly <ChevronDownIcon /></button>
                                <button className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md text-gray-700">Last Year <ChevronDownIcon /></button>
                            </div>
                        </div>
                        {/* Simplified Bar Chart */}
                        <div className="w-full h-40 flex items-end justify-between gap-2">
                            <div className="w-1/5 h-[80%] bg-blue-500 rounded-t-md" title="Bar 1"></div>
                            <div className="w-1/5 h-[40%] bg-blue-500 rounded-t-md" title="Bar 2"></div>
                            <div className="w-1/5 h-[60%] bg-blue-300 rounded-t-md" title="Bar 3"></div>
                            <div className="w-1/5 h-[50%] bg-blue-500 rounded-t-md" title="Bar 4"></div>
                            <div className="w-1/5 h-[75%] bg-blue-300 rounded-t-md" title="Bar 5"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

