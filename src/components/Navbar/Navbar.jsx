import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiCalendar } from 'react-icons/hi';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { LuxuryButton } from '../Buttons/LuxuryButton';

import logoImg from '../../assets/logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Packages', path: '/bridal-packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-nav py-3.5 shadow-sm' 
        : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5 text-white'
    }`}>
      <div className="max-w-[1280px] w-[90%] mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Divya Professional Makeup Artist Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37] shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`font-cinzel text-xl font-bold tracking-[3px] leading-none ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-white'
            }`}>
              DIVYA
            </span>
            <span className={`text-[9px] tracking-[3px] uppercase font-jakarta font-semibold mt-1 ${
              isScrolled ? 'text-[#C78B74]' : 'text-[#D4AF37]'
            }`}>
              Makeup Artist
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Center */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `relative text-xs uppercase tracking-[1.5px] font-poppins font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-[#C78B74] font-semibold' 
                    : isScrolled 
                      ? 'text-[#2B2B2B] hover:text-[#C78B74]' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C78B74] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <LuxuryButton to="/book-appointment" size="sm" icon={<HiCalendar className="text-base" />}>
            Book Appointment
          </LuxuryButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className={`xl:hidden p-2.5 rounded-full transition-colors ${
            isScrolled ? 'text-[#2B2B2B] hover:bg-[#F7EFEA]' : 'text-white hover:bg-white/10'
          }`}
        >
          {mobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-[#FFFDFC] text-[#2B2B2B] z-50 shadow-2xl flex flex-col justify-between p-6 xl:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E9DED7]">
                  <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
                    <img
                      src={logoImg}
                      alt="Divya Logo"
                      className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
                    />
                    <span className="font-cormorant text-xl font-bold tracking-wider">DIVYA</span>
                  </Link>
                  <button 
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 rounded-full hover:bg-[#FAF5F2] text-[#2B2B2B]"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 py-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `px-4 py-3 rounded-2xl text-sm font-poppins font-medium transition-all ${
                        isActive
                          ? 'bg-[#F7EFEA] text-[#C78B74] font-semibold translate-x-1'
                          : 'hover:bg-[#FAF5F2] text-[#666666]'
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E9DED7] flex flex-col gap-4">
                <LuxuryButton to="/book-appointment" onClick={closeMenu} className="w-full">
                  Book Appointment
                </LuxuryButton>

                <div className="flex items-center justify-center gap-4 text-xs text-[#666666]">
                  <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-[#C78B74]">
                    <HiPhone className="text-[#C78B74]" /> +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
