import React from 'react';
import PickOne from '../../../assets/aboutPics/picOne.png';

export default function ComponentOne() {
  return (
    <section className="font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtitle */}
          <p className="text-sm font-semibold uppercase tracking-wider cd-gradient-text">
            YOUR RELIABLE OUTSOURCED IT PARTNER
          </p>

          {/* Main Headline */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--cd-text)] sm:text-4xl lg:text-5xl">
            We Are A Creative Web Development Agency Dedicated To Crafting Stunning, User-Friendly Websites That Drive Results And Elevate Your Brand.
          </h1>
        </div>

        {/* Image Section */}
        <div className="mt-12">
          <div className="max-w-5xl mx-auto">
            <img
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              src={PickOne}
              alt="Two people looking at code on a screen"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/1200x600/e2e8f0/4a5568?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
