import React from 'react';
import { Link } from 'react-router-dom';

const LetHelp = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--cd-text)] mb-6">
          Let us help.
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-[var(--cd-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Get started with our free-of-charge, personalized support. Create your custom ads plan with us.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Action Button */}
          <Link to ='/contact'><button className="px-8 py-4 cd-gradient hover:opacity-95 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--cd-ring)] min-w-[180px] shadow-lg shadow-indigo-600/15">
            Primary Action
          </button></Link>
          
          {/* Secondary Action Button */}
          <Link to ='/contact'><button className="px-8 py-4 cd-surface text-[var(--cd-text)] font-semibold border border-[var(--cd-border)] rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--cd-ring)] min-w-[180px] hover:bg-white">
            Secondary Action
          </button></Link>
        </div>
        
      </div>
    </section>
  );
};

export default LetHelp;