import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

const words = [
  "Web Design",
  "Web Development",
  "2D-Model",
  "3D-Model",
  "Strategy",
];

const ComponentOne = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ========= MOBILE DETECT ========= */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ========= TEXT ROTATION ========= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % words.length);
    }, isMobile ? 3000 : 2000);
    return () => clearInterval(interval);
  }, [isMobile]);

  /* ========= CURSOR GLOW ========= */
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);

  useEffect(() => {
    if (isMobile) return;
    const move = (e) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  /* ========= CTA HANDLER ========= */
  const handleCTA = () => {
    // GA4
    window.trackCTA && window.trackCTA();

    // Meta Pixel
    window.metaCTA && window.metaCTA();

    // Navigate to Contact page
    navigate("/contact");
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      {/* 🌟 CURSOR GLOW */}
      {!isMobile && (
        <motion.div
          style={{ x: cursorX, y: cursorY }}
          className="pointer-events-none fixed top-0 left-0
          w-[400px] h-[400px]
          bg-orange-500/25
          blur-[150px]
          rounded-full z-10"
        />
      )}

      {/* 🌌 STARS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(500)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["-10%", "120%"],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: isMobile ? 20 : 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-16 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-6xl rounded-3xl
          bg-white/5 backdrop-blur-xl
          border border-white/20
          shadow-2xl"
        >
          <div className="p-6 sm:p-10 md:p-16 text-white">

            {/* HEADER */}
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-8 h-8 bg-white text-black font-bold rounded-full flex items-center justify-center">
                S
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Campus Dost
                </h2>
                <p className="text-xs text-gray-400">
                  WE MAKE BRAND VIRAL
                </p>
              </div>
            </div>

            {/* MAIN TEXT */}
            <div className="max-w-3xl mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5">
                All Under <br />
                One Roof{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="block sm:inline text-orange-400"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Full-service digital agency for{" "}
                <span className="font-semibold text-white">
                  marketing, design & web development
                </span>
                .
              </p>
            </div>

            {/* CTA BUTTON */}
            <motion.button
              onClick={handleCTA}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600
              px-8 py-3 rounded-lg font-bold shadow-xl"
            >
              Let’s Get Started!
            </motion.button>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComponentOne;
