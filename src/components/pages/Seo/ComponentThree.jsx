import React from 'react';

// A simple CTA (Call to Action) component
export default function ComponentThree() {
  return (
    <div className="bg-gray-800 font-sans">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Let us Shape Your Story.</span>
        </h2>
        
        {/* Sub-headline */}
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Get started with our free-of-charge, personalized support. Create your custom design plan with us.
        </p>
        
        {/* Action Button */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Primary Action
          </a>
        </div>
        
      </div>
    </div>
  );
}
