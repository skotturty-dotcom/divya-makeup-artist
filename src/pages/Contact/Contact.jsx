import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube 
} from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { ContactForm } from '../../components/Forms/ContactForm';

export const Contact = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3 bg-white px-4 py-1.5 rounded-full border border-[#E9DED7]">
              <FaSparkles className="text-[#D4AF37]" /> Concierge & Inquiries
            </span>
            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight">
              Get in Touch with Divya Studio
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed">
              We would love to discuss your upcoming bridal dates, customized package options, venue travel, or academy enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side - Luxury Dark Card */}
          <div className="lg:col-span-5">
            
            <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#1A1A1A] text-white p-8 md:p-10 rounded-[32px] border-2 border-[#D4AF37]/40 shadow-2xl space-y-8 relative overflow-hidden">
              
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37]" />

              <div className="pb-4 border-b border-white/15">
                <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
                  <FaSparkles /> Luxury Studio
                </span>
                <h3 className="font-cinzel text-3xl font-bold text-white">
                  Studio Contact Details
                </h3>
              </div>

              <div className="space-y-6 font-jakarta text-sm text-white">
                
                {/* Studio Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center text-xl shrink-0 shadow-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-1">Studio Address</h4>
                    <p className="text-sm text-white/90 font-medium leading-relaxed">
                      Nizampet, Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center text-xl shrink-0 shadow-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-1">Phone & WhatsApp</h4>
                    <a href="tel:+919381824540" className="text-sm text-white/90 font-medium hover:text-[#D4AF37] block transition-colors">+91 93818 24540</a>
                    <a 
                      href="https://wa.me/919381824540" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 px-3 py-1.5 rounded-full mt-2 transition-all"
                    >
                      <FaWhatsapp className="text-sm" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center text-xl shrink-0 shadow-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-1">Email Address</h4>
                    <a href="mailto:divyakumarirockz@gmail.com" className="text-sm text-white/90 font-medium hover:text-[#D4AF37] transition-colors break-all">divyakumarirockz@gmail.com</a>
                  </div>
                </div>

                {/* Studio Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center text-xl shrink-0 shadow-lg">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-lg font-bold text-[#D4AF37] mb-1">Studio Business Hours</h4>
                    <p className="text-sm text-white/90 font-medium">Monday - Sunday: 09:00 AM - 08:00 PM</p>
                    <p className="text-xs text-[#D4AF37] mt-1 italic font-light">* Early morning bridal callouts available by appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/15">
                <p className="text-xs uppercase tracking-[2px] font-bold text-[#D4AF37] mb-3 font-jakarta">Connect on Social</p>
                <a 
                  href="https://www.instagram.com/beautify_with_divya" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#D4AF37] mb-4 font-jakarta transition-colors"
                >
                  <FaInstagram className="text-lg text-[#D4AF37]" /> @beautify_with_divya
                </a>
                <div className="flex gap-3 pt-1">
                  <a href="https://www.instagram.com/beautify_with_divya" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#C78B74] border border-white/20 flex items-center justify-center text-white transition-all shadow-md">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#C78B74] border border-white/20 flex items-center justify-center text-white transition-all shadow-md">
                    <FaFacebookF className="text-lg" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#C78B74] border border-white/20 flex items-center justify-center text-white transition-all shadow-md">
                    <FaYoutube className="text-lg" />
                  </a>
                  <a href="https://wa.me/919381824540" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:text-white transition-all shadow-md">
                    <FaWhatsapp className="text-lg" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>



    </div>
  );
};
