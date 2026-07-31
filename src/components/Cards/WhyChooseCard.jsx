import React from 'react';
import { motion } from 'framer-motion';

export const WhyChooseCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative rounded-[24px] p-7 border border-[#E9DED7] hover:border-[#C78B74] bg-white shadow-luxury hover:shadow-xl flex flex-col justify-between h-full transition-all duration-300 group overflow-hidden"
    >
      {/* Top Rose Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37]" />

      <div>
        {/* Icon Container */}
        <div className="w-13 h-13 rounded-2xl bg-[#F7EFEA] border border-[#E9DED7] group-hover:bg-[#C78B74] group-hover:border-[#C78B74] text-[#C78B74] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm mb-5">
          <Icon className="text-2xl" />
        </div>

        {/* Clear Bold Title */}
        <h3 className="font-cormorant text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C78B74] transition-colors leading-tight">
          {item.title}
        </h3>

        {/* Clear Readable Description */}
        <p className="text-sm text-[#444444] leading-relaxed font-poppins font-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
