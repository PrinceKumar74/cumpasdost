import React from 'react';
import picTwo from '../../../assets/aboutPics/picTwo.png';

const OurStory = () => {
  return (
    <div className="bg-white font-sans min-h-screen">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content Section */}
          <div className="lg:w-1/2 text-gray-800">
            <p className="inline-block border border-gray-300 rounded-md px-3 py-1 text-sm font-semibold tracking-wider text-gray-500 mb-6">
              OUR STORY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We are an agency that is an expert for more than 5 years
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For more than 5 years, we have delivered excellence in technology and marketing. Our expert team blends creativity with strategy to provide impactful solutions that drive business growth and brand success.
            </p>
            <p className="text-gray-600 leading-relaxed">
             Trusted by clients for over 5 years, we provide innovative, reliable, and result-driven services. From startups to enterprises, our solutions empower businesses to scale faster and achieve their true potential.
            </p>
            
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img 
              src={picTwo} 
              alt="Team working on laptops" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurStory;
