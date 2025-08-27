import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Web Design", "Web Development", "Brand", "Strategy"];

const ComponentOne = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-red-600 to-orange-500 opacity-90"></div>

        {/* Content Container */}
        <div className="relative z-10 p-8 md:p-16 text-white">
          {/* Top Section: Logo and Social Media */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">S</div>
              <span className="text-2xl font-semibold">Cumpas Dost</span>
              <span className="text-sm text-gray-200">WE MAKE BRAND VIRAL</span>
            </div>
            <div className="flex flex-col space-y-4">
              {/* Social media icons unchanged */}
              {/* ... (Your SVG icons remain intact here) */}
            </div>
          </div>

          {/* Main Content: Headline and Description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-nowrap">
              All Under <br />
              One Roof{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-orange-400 inline-block ml-1 whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Cumpas Dost is a full-service digital solutions agency with disciplines in{' '}
              <span className="font-semibold">digital marketing, design, and website development</span>, focused on understanding you.
            </p>
          </div>

          {/* Call to Action Button */}
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Let's get Started!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;