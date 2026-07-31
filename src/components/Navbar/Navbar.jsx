import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiCalendar } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { LuxuryButton } from '../Buttons/LuxuryButton';

import logoImg from '../../assets/logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  const serviceSubLinks = [
    { name: 'Bridal Makeup', path: '/bridal-makeup' },
    { name: 'Airbrush Makeup', path: '/airbrush-makeup' },
    { name: 'HD Makeup', path: '/hd-makeup' },
    { name: 'Reception Makeup', path: '/reception-makeup' },
    { name: 'Engagement & Pelli Kuthuru', path: '/engagement-makeup' },
    { name: 'Party Makeup', path: '/party-makeup' },
    { name: 'Saree Draping', path: '/saree-draping' },
    { name: 'Bridal Hairstyling & Poola Jada', path: '/bridal-hairstyle' },
  ];

  const locationSubLinks = [
    { name: 'Nizampet', path: '/location/bridal-makeup-artist-nizampet' },
    { name: 'Kukatpally & KPHB', path: '/location/bridal-makeup-artist-kukatpally' },
    { name: 'Bachupally', path: '/location/bridal-makeup-artist-bachupally' },
    { name: 'Miyapur', path: '/location/bridal-makeup-artist-miyapur' },
    { name: 'Pragathi Nagar', path: '/location/bridal-makeup-artist-pragathi-nagar' },
    { name: 'Madhapur & Gachibowli', path: '/location/bridal-makeup-artist-madhapur' },
    { name: 'Jubilee Hills', path: '/location/bridal-makeup-artist-jubilee-hills' },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setLocationDropdown(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-nav py-3.5 shadow-sm bg-white/90 backdrop-blur-md border-b border-[#E8D5C8]/40' 
        : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
    }`}>
      <div className="max-w-[1280px] w-[90%] mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="Makeover by Divyas Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37] shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className={`font-serif text-lg sm:text-xl font-bold tracking-[2px] leading-none ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-white'
            }`}>
              MAKEOVER BY DIVYAS
            </span>
            <span className={`text-[9px] tracking-[2px] uppercase font-sans font-semibold mt-1 ${
              isScrolled ? 'text-[#C78B74]' : 'text-[#D4AF37]'
            }`}>
              Nizampet, Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Center */}
        <nav className="hidden xl:flex items-center gap-6">
          <NavLink to="/" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>Home</NavLink>
          
          <NavLink to="/about" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/about' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>About</NavLink>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <Link to="/services" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium flex items-center gap-1 transition-colors py-2 ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
            }`}>
              Services <FaChevronDown className="text-[10px]" />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white border border-[#E8D5C8] rounded-xl shadow-xl py-2 z-50">
                {serviceSubLinks.map((s, idx) => (
                  <Link key={idx} to={s.path} className="block px-4 py-2 text-xs text-[#2B2B2B] hover:bg-[#FAF4F0] hover:text-[#C78B74] font-medium">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative" onMouseEnter={() => setLocationDropdown(true)} onMouseLeave={() => setLocationDropdown(false)}>
            <span className={`text-xs uppercase tracking-[1.5px] font-sans font-medium flex items-center gap-1 cursor-pointer transition-colors py-2 ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
            }`}>
              Locations <FaChevronDown className="text-[10px]" />
            </span>

            {locationDropdown && (
              <div className="absolute top-full left-0 w-56 bg-white border border-[#E8D5C8] rounded-xl shadow-xl py-2 z-50">
                {locationSubLinks.map((locItem, idx) => (
                  <Link key={idx} to={locItem.path} className="block px-4 py-2 text-xs text-[#2B2B2B] hover:bg-[#FAF4F0] hover:text-[#C78B74] font-medium">
                    {locItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/bridal-packages" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/bridal-packages' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>Bridal Packages</NavLink>

          <NavLink to="/gallery" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/gallery' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>Gallery</NavLink>

          <NavLink to="/blog" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/blog' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>Blog</NavLink>

          <NavLink to="/contact" className={`text-xs uppercase tracking-[1.5px] font-sans font-medium transition-colors ${
            location.pathname === '/contact' ? 'text-[#C78B74] font-bold' : isScrolled ? 'text-[#2B2B2B]' : 'text-white/90'
          }`}>Contact</NavLink>
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            />

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
                    <img src={logoImg} alt="Divya Logo" className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]" />
                    <span className="font-serif text-lg font-bold">MAKEOVER BY DIVYAS</span>
                  </Link>
                  <button onClick={closeMenu} aria-label="Close menu" className="p-2 rounded-full hover:bg-[#FAF5F2]">
                    <HiX className="text-xl" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 py-6">
                  <NavLink to="/" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Home</NavLink>
                  <NavLink to="/about" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">About</NavLink>
                  <NavLink to="/bridal-makeup" onClick={closeMenu} className="px-4 py-2 text-sm font-medium text-[#C78B74]">Bridal Makeup Artist</NavLink>
                  <NavLink to="/airbrush-makeup" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Airbrush Makeup Nizampet</NavLink>
                  <NavLink to="/hd-makeup" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">HD Makeup Artist</NavLink>
                  <NavLink to="/reception-makeup" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Reception Makeup</NavLink>
                  <NavLink to="/saree-draping" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Saree Draping</NavLink>
                  <NavLink to="/bridal-hairstyle" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Bridal Hairstyling & Poola Jada</NavLink>
                  <NavLink to="/location/bridal-makeup-artist-nizampet" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Location: Nizampet</NavLink>
                  <NavLink to="/blog" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Blog</NavLink>
                  <NavLink to="/contact" onClick={closeMenu} className="px-4 py-2 text-sm font-medium">Contact</NavLink>
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E9DED7] flex flex-col gap-4">
                <LuxuryButton to="/book-appointment" onClick={closeMenu} className="w-full">
                  Book Appointment
                </LuxuryButton>
                <div className="flex items-center justify-center gap-4 text-xs text-[#666666]">
                  <a href="tel:+919381824540" className="flex items-center gap-1 hover:text-[#C78B74]">
                    <HiPhone className="text-[#C78B74]" /> +91 93818 24540
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
