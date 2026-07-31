import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-5 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        const numFormatted = String(idx + 1).padStart(2, '0');

        return (
          <div
            key={idx}
            className={`rounded-[24px] border transition-all duration-500 overflow-hidden ${
              isOpen 
                ? 'bg-gradient-to-r from-white via-[#FFFDF9] to-white border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 scale-[1.01]' 
                : 'bg-white/90 border-[#E9DED7] hover:border-[#C78B74]/50 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-6 md:p-7 text-left flex items-center justify-between gap-5 cursor-pointer focus:outline-none group"
            >
              <div className="flex items-center gap-4 md:gap-5">
                {/* Number Badge */}
                <span className={`w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center font-cinzel font-bold text-sm md:text-base shrink-0 transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white shadow-md' 
                    : 'bg-[#FAF5F2] text-[#C78B74] group-hover:bg-[#C78B74] group-hover:text-white'
                }`}>
                  {numFormatted}
                </span>

                {/* Question Text */}
                <span className={`font-cinzel text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isOpen ? 'text-[#C78B74]' : 'text-[#1A1A1A] group-hover:text-[#C78B74]'
                }`}>
                  {faq.question}
                </span>
              </div>

              {/* Toggle Icon */}
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${
                isOpen 
                  ? 'bg-[#C78B74] text-white rotate-180 shadow-md' 
                  : 'bg-[#FAF5F2] text-[#666666] group-hover:bg-[#FAF5F2] group-hover:text-[#C78B74]'
              }`}>
                <FaChevronDown className="text-xs" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-6 md:px-8 pb-7 pt-2 text-sm md:text-[15px] text-[#444444] font-jakarta leading-relaxed border-t border-[#E9DED7]/50 mt-1">
                    <p className="pt-4 flex items-start gap-3">
                      <FaSparkles className="text-[#D4AF37] text-base shrink-0 mt-1" />
                      <span>{faq.answer}</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
