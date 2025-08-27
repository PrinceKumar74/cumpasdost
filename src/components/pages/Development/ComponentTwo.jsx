import React from 'react';

// --- SVG Icon Components ---
// Using generic icons based on the images provided.
// You can replace these with your own SVG or <img> tags.

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);

const MaintenanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const AiIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const SoftwareDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
);


// --- Main Component ---
export default function ComponentTwo() {
  // Data for the service cards, based on the provided images.
  const services = [
    {
      Icon: WebIcon,
      title: 'Web Apps',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['REACT', 'ANGULAR', 'VUE', 'HTML5', 'CSS'],
    },
    {
      Icon: MobileIcon,
      title: 'Mobile Apps',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['IOS', 'ANDROID', 'REACT NATIVE', 'FLUTTER', 'KOTLIN'],
    },
    {
      Icon: WebsiteIcon,
      title: 'Business Websites',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['SHOPIFY', 'WORDPRESS', 'DRUPAL', 'WOOCOMMERCE'],
    },
    {
      Icon: MaintenanceIcon,
      title: 'Maintenance and Testing',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['GIT', 'GITHUB', 'JIRA', 'DOCKER'],
    },
    {
      Icon: AiIcon,
      title: 'AI MODAL',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['GRAPHQL', 'POSTMAN', 'LARAVEL', 'NODE.JS', 'DJANGO'],
    },
    {
      Icon: SoftwareDevIcon,
      title: 'Software Development',
      description: 'From complex applications to bespoke platforms, we deliver high-performance systems that align with your goals and fuel your business growth.',
      tech: ['FRONTEND', 'BACKEND', 'FULL STACK', 'DEVOPS', 'CLOUD'],
    },
  ];

  return (
    <div className="bg-white font-sans py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-orange-500 border border-orange-500 rounded-md px-3 py-1 text-sm font-semibold tracking-wider">
            SERVICES
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What we can do for you
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            From new digital projects to process optimization and support, we partner with businesses to deliver impactful results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1e1e1e] text-white p-8 rounded-2xl flex flex-col shadow-lg">
              {/* Icon */}
              <div className="bg-white p-4 rounded-xl self-start mb-6">
                <service.Icon />
              </div>
              
              {/* Card Content */}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm font-semibold tracking-widest text-gray-400 mb-4">DEV & SUPPORT</p>
              <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                {service.tech.map((tech, i) => (
                  <React.Fragment key={i}>
                    <span>{tech}</span>
                    {i < service.tech.length - 1 && <span className="text-orange-500">&bull;</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
