import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaStar, FaCheckCircle, FaCalendarCheck, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, title, category, description, fullDescription, duration, image, rating, popular, benefits } = service;

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-[24px] border overflow-hidden shadow-luxury flex flex-col justify-between h-full relative transition-all duration-300 ${
        isExpanded ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/20 shadow-2xl' : 'border-[#E9DED7] hover:border-[#C78B74]'
      }`}
    >
      {popular && (
        <div className="absolute top-4 right-4 z-10 bg-[#D4AF37] text-white text-[11px] font-jakarta font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
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
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          
          <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#2B2B2B] text-xs font-jakarta font-semibold px-3 py-1 rounded-full border border-[#E9DED7]">
            {category}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
              <FaStar /> {rating || '5.0'}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#1A1A1A] font-jakarta font-medium">
              <FaClock className="text-[#C78B74]" /> {duration}
            </span>
          </div>

          <h3 className="font-cinzel text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
            <Link to={`/services/${id}`}>{title}</Link>
          </h3>

          <p className="text-sm text-[#222222] leading-relaxed font-jakarta font-normal line-clamp-3 mb-2">
            {description}
          </p>
        </div>
      </div>

      {/* Expanded Info Area (Opens Top to Down) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-[#FAF5F2] border-t border-[#E9DED7]"
          >
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-cinzel text-base font-bold text-[#1A1A1A] mb-2">Full Service Details</h4>
                <p className="text-xs sm:text-sm text-[#222222] font-jakarta leading-relaxed">
                  {fullDescription || description}
                </p>
              </div>

              {benefits && benefits.length > 0 && (
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-[#C78B74] uppercase tracking-wider mb-2">Included Highlights</h4>
                  <ul className="space-y-1.5">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#1A1A1A] font-jakarta">
                        <FaCheckCircle className="text-[#D4AF37] text-xs mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Links */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <LuxuryButton 
                  to={`/book-appointment?service=${id}`} 
                  variant="gold" 
                  size="sm" 
                  className="w-full justify-center"
                  icon={<FaCalendarCheck />}
                >
                  Book Appointment Now
                </LuxuryButton>
                <LuxuryButton 
                  to={`/services/${id}`} 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center"
                  icon={<FaArrowRight className="text-xs" />}
                >
                  Dedicated Page
                </LuxuryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Toggle Button */}
      <div className="px-6 pb-6 pt-3 border-t border-[#E9DED7]/60 flex items-center justify-center mt-auto bg-white">
        <button
          onClick={toggleExpand}
          className={`w-full py-2.5 px-5 rounded-full font-jakarta text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md ${
            isExpanded 
              ? 'bg-[#1A1A1A] text-white hover:bg-black' 
              : 'bg-gradient-to-r from-[#D4AF37] to-[#C78B74] text-white hover:shadow-lg hover:scale-[1.01]'
          }`}
        >
          <span>{isExpanded ? 'Hide Details' : 'View Details & Book'}</span>
          <FaChevronDown className={`text-xs transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </motion.div>
  );
};
