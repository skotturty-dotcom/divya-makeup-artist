import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowsAltH } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { beforeAfterPairs } from '../../data/galleryData';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activePairIndex, setActivePairIndex] = useState(0);
  const currentPair = beforeAfterPairs[activePairIndex];

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX || (event.touches && event.touches[0].clientX)) - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[24px] p-6 md:p-10 border border-[#E9DED7] shadow-2xl">
      <div className="text-center mb-8">
        <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
          <FaSparkles /> Interactive Transformation
        </span>
        <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-[#2B2B2B]">
          Before & After Mastery
        </h3>
        <p className="text-xs text-[#666666] font-poppins mt-2">
          Drag the slider left and right to reveal the weightless airbrush coverage & natural glow.
        </p>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {beforeAfterPairs.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActivePairIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-poppins font-medium transition-all ${
                activePairIndex === idx
                  ? 'bg-[#C78B74] text-white shadow-md'
                  : 'bg-[#FAF5F2] text-[#666666] hover:bg-[#E9DED7]'
              }`}
            >
              Transformation {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container */}
      <div 
        className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-[20px] overflow-hidden select-none cursor-ew-resize border border-[#E9DED7] shadow-inner"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image (Background) */}
        <img
          src={currentPair.after}
          alt="After Makeup Look"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-poppins font-semibold text-[#C78B74] shadow-md z-10">
          AFTER (Divya Glam)
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={currentPair.before}
            alt="Before Makeup Look"
            className="absolute top-0 left-0 h-full object-cover max-w-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="absolute top-4 left-4 bg-black/70 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-poppins font-medium shadow-md z-10">
            BEFORE
          </div>
        </div>

        {/* Divider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C78B74] text-white flex items-center justify-center shadow-2xl border-2 border-white">
            <FaArrowsAltH className="text-base" />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-center">
        <p className="font-cormorant text-xl font-bold text-[#2B2B2B]">{currentPair.title}</p>
        <p className="text-xs text-[#666666] font-poppins mt-1">{currentPair.notes}</p>
      </div>
    </div>
  );
};
