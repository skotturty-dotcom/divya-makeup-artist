import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowsAltH } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { beforeAfterPairs } from '../../data/galleryData';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activePairIndex, setActivePairIndex] = useState(0);
  const containerRef = useRef(null);

  const currentPair = beforeAfterPairs[activePairIndex];

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = event.clientX || (event.touches && event.touches[0].clientX);
    if (clientX === undefined) return;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] p-6 md:p-10 border-2 border-[#D4AF37]/30 shadow-2xl">
      
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2 bg-[#FAF5F2] px-4 py-1.5 rounded-full border border-[#E9DED7]">
          <FaSparkles className="text-[#D4AF37]" /> Real Client Transformations
        </span>
        <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-1">
          Before & After Artistry Mastery
        </h3>
        <p className="text-xs md:text-sm text-[#666666] font-jakarta font-medium mt-2">
          Drag the slider left and right to reveal weightless airbrush coverage & natural radiance.
        </p>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-6">
          {beforeAfterPairs.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePairIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4.5 py-2 rounded-full text-xs font-jakarta font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePairIndex === idx
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37] text-white shadow-md scale-105'
                  : 'bg-[#FAF5F2] text-[#666666] hover:bg-[#E9DED7]'
              }`}
            >
              Look {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[24px] overflow-hidden select-none cursor-ew-resize border-2 border-[#E9DED7] shadow-xl group"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* AFTER IMAGE (Background) */}
        <img
          src={currentPair.after}
          alt="After Makeup Look"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#C78B74] text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-jakarta font-bold shadow-lg z-10">
          AFTER (Divya Glam)
        </div>

        {/* BEFORE IMAGE (Clipped Foreground) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r-2 border-white shadow-2xl"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentPair.before}
              alt="Before Makeup Look"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute top-4 left-4 bg-black/80 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-jakarta font-bold shadow-lg z-20">
            BEFORE (Pre-Glam)
          </div>
        </div>

        {/* Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center shadow-2xl border-2 border-white group-hover:scale-110 transition-transform">
            <FaArrowsAltH className="text-lg" />
          </div>
        </div>
      </div>

      {/* Info Box Below */}
      <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#FAF5F2] via-white to-[#FAF5F2] border-2 border-[#D4AF37]/30 text-center shadow-sm">
        <p className="font-cinzel text-xl font-bold text-[#1A1A1A]">{currentPair.title}</p>
        <p className="text-xs text-[#C78B74] font-jakarta font-semibold uppercase tracking-wider mt-1">{currentPair.subtitle}</p>
        <p className="text-xs text-[#666666] font-jakarta font-medium mt-2 max-w-xl mx-auto leading-relaxed">{currentPair.notes}</p>
      </div>
    </div>
  );
};
