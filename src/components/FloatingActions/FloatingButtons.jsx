import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaChevronUp } from 'react-icons/fa';

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center pointer-events-auto">
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-[#2B2B2B] text-white shadow-xl hover:bg-[#C78B74] transition-colors flex items-center justify-center border border-[#E9DED7]/30"
          >
            <FaChevronUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+919381824540"
        aria-label="Call Divya Studio"
        className="w-12 h-12 rounded-full bg-[#C78B74] text-white shadow-xl flex items-center justify-center hover:bg-[#B7745F] transition-colors border border-white/20 relative group"
      >
        <FaPhoneAlt className="text-lg" />
        <span className="absolute right-14 bg-[#2B2B2B] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md font-poppins">
          Call Studio
        </span>
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919381824540?text=Hi%20Divya%2C%20I%20would%20like%20to%20inquire%20about%20bridal%20makeup%20booking."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#1EBE5D] transition-colors border border-white/30 relative group animate-pulse-slow"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-15 bg-[#2B2B2B] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md font-poppins">
          Chat on WhatsApp
        </span>
      </motion.a>

    </div>
  );
};
