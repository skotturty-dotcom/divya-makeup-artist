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
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Concierge & Inquiries
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Get in Touch with Divya Studio
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              We would love to discuss your upcoming bridal dates, customized package options, venue travel, or academy enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#FAF5F2] p-8 md:p-10 rounded-[32px] border border-[#E9DED7] shadow-luxury space-y-8">
              <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] pb-4 border-b border-[#E9DED7]">
                Studio Contact Details
              </h3>

              <div className="space-y-6 font-poppins text-sm text-[#2B2B2B]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9DED7] text-[#C78B74] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 font-cormorant text-[#2B2B2B]">Studio Address</h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Nizampet, Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9DED7] text-[#C78B74] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 font-cormorant text-[#2B2B2B]">Phone & WhatsApp</h4>
                    <a href="tel:+919381824540" className="text-xs text-[#666666] hover:text-[#C78B74] block">+91 93818 24540</a>
                    <a href="https://wa.me/919381824540" target="_blank" rel="noreferrer" className="text-xs text-[#25D366] font-semibold flex items-center gap-1 mt-1">
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9DED7] text-[#C78B74] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 font-cormorant text-[#2B2B2B]">Email Address</h4>
                    <a href="mailto:divyakumarirockz@gmail.com" className="text-xs text-[#666666] hover:text-[#C78B74]">divyakumarirockz@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9DED7] text-[#D4AF37] flex items-center justify-center text-xl shrink-0 shadow-sm">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 font-cormorant text-[#2B2B2B]">Studio Business Hours</h4>
                    <p className="text-xs text-[#666666]">Monday - Sunday: 09:00 AM - 08:00 PM</p>
                    <p className="text-[11px] text-[#C78B74] mt-0.5">* Early morning bridal callouts available by appointment</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E9DED7]">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#2B2B2B] mb-2 font-poppins">Connect on Social</p>
                <a 
                  href="https://www.instagram.com/beautify_with_divya" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C78B74] hover:text-[#D4AF37] mb-4 font-poppins transition-colors"
                >
                  <FaInstagram className="text-lg" /> @beautify_with_divya
                </a>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/beautify_with_divya" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E9DED7] flex items-center justify-center text-[#C78B74] hover:bg-[#C78B74] hover:text-white transition-all">
                    <FaInstagram />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E9DED7] flex items-center justify-center text-[#C78B74] hover:bg-[#C78B74] hover:text-white transition-all">
                    <FaFacebookF />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E9DED7] flex items-center justify-center text-[#C78B74] hover:bg-[#C78B74] hover:text-white transition-all">
                    <FaYoutube />
                  </a>
                  <a href="https://wa.me/919381824540" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-[#E9DED7] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                    <FaWhatsapp />
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

      {/* Google Maps Embed Section */}
      <section className="py-12 bg-[#FAF5F2] border-t border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-1">Visit Studio</span>
            <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B]">Studio Map & Location</h3>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-[#E9DED7] shadow-2xl h-[420px] bg-[#E9DED7]">
            <iframe
              title="Divya Makeup Artist Studio Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.497746592237!2d78.406983075165!3d17.435889783458694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9135a5a1f64f%3A0x6b8f3a3c9b7b9b1a!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
