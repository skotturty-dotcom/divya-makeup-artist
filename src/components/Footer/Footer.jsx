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
            <span className="text-[#C78B74] font-poppins text-xs uppercase tracking-[2px] font-semibold flex items-center justify-center lg:justify-start gap-2">
              <FaSparkles /> Stay In Touch
            </span>
            <h3 className="font-cormorant text-3xl md:text-4xl font-bold mt-2 text-white">
              Subscribe to Luxury Beauty Updates & Exclusive Bridal Offers
            </h3>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-6 py-3.5 rounded-full bg-[#1A1A1A] border border-[#E9DED7]/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C78B74] min-w-[280px] text-sm font-poppins"
            />
            <LuxuryButton type="submit" variant="gold" size="md">
              Subscribe
            </LuxuryButton>
          </form>

          {subscribed && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#4CAF50] text-sm flex items-center gap-2 font-poppins font-medium w-full text-center lg:text-left"
            >
              <FaCheckCircle /> Thank you! You have successfully subscribed to VIP updates.
            </motion.div>
          )}
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Divya Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37] shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-cormorant text-2xl font-bold tracking-wider leading-none text-white">DIVYA</span>
                <span className="text-[10px] tracking-[3px] uppercase font-poppins font-medium text-[#C78B74]">Makeup Artist</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-poppins font-light">
              Enhancing natural beauty, crafting timeless bridal transformations, and empowering future beauty professionals across India & worldwide.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/beautify_with_divya" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaYoutube />
              </a>
              <a href="https://wa.me/919381824540" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaWhatsapp />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C78B74] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Quick Navigation
            </h4>
            <ul className="space-y-3 font-poppins text-sm text-white/70">
              <li><Link to="/about" className="hover:text-[#C78B74] transition-colors">About Divya</Link></li>
              <li><Link to="/services" className="hover:text-[#C78B74] transition-colors">Our Luxury Services</Link></li>
              <li><Link to="/bridal-packages" className="hover:text-[#C78B74] transition-colors">Bridal Packages & Suites</Link></li>
              <li><Link to="/gallery" className="hover:text-[#C78B74] transition-colors">Bridal Gallery & Lightbox</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#C78B74] transition-colors">Client Reviews & Stories</Link></li>
              <li><Link to="/blog" className="hover:text-[#C78B74] transition-colors">Beauty Blog & Tips</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Working Hours */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              Studio Hours & Info
            </h4>
            <div className="space-y-4 font-poppins text-sm text-white/70">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C78B74] mt-1 shrink-0" />
                <span>Nizampet, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C78B74] shrink-0" />
                <a href="tel:+919381824540" className="hover:text-[#C78B74]">+91 93818 24540</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C78B74] shrink-0" />
                <a href="mailto:divyakumarirockz@gmail.com" className="hover:text-[#C78B74]">divyakumarirockz@gmail.com</a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <FaClock className="text-[#D4AF37] mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Mon - Sun: 09:00 AM - 08:00 PM</p>
                  <p className="text-xs text-white/50">Early morning bridal bookings available by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Instagram Feed Preview */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-[#C78B74]">
              <a 
                href="https://www.instagram.com/beautify_with_divya" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"
              >
                <FaInstagram className="text-[#C78B74]" /> @beautify_with_divya
              </a>
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map((post) => (
                <a 
                  key={post.id} 
                  href="https://www.instagram.com/beautify_with_divya" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-xl aspect-square"
                >
                  <img 
                    src={post.img} 
                    alt="Instagram post thumbnail" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#C78B74]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <FaInstagram className="text-lg" />
                  </div>
                </a>
              ))}
            </div>
            <a 
              href="https://www.instagram.com/beautify_with_divya" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#C78B74] hover:text-[#D4AF37] mt-4 font-poppins font-medium transition-colors"
            >
              Follow @beautify_with_divya on Instagram &rarr;
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-poppins text-white/50">
          <p>© {new Date().getFullYear()} Divya Makeup Artist. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
