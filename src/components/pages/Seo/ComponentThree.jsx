import React from 'react';

// A simple CTA (Call to Action) component
export default function ComponentThree() {
  return (
    <section className="font-sans py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center cd-card py-14 px-6 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-12 cd-gradient"></div>
        <div className="relative">
        
        {/* Main Headline */}
        <h2 className="text-3xl font-extrabold text-[var(--cd-text)] sm:text-4xl">
          <span className="block">Let us Shape Your Story.</span>
        </h2>
        
        {/* Sub-headline */}
        <p className="mt-4 text-lg leading-6 text-[var(--cd-muted)]">
          Get started with our free-of-charge, personalized support. Create your custom design plan with us.
        </p>
        
        {/* Action Button */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-block cd-gradient text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-indigo-600/15 hover:opacity-95 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Primary Action
          </a>
        </div>
        
        </div>
      </div>
    </section>
  );
}
