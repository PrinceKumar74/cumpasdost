import React from "react";
import { useNavigate } from "react-router-dom";

function RibbonArt() {
  const bgGradients = [
    { from: "#FF4FD8", to: "#7C4DFF" },
    { from: "#7C4DFF", to: "#4DD7FF" },
    { from: "#4DD7FF", to: "#FFB74D" },
    { from: "#FFB74D", to: "#FF4FD8" },
    { from: "#34D399", to: "#60A5FA" },
    { from: "#60A5FA", to: "#A78BFA" },
    { from: "#A78BFA", to: "#FB7185" },
    { from: "#FB7185", to: "#FBBF24" },
  ];

  // No text/suits on cards (color-only)
  const cards = new Array(8).fill(null);

  // Playing-card-ish proportions (poker size ~ 2.5" x 3.5" => H/W ≈ 1.4)
  const cardW = 120;
  const cardH = 170;
  // "Khada tash" look: a bit overlapped like a hand of cards
  const stepX = 86; // < cardW => overlap
  const baseY = Math.round((260 - cardH) / 2);
  const trackW = cards.length * stepX;

  const renderCard = (_c, x, y, i) => {
    const tilt = 0; // keep cards upright (khada)
    const bg = bgGradients[i % bgGradients.length];

    return (
      <g key={`card-${i}`} transform={`translate(${x} ${y}) rotate(${tilt} ${cardW / 2} ${cardH / 2})`}>
        {/* card (multicolor outer) */}
        <rect
          x="0"
          y="0"
          width={cardW}
          height={cardH}
          rx="18"
          fill={`url(#cd-card-bg-${i % bgGradients.length})`}
          filter="url(#cd-cardShadow)"
          opacity="0.98"
        />

        {/* subtle gloss */}
        <rect x="10" y="12" width={cardW - 20} height="16" rx="10" fill="#ffffff" opacity="0.20" />
        <rect x="10" y="34" width={cardW - 20} height="8" rx="10" fill="#ffffff" opacity="0.10" />
      </g>
    );
  };

  const renderCardSet = (offsetX, keyPrefix) => (
    <g transform={`translate(${offsetX} 0)`}>
      {cards.map((c, i) =>
        renderCard(c, i * stepX, baseY, i)
      )}
    </g>
  );

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="cd-float">
        <svg
          viewBox="0 0 1200 260"
          className="w-full h-auto"
          role="img"
          aria-label="Decorative playing cards"
        >
          <defs>
            <clipPath id="cd-clip">
              <rect x="0" y="0" width="1200" height="260" rx="0" ry="0" />
            </clipPath>

            <filter id="cd-cardShadow" x="-20%" y="-50%" width="140%" height="200%">
              <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#000000" floodOpacity="0.16" />
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.10" />
            </filter>

            {bgGradients.map((g, idx) => (
              <linearGradient key={idx} id={`cd-card-bg-${idx}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={g.from} />
                <stop offset="100%" stopColor={g.to} />
              </linearGradient>
            ))}
          </defs>

          {/* looping playing cards */}
          <g clipPath="url(#cd-clip)">
            <g className="cd-card-marquee" style={{ "--cd-track-w": `${trackW}px` }}>
              <g className="cd-card-track">
                {renderCardSet(0, "a")}
                {renderCardSet(trackW, "b")}
              </g>
            </g>
          </g>

          {/* ribbon removed (per request) */}
        </svg>
      </div>

      {/* soft “card” shadow under ribbon */}
      <div className="pointer-events-none absolute left-1/2 -bottom-6 h-10 w-[70%] -translate-x-1/2 rounded-full bg-black/10 blur-2xl" />
    </div>
  );
}

const ComponentOne = () => {
  const navigate = useNavigate();

  const handlePrimary = () => {
    window.trackCTA && window.trackCTA();
    window.metaCTA && window.metaCTA();
    navigate("/contact");
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f6f7]">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-400/20 via-indigo-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-44 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-300/20 via-pink-300/20 to-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-xs font-semibold tracking-widest text-gray-700 backdrop-blur">
              CUMPASDOST
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              DIGITAL AGENCY
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your team’s command
              <span className="block">center for tasks &amp; productivity.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Plan, build, and launch faster with a single partner for{" "}
              <span className="font-semibold text-gray-900">design</span>,{" "}
              <span className="font-semibold text-gray-900">development</span>, and{" "}
              <span className="font-semibold text-gray-900">growth</span>.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handlePrimary}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:from-indigo-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Start free trial
              </button>
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="w-full sm:w-auto rounded-full border border-gray-300 bg-white/80 px-7 py-3 text-sm font-semibold text-gray-900 backdrop-blur hover:bg-white"
              >
                View services
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              No long contracts. Cancel anytime.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <RibbonArt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentOne;
