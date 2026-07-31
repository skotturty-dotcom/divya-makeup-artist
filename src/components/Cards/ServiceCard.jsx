import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaStar } from 'react-icons/fa';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const ServiceCard = ({ service }) => {
  const { id, title, category, description, price, duration, image, rating, popular } = service;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[24px] border border-[#E9DED7] overflow-hidden shadow-luxury shadow-luxury-hover flex flex-col justify-between h-full relative group"
    >
      {popular && (
        <div className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-white text-[11px] font-poppins font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
          ⭐ Most Popular
        </div>
      )}

      <div>
        {/* Card Image Header */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF5F2]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#2B2B2B] text-xs font-poppins font-medium px-3 py-1 rounded-full border border-[#E9DED7]">
            {category}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
              <FaStar /> {rating || '5.0'}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#666666] font-poppins">
              <FaClock className="text-[#C78B74]" /> {duration}
            </span>
          </div>

          <h3 className="font-cinzel text-xl font-bold text-[#2B2B2B] mb-2 group-hover:text-[#C78B74] transition-colors leading-snug">
            <Link to={`/services/${id}`}>{title}</Link>
          </h3>

          <p className="text-xs text-[#666666] leading-relaxed font-poppins line-clamp-3 mb-4">
            {description}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6 pt-0 border-t border-[#E9DED7]/60 flex items-center justify-center mt-auto">
        <LuxuryButton to={`/services/${id}`} size="sm" variant="gold" className="w-full justify-center">
          View Details & Book
        </LuxuryButton>
      </div>
    </motion.div>
  );
};
