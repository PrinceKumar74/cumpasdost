import React from 'react';
import picThree from '../../../assets/aboutPics/picThree.png';
const OurValues = () => {
  const values = [
    {
      icon: (
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      ),
      title: "Transparency",
      description: "We believe in open communication and clear processes, ensuring trust and accountability in everything we do."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Efficiency",
      description: "We believe in open communication and clear processes, ensuring trust and accountability in everything we do."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      ),
      title: "Respect",
      description: "We believe in open communication and clear processes, ensuring trust and accountability in everything we do."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      ),
      title: "Passion",
      description: "We believe in open communication and clear processes, ensuring trust and accountability in everything we do."
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5]">
              {/* Placeholder for the team hands image */}
              
             <img 
                src={picThree}
                alt="Team hands coming together" 
                className="w-full h-full object-cover"
              />
              
             
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-orange-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-amber-400 rounded-full opacity-30"></div>
          </div>
          
          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded-full uppercase tracking-wider">
                Our Values
              </span>
            </div>
            
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Values that Drive Everything We Do
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We love what we do and have a lot of fun at work, but we're also deeply committed to our work.
              </p>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-3">
                  {/* Icon */}
                  <div className="flex items-start">
                    {value.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurValues;