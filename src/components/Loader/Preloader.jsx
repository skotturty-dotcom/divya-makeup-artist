import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.jpg';

export const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#FFFDFC] z-50 flex flex-col items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#C78B74] to-[#D4AF37] shadow-2xl mb-6 flex items-center justify-center"
      >
        <img
          src={logoImg}
          alt="Divya Professional Makeup Artist Official Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-cormorant text-3xl font-bold tracking-widest text-[#2B2B2B]"
      >
        DIVYA MAKEUP ARTIST
      </motion.h2>
      
      <p className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins mt-2 font-medium">
        Crafting Timeless Luxury...
      </p>
    </div>
  );
};
