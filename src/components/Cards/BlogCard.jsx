import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUser, FaArrowRight } from 'react-icons/fa';

export const BlogCard = ({ post }) => {
  const { id, title, category, readTime, date, author, image, excerpt } = post;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[24px] border border-[#E9DED7] overflow-hidden shadow-luxury shadow-luxury-hover flex flex-col justify-between h-full group"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF5F2]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 bg-[#C78B74] text-white text-[11px] font-poppins font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        <div className="p-7">
          <div className="flex items-center gap-4 text-xs text-[#666666] font-poppins mb-3">
            <span className="flex items-center gap-1.5"><FaUser className="text-[#C78B74]" /> {author}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><FaClock className="text-[#C78B74]" /> {readTime}</span>
          </div>

          <h3 className="font-cormorant text-2xl font-bold text-[#2B2B2B] mb-3 group-hover:text-[#C78B74] transition-colors leading-tight">
            <Link to={`/blog/${id}`}>{title}</Link>
          </h3>

          <p className="text-xs text-[#666666] font-poppins leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>
        </div>
      </div>

      <div className="px-7 pb-7 pt-0 border-t border-[#E9DED7]/60 flex items-center justify-between mt-auto">
        <span className="text-xs text-[#666666] font-poppins">{date}</span>
        <Link 
          to={`/blog/${id}`} 
          className="text-xs font-poppins font-semibold text-[#C78B74] hover:text-[#B7745F] inline-flex items-center gap-2 group/btn"
        >
          Read Article <FaArrowRight className="transition-transform group-hover/btn:translate-x-1 text-xs" />
        </Link>
      </div>
    </motion.article>
  );
};
