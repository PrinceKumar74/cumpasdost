import React, { useState, useEffect } from 'react';

export default function ComponentThree() {
  return (
    <section className="font-sans py-16 px-4 sm:px-6 lg:px-8">
      <AICommunityComponent />
    </section>
  );
}

// Helper component for creating interactive glowing orbs in the background
const GlowOrb = ({ className, animationDelay }) => (
  <div
    className={`absolute rounded-full bg-gradient-to-br from-purple-600 to-blue-500 blur-3xl opacity-20 animate-pulse-slow ${className}`}
    style={{ animationDelay }}
  ></div>
);

// Helper component for the floating particles in the background
const Particle = ({ i }) => (
  <div
    className="absolute w-1 h-1 bg-white rounded-full opacity-30"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${5 + Math.random() * 15}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 7}s`,
    }}
  ></div>
);

// Helper component for feature highlights
const FeaturePill = ({ icon, text }) => (
  <div className="group cd-surface px-4 py-2 rounded-full border border-[var(--cd-border)] transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-orange-500/10 hover:bg-orange-50 hover:border-orange-200">
    <span className="text-[var(--cd-text)] text-sm font-semibold flex items-center gap-2 group-hover:text-orange-600">
      {icon} {text}
    </span>
  </div>
);

// Helper component for trust indicators
const TrustIndicator = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);


// The main component for the AI Community section
function AICommunityComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const parallaxStyle = (factor) => ({
    transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
  });
  
  return (
    <div className="relative w-full cd-card py-24 px-6 overflow-hidden rounded-3xl">
      
      {/* Custom CSS animations are defined here */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        @keyframes subtle-shine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
      
      {/* Animated Background Elements with Parallax Effect */}
      <div className="absolute inset-0 transition-transform duration-500 ease-out" style={parallaxStyle(15)}>
        {/* Gradient Orbs */}
        <GlowOrb className="-top-40 -left-60 w-96 h-96" animationDelay="0s" />
        <GlowOrb className="top-1/2 -right-60 w-96 h-96" animationDelay="1.5s" />
        <GlowOrb className="-bottom-52 left-1/3 w-96 h-96" animationDelay="3s" />
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => <Particle key={i} />)}
        
        {/* Neural Network SVG Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white" />
              <circle cx="50" cy="70" r="1.5" fill="white" />
              <line x1="10" y1="10" x2="50" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="10" cy="70" r="1.5" fill="white" />
              <line x1="10" y1="10" x2="10" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      {/* Main Content with Parallax Effect */}
      <div className="relative max-w-5xl mx-auto text-center transition-transform duration-500 ease-out" style={parallaxStyle(-10)}>
        {/* Animated Icon/Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative bg-black bg-opacity-40 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl border border-white/20">
              <svg className="w-12 h-12 text-white transform group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor" className="opacity-80 group-hover:opacity-100 transition-opacity"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="cd-surface px-5 py-2 rounded-full shadow-sm">
            <p className="text-[var(--cd-text)] text-sm font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              Now accepting new members for our 2025 cohort
            </p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-[var(--cd-text)] mb-6 leading-tight tracking-tight">
          Enter the AI{" "}
          <span className="cd-gradient-text"
          style={{
            backgroundSize: '200% 200%',
            animation: 'subtle-shine 5s ease-in-out infinite'
          }}>
            Nexus
          </span>
        </h2>

        {/* Description */}
        <p className="text-[var(--cd-muted)] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Connect with innovators, access cutting-edge research, and get early access to the next generation of AI tools. Your journey into the singularity starts here.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            <FeaturePill icon="✨" text="Pre-Release Models" />
            <FeaturePill icon="🔬" text="Collaborative Research" />
            <FeaturePill icon="💾" text="Exclusive Datasets" />
            <FeaturePill icon="💬" text="Expert AMAs" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="group relative cd-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/15 transform hover:scale-105 transition-all duration-300 overflow-hidden hover:opacity-95">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Join the Nexus
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button className="cd-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-[var(--cd-text)]">
            Explore Research
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[var(--cd-muted)] text-sm">
            <TrustIndicator 
                icon={<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zM12 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 8a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>}
                text="Powered by Ethical AI Principles"
            />
            <TrustIndicator
                icon={<svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>}
                text="Join 25,000+ Builders"
            />
        </div>
      </div>
    </div>
  );
}
