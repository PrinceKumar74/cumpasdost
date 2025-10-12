import React from 'react';

// 1. सबसे पहले अपनी इमेज फाइल को इम्पोर्ट करें
//    यह पाथ आपके दिए गए फोल्डर स्ट्रक्चर के हिसाब से सही है
import modelImage from '../../../assets/image/3dimage.png';

// Main App component
export default function App() {
  return (
    <div className="bg-slate-900 font-sans p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-screen">
      <ComponentFour />
    </div>
  );
}

// Helper component
const ModelFeature = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center border border-slate-600 group-hover:bg-pink-500 group-hover:border-pink-400 transition-all duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

// The main component
export function ComponentFour() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-white/10 max-w-7xl mx-auto">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative grid md:grid-cols-2 gap-8 md:gap-0 items-center">
        {/* Text Content Side */}
        <div className="p-8 md:p-12 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">2D & 3D Model</span> Experiences
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            From virtual try-ons that boost customer confidence to interactive product visualizations that drive engagement, we create immersive digital experiences that bring your ideas to life.
          </p>

          <div className="space-y-6 mb-10">
            {/* ModelFeature components here... */}
            <ModelFeature
              icon={<svg className="w-6 h-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-6 9L12 9l2 2m-2-2l-2 2" /></svg>}
              title="Virtual Try-Ons"
              description="Allow users to visualize products like glasses, apparel, and more on themselves."
            />
            <ModelFeature
              icon={<svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /><path d="M12 21a9 9 0 009-9" /><path d="M3.5 12a8.5 8.5 0 0017 0" /></svg>}
              title="Product Visualization"
              description="Offer interactive 360° views and detailed models of your products."
            />
          </div>

          <button className="group relative bg-gradient-to-r from-pink-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Start Your Project
            <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        {/* Image Side */}
        <div className="p-8 md:p-12 order-1 md:order-2 flex items-center justify-center min-h-[400px] md:min-h-0">
          {/* 2. इम्पोर्ट किये गए वेरिएबल को src में इस्तेमाल करें */}
          <img
            src={modelImage}
            alt="3D Models"
            className="w-full max-w-sm h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}