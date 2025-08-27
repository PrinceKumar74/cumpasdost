import React from 'react';
import css from '../../../assets/developmentPics/css.png';
import javascript from '../../../assets/developmentPics/javascript.svg';
import tailwind from '../../../assets/developmentPics/tailwind.svg';
import html from '../../../assets/developmentPics/html.svg';
import react from '../../../assets/developmentPics/react.svg';
import angular from '../../../assets/developmentPics/angular.svg';
import mongodb from '../../../assets/developmentPics/mongodb.svg';
import nodejs from '../../../assets/developmentPics/nodejs.svg';
import figma from '../../../assets/developmentPics/figma.svg';
import canvas from '../../../assets/developmentPics/canvas.svg';


export default function ComponentOne() {
  // Array of tool stack icons with placeholder image sources
  // You can replace these src values with your actual image paths.
  const toolStack = [
    { id: 1, src: angular, alt: 'Angular' },
    { id: 2, src: react, alt: 'React' },
    { id: 3, src: html, alt: 'HTML5' },
    { id: 4, src: css, alt: 'CSS3' },
    { id: 5, src: javascript, alt: 'JavaScript' },
    { id: 6, src: nodejs, alt: 'node.js' },
    { id: 7, src: figma, alt: 'Figma' },
    { id: 8, src: canvas, alt: 'Canvas' },
    { id: 9, src: mongodb, alt: 'MongoDB' },
    { id: 10, src: tailwind, alt: 'Tailwind CSS' },
  ];

  return (
    <div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white font-sans p-4 sm:p-8 relative overflow-hidden">
      {/* Background Image - Replace the src with your image path */}
      <img
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
        alt="Code background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x1080/282c34/FFFFFF?text=Background'; }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Main content container - positioned above the overlay */}
      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-20">
        
        {/* Sub-heading */}
        <p className="text-sm font-semibold tracking-widest text-gray-400 mb-4">
          YOUR RELIABLE OUTSOURCED IT PARTNER
        </p>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="text-orange-500">Software Solutions</span> for growing businesses
        </h1>
        
        {/* Description paragraph */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-8">
          We have Expertise in Creating Quality, Custom Different Development Options That are Create to Grow With Your Business. If You Are Looking For a Brand New Website, A Mobile App, or Different Software Systems, Then We Are Here For You, Our Well Experienced Team is Here to Bring Your Vision to Business.
        </p>
        
        {/* Call to action button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg">
          Primary Action
        </button>

        {/* Tool stack section */}
        <div className="mt-16 sm:mt-24 w-full">
          <h2 className="text-sm font-semibold tracking-widest text-gray-400 mb-8">
            OUR TOOL STACK
          </h2>
          {/* Icons container */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {toolStack.map(({ id, src, alt }) => (
              <div key={id} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
                <img 
                  src={src} 
                  alt={alt} 
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/CCCCCC/FFFFFF?text=Error'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
