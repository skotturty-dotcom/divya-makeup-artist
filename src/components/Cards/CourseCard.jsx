import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaClock, FaCheckCircle, FaAward } from 'react-icons/fa';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const CourseCard = ({ course }) => {
  const { id, title, category, duration, timing, fees, originalFees, badge, level, certification, image, overview, curriculum, highlights } = course;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[24px] border border-[#E9DED7] overflow-hidden shadow-luxury shadow-luxury-hover flex flex-col justify-between h-full group"
    >
      <div>
        {/* Header Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF5F2]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-[#C78B74] text-white text-[11px] font-poppins font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {category}
            </span>
          </div>

          {badge && (
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-white text-[11px] font-poppins font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              ✨ {badge}
            </div>
          )}

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-poppins">
            <span className="flex items-center gap-1.5"><FaClock className="text-[#D4AF37]" /> {duration}</span>
            <span className="flex items-center gap-1.5"><FaGraduationCap className="text-[#D4AF37]" /> {level}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7">
          <h3 className="font-cormorant text-2xl font-bold text-[#2B2B2B] mb-2 group-hover:text-[#C78B74] transition-colors">
            {title}
          </h3>

          <p className="text-xs text-[#666666] font-poppins leading-relaxed mb-5 line-clamp-3">
            {overview}
          </p>

          <div className="p-3.5 rounded-xl bg-[#FAF5F2] border border-[#E9DED7] mb-5">
            <p className="text-xs font-poppins font-semibold text-[#2B2B2B] flex items-center gap-1.5 mb-1">
              <FaAward className="text-[#C78B74]" /> {certification}
            </p>
            <p className="text-[11px] text-[#666666] font-poppins">{timing}</p>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-xs font-poppins font-semibold text-[#2B2B2B] uppercase tracking-wider">Key Modules:</p>
            {curriculum.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#666666] font-poppins">
                <FaCheckCircle className="text-[#C78B74] mt-0.5 shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="px-7 pb-7 pt-0 border-t border-[#E9DED7]/60 flex items-center justify-between gap-4 mt-auto">
        <div>
          <span className="text-xs text-[#666666] line-through block font-poppins">{originalFees}</span>
          <span className="font-cormorant text-3xl font-bold text-[#C78B74]">{fees}</span>
        </div>

        <LuxuryButton to={`/book-appointment?course=${id}`} variant="gold" size="sm">
          Enroll Now
        </LuxuryButton>
      </div>
    </motion.div>
  );
};
