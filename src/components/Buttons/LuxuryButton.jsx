import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LuxuryButton = ({ 
  children, 
  to, 
  onClick, 
  type = "button", 
  variant = "primary", 
  size = "md",
  className = "",
  icon = null
}) => {
  const baseStyles = "inline-flex items-center justify-center font-poppins font-semibold rounded-full tracking-[1px] transition-all duration-300 transform active:scale-95 shadow-md cursor-pointer relative overflow-hidden group";

  const variants = {
    primary: "bg-[#C78B74] hover:bg-[#B7745F] text-white shadow-[#C78B74]/25 hover:shadow-lg hover:shadow-[#C78B74]/35",
    secondary: "bg-[#F7EFEA] hover:bg-[#E9DED7] text-[#2B2B2B] border border-[#E9DED7]",
    outline: "bg-transparent border-2 border-[#C78B74] text-[#C78B74] hover:bg-[#C78B74] hover:text-white",
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#C78B74] text-white hover:opacity-95 shadow-lg shadow-[#D4AF37]/20",
    dark: "bg-[#2B2B2B] hover:bg-black text-white"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content}
    </motion.button>
  );
};
