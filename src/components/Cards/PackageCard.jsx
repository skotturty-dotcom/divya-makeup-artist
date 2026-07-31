import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCrown } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const PackageCard = ({ pkg }) => {
  const { id, name, tagline, price, originalPrice, popular, badge, features } = pkg;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`rounded-[24px] overflow-hidden flex flex-col justify-between h-full relative transition-all duration-300 ${
        popular 
          ? 'bg-gradient-to-b from-[#FFFDFC] via-[#FAF5F2] to-[#F7EFEA] border-2 border-[#C78B74] shadow-2xl scale-105 z-10' 
          : 'bg-white border border-[#E9DED7] shadow-luxury shadow-luxury-hover'
      }`}
    >
      {badge && (
        <div className={`absolute top-0 right-0 py-1.5 px-5 rounded-bl-2xl text-xs font-poppins font-bold uppercase tracking-widest ${
          popular ? 'bg-gradient-to-r from-[#D4AF37] to-[#C78B74] text-white shadow-md' : 'bg-[#2B2B2B] text-white'
        }`}>
          {popular && <FaCrown className="inline mr-1 text-sm text-amber-200" />} {badge}
        </div>
      )}

      <div className="p-8 md:p-9">
        <div className="mb-6 pt-2">
          <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-1 flex items-center gap-2">
            {name}
          </h3>
          <p className="text-xs text-[#666666] font-poppins font-light leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="mb-6 p-3.5 rounded-2xl bg-white/80 border border-[#E9DED7] flex items-center justify-between">
          <span className="text-xs font-poppins font-semibold uppercase tracking-wider text-[#C78B74]">Tailored Suite</span>
          <span className="text-xs text-[#666666] font-poppins">Quote on Request</span>
        </div>

        <div className="space-y-3.5 mb-8">
          <p className="text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] flex items-center gap-1.5">
            <FaSparkles className="text-[#C78B74]" /> Included Services:
          </p>
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs text-[#2B2B2B] font-poppins leading-snug">
              <FaCheckCircle className="text-[#C78B74] mt-0.5 shrink-0 text-sm" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-8 pb-8 pt-0 mt-auto">
        <LuxuryButton 
          to={`/book-appointment?package=${id}`}
          variant={popular ? 'gold' : 'primary'} 
          className="w-full"
        >
          Book This Package
        </LuxuryButton>
      </div>
    </motion.div>
  );
};
