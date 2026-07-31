import React from 'react';
import { motion } from 'framer-motion';

export const WhyChooseCard = ({ item, index }) => {
  const Icon = item.icon;
  const numFormatted = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-[28px] p-7 border border-[#E9DED7] hover:border-[#D4AF37] bg-gradient-to-br from-white via-[#FFFDF9] to-[#FAF5F2] shadow-luxury hover:shadow-2xl flex flex-col justify-between h-full transition-all duration-500 group overflow-hidden"
    >
      {/* Top Metallic Gold Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37]" />

      {/* Background Watermark Number */}
      <span className="absolute top-4 right-5 font-cinzel text-3xl font-extrabold text-[#222222]/30 group-hover:text-[#111111]/50 transition-colors pointer-events-none">
        {numFormatted}
      </span>

      <div>
        {/* Shimmering Metallic Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#C78B74] to-[#B8735C] text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-[#D4AF37]/25 mb-6">
          <Icon className="text-2xl" />
        </div>

        {/* Cinzel Luxury Title */}
        <h3 className="font-cinzel text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C78B74] transition-colors leading-tight">
          {item.title}
        </h3>

        {/* High-Contrast Description */}
        <p className="text-sm text-[#222222] leading-relaxed font-jakarta font-normal">
          {item.description}
        </p>
      </div>

      {/* Bottom Expanding Accent Line */}
      <div className="w-8 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-500 rounded-full mt-6 opacity-60 group-hover:opacity-100" />
    </motion.div>
  );
};
