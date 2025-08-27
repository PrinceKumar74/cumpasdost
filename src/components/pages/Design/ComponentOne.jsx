import React from 'react';
import img1 from '../../../assets/design/done.png';
import img2 from '../../../assets/design/dtwo.png';
// SVG Icon for the "Best Services" badge
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1.5 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);


export default function ComponentOne() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen w-full flex items-center justify-center font-sans p-4 sm:p-8">
      <div className="max-w-7xl w-full text-white">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8 md:mb-12">
          <div className="space-y-6">
            <span className="text-xs font-semibold bg-gray-700/50 text-white py-1 px-3 rounded-full inline-flex items-center">
               BEST SERVICES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Empower Your Business <br /> with{' '}
              <span className="text-orange-500">Innovative Designs</span>
            </h1>
          </div>
          <div className="lg:pl-8">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Get complete custom tailored design that brings your ideas to life and help you reach to the customer eyes. We make designs which are eye catching, innovative and always fresh.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Image: Swatches */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg">
            <img
              src= {img1}
              alt="Fabric and wood color swatches"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/2d2d2d/ffffff?text=Color+Swatches'; }}
            />
          </div>

          {/* Right Image: Computer Setup */}
          <div className="bg-[#2d2d2d] p-4 rounded-xl shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 bg-fuchsia-600/30 blur-3xl z-0"></div>
            <img
              src= {img2}
              alt="Desktop computer with design portfolio on screen"
              className="w-full h-full object-cover rounded-lg relative z-10"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/9d34da/ffffff?text=Design+Portfolio'; }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
