import React from 'react';
import picTwo from '../../../assets/aboutPics/picTwo.png';

const OurStory = () => {
  return (
    <section className="font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-0 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content Section */}
          <div className="lg:w-1/2 text-[var(--cd-text)]">
            <p className="inline-block cd-surface rounded-full px-4 py-1 text-sm font-semibold tracking-wider text-[var(--cd-muted)] mb-6">
              OUR STORY
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We are an agency that is an expert for more than 5 years
            </h1>
            <p className="text-[var(--cd-muted)] mb-6 leading-relaxed">
              For more than 5 years, we have delivered excellence in technology and marketing. Our expert team blends creativity with strategy to provide impactful solutions that drive business growth and brand success.
            </p>
            <p className="text-[var(--cd-muted)] leading-relaxed">
             Trusted by clients for over 5 years, we provide innovative, reliable, and result-driven services. From startups to enterprises, our solutions empower businesses to scale faster and achieve their true potential.
            </p>
            
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img 
              src={picTwo} 
              alt="Team working on laptops" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-black/5"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
