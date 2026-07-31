import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp, 
  FaPinterestP, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaCheckCircle
} from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { LuxuryButton } from '../Buttons/LuxuryButton';

import logoImg from '../../assets/logo.jpg';
import insta1 from '../../assets/insta_work/insta_img1.jpeg';
import insta3 from '../../assets/insta_work/insta_img3.jpeg';
import insta4 from '../../assets/insta_work/insta_img4.jpeg';
import insta5 from '../../assets/insta_work/insta_img5.jpeg';
import insta9 from '../../assets/insta_work/insta_img9.jpeg';
import insta12 from '../../assets/insta_work/insta_img12.jpeg';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const instagramPosts = [
    { id: 1, img: insta1 },
    { id: 2, img: insta3 },
    { id: 3, img: insta4 },
    { id: 4, img: insta5 },
    { id: 5, img: insta9 },
    { id: 6, img: insta12 },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 relative overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C78B74]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] w-[90%] mx-auto relative z-10">
        
        {/* Top Newsletter & Banner Section */}
        <div className="bg-[#262626] border border-[#E9DED7]/15 rounded-[24px] p-8 md:p-12 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[#C78B74] font-sans text-xs uppercase tracking-[2px] font-semibold flex items-center justify-center lg:justify-start gap-2">
              <FaSparkles /> Stay In Touch
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-white">
              Book the Best Bridal Makeup Artist in Nizampet, Hyderabad
            </h3>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/book-appointment" className="bg-[#C78B74] hover:bg-[#b07560] text-white px-6 py-3 rounded-full font-medium shadow-md">
              Book Appointment
            </Link>
            <a href="https://wa.me/919381824540" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3 rounded-full font-medium shadow-md flex items-center gap-2">
              <FaWhatsapp className="text-xl" /> WhatsApp Now
            </a>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Makeover by Divyas Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider leading-none text-white">MAKEOVER BY DIVYAS</span>
                <span className="text-[10px] tracking-[3px] uppercase font-sans font-medium text-[#C78B74]">Nizampet, Hyderabad</span>
              </div>
            </Link>
            <p className="text-white/70 text-xs leading-relaxed font-sans font-light">
              Nizampet, Hyderabad's premier bridal studio for HD bridal makeup, silicone airbrushing, reception glam, saree draping, & Poola Jada.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/beautify_with_divya" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919381824540" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Col 2: Service Pages Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Services
            </h4>
            <ul className="space-y-2 font-sans text-xs text-white/70">
              <li><Link to="/bridal-makeup" className="hover:text-[#C78B74] transition-colors">Bridal Makeup Artist</Link></li>
              <li><Link to="/airbrush-makeup" className="hover:text-[#C78B74] transition-colors">Airbrush Makeup Nizampet</Link></li>
              <li><Link to="/hd-makeup" className="hover:text-[#C78B74] transition-colors">HD Makeup Artist</Link></li>
              <li><Link to="/reception-makeup" className="hover:text-[#C78B74] transition-colors">Reception Makeup</Link></li>
              <li><Link to="/engagement-makeup" className="hover:text-[#C78B74] transition-colors">Engagement & Pelli Kuthuru</Link></li>
              <li><Link to="/party-makeup" className="hover:text-[#C78B74] transition-colors">Party Makeup Artist</Link></li>
              <li><Link to="/saree-draping" className="hover:text-[#C78B74] transition-colors">Saree Draping Services</Link></li>
              <li><Link to="/bridal-hairstyle" className="hover:text-[#C78B74] transition-colors">Bridal Hairstylist & Poola Jada</Link></li>
            </ul>
          </div>

          {/* Col 3: Location Pages Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Hyderabad Localities
            </h4>
            <ul className="space-y-2 font-sans text-xs text-white/70">
              <li><Link to="/location/bridal-makeup-artist-nizampet" className="hover:text-[#C78B74] transition-colors">Nizampet</Link></li>
              <li><Link to="/location/bridal-makeup-artist-kukatpally" className="hover:text-[#C78B74] transition-colors">Kukatpally & KPHB</Link></li>
              <li><Link to="/location/bridal-makeup-artist-bachupally" className="hover:text-[#C78B74] transition-colors">Bachupally</Link></li>
              <li><Link to="/location/bridal-makeup-artist-miyapur" className="hover:text-[#C78B74] transition-colors">Miyapur</Link></li>
              <li><Link to="/location/bridal-makeup-artist-pragathi-nagar" className="hover:text-[#C78B74] transition-colors">Pragathi Nagar</Link></li>
              <li><Link to="/location/bridal-makeup-artist-madhapur" className="hover:text-[#C78B74] transition-colors">Madhapur & Gachibowli</Link></li>
              <li><Link to="/location/bridal-makeup-artist-jubilee-hills" className="hover:text-[#C78B74] transition-colors">Jubilee Hills & Banjara Hills</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-xs text-white/70">
              <li><Link to="/about" className="hover:text-[#C78B74] transition-colors">About Divya</Link></li>
              <li><Link to="/bridal-packages" className="hover:text-[#C78B74] transition-colors">Bridal Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-[#C78B74] transition-colors">Bridal Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-[#C78B74] transition-colors">Blog & Guides</Link></li>
              <li><Link to="/contact" className="hover:text-[#C78B74] transition-colors">Contact Us</Link></li>
              <li><Link to="/book-appointment" className="hover:text-[#C78B74] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Col 5: Studio Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Studio Location
            </h4>
            <div className="space-y-3 font-sans text-xs text-white/70">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#C78B74] mt-0.5 shrink-0" />
                <span>Nizampet, Hyderabad, Telangana - 500090</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#C78B74] shrink-0" />
                <a href="tel:+919381824540" className="hover:text-[#C78B74]">+91 93818 24540</a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/919381824540" target="_blank" rel="noopener noreferrer" className="hover:text-[#C78B74]">WhatsApp Support</a>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <FaClock className="text-[#D4AF37] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Mon - Sun: 09:00 AM - 09:00 PM</p>
                  <p className="text-[11px] text-white/50">Early Morning Pelli Kuthuru Venue Visits Available</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p>© {new Date().getFullYear()} Makeover by Divyas. All Rights Reserved. Best Bridal Makeup Artist in Nizampet, Hyderabad.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
