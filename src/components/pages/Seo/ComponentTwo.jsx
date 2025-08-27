import React from 'react';

// A reusable card component for each step in the process
const ProcessCard = ({ number, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-bold text-lg border-2 border-purple-200">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1 uppercase">{title}</h3>
      <p className="text-gray-500 text-sm">
        {description}
      </p>
    </div>
  </div>
);


// The main component that lays out the process section
export default function ComponentTwo() {
  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
    {
      number: '02',
      title: 'Analyze',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
    {
      number: '03',
      title: 'Strategize',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
    {
      number: '04',
      title: 'Measure',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
    {
      number: '05',
      title: 'Report',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
    {
      number: '06',
      title: 'Adjust',
      description: 'Based on our findings, we develop customized digital marketing strategy tailored objective.',
    },
  ];

  return (
    <div className="bg-gray-50 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Pill */}
        <div className="mb-4">
          <span className="border border-gray-300 text-gray-500 text-xs font-semibold px-4 py-1 rounded-md">
            WORK PROGRESS
          </span>
        </div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
          Why Partner With Us Your Path To <br /> SEO & Digital Marketing Success
        </h2>

        {/* Grid of Process Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
