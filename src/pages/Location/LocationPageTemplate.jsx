import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationDetails } from '../../data/locationData';
import { SEO } from '../../components/SEO/SEO';
import { FaMapMarkerAlt, FaStar, FaWhatsapp, FaPhoneAlt, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export const LocationPageTemplate = ({ customSlug }) => {
  const { slug: routeSlug } = useParams();
  const slug = customSlug || routeSlug;
  const loc = locationDetails[slug] || locationDetails["bridal-makeup-artist-nagpur"];

  // Schema.org LocalBusiness & ProfessionalService
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Makeover by Divyas - Bridal Makeup Artist in ${loc.city}`,
    "image": "https://www.makeoverbydivyas.in/src/assets/logo.jpg",
    "url": `https://www.makeoverbydivyas.in/location/${loc.slug}`,
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": loc.city,
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
    },
    "priceRange": "₹₹₹"
  };

  return (
    <div className="pt-24 pb-16 bg-[#FFFDFC]">
      <SEO 
        title={loc.title}
        description={loc.metaDescription}
        canonicalUrl={`https://www.makeoverbydivyas.in/location/${loc.slug}`}
        schemaData={schemaData}
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#FAF4F0] via-[#FFFDFC] to-[#F7EBE4] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8D5C8]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C78B74]/10 text-[#C78B74] font-medium text-xs tracking-wider uppercase mb-4">
              <FaMapMarkerAlt className="text-[#C78B74]" /> Destination & Venue Services in {loc.city}, MH
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2B2B2B] font-bold leading-tight mb-4">
              {loc.h1}
            </h1>
            <p className="text-lg text-[#555] font-sans mb-6 leading-relaxed">
              {loc.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {loc.keyHighlights?.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-[#E8D5C8] text-[#2B2B2B] text-xs px-3 py-1.5 rounded-full shadow-xs">
                  <FaCheckCircle className="text-[#C78B74]" /> {h}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/book-appointment" className="inline-flex items-center justify-center gap-2 bg-[#C78B74] hover:bg-[#b07560] text-white px-7 py-3.5 rounded-full font-medium transition-all shadow-md">
                <FaCalendarCheck /> Book in {loc.city}
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-medium transition-all shadow-md">
                <FaWhatsapp className="text-xl" /> WhatsApp Chat
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-[#C78B74] text-[#C78B74] hover:bg-[#C78B74] hover:text-white px-6 py-3.5 rounded-full font-medium transition-all">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={loc.image} 
                alt={loc.altText} 
                className="w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-2 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
                  <span className="text-xs font-bold text-[#2B2B2B] ml-2">{loc.rating}</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">On-Location Venue & Studio Makeup Setup in {loc.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
              <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-4">Bridal Makeup Services in {loc.city}</h2>
              <p className="text-base text-[#444] leading-relaxed whitespace-pre-line">{loc.contentOverview}</p>
            </div>

            {/* Popular Service Areas */}
            {loc.serviceAreas && (
              <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-4">Areas We Serve in & Around {loc.city}</h2>
                <div className="flex flex-wrap gap-2">
                  {loc.serviceAreas.map((area, idx) => (
                    <span key={idx} className="bg-[#FAF4F0] border border-[#E8D5C8] text-[#2B2B2B] px-4 py-2 rounded-xl text-sm font-medium">
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Google Map Embed */}
            <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
              <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-4">Find Us & Service Region</h2>
              <div className="rounded-xl overflow-hidden h-72 w-full border border-[#E8D5C8]">
                <iframe 
                  title={`Makeover by Divyas Map ${loc.city}`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709540026!2d79.00247653835698!3d21.1458004128509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Location FAQs */}
            {loc.faqs && (
              <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-6">Frequently Asked Questions ({loc.city})</h2>
                <div className="space-y-4">
                  {loc.faqs.map((faq, fidx) => (
                    <div key={fidx} className="p-4 rounded-xl bg-[#FAF4F0] border border-[#E8D5C8]/60">
                      <h3 className="font-semibold text-[#2B2B2B] mb-2">{faq.question}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#E8D5C8] shadow-lg text-center">
              <h3 className="text-xl font-serif font-bold text-[#2B2B2B] mb-2">Book Divya in {loc.city}</h3>
              <p className="text-sm text-gray-600 mb-6">Secure your wedding date slot for on-location setup.</p>
              
              <div className="space-y-3 mb-6">
                <Link to="/book-appointment" className="w-full inline-flex items-center justify-center gap-2 bg-[#C78B74] hover:bg-[#b07560] text-white py-3 rounded-xl font-medium transition-all shadow-md">
                  <FaCalendarCheck /> Check Availability
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium transition-all">
                  <FaWhatsapp /> Direct WhatsApp
                </a>
              </div>

              {/* Location links list */}
              <div className="text-left border-t border-[#E8D5C8] pt-6">
                <h4 className="font-serif font-bold text-sm text-[#2B2B2B] uppercase tracking-wider mb-3">Other Nearby Cities</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/location/bridal-makeup-artist-nagpur" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Nagpur <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-wardha" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Wardha <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-amravati" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Amravati <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-chandrapur" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Chandrapur <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-bhandara" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Bhandara <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-gondia" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Gondia <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-yavatmal" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Yavatmal <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-kamptee" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Kamptee <FiArrowRight /></Link></li>
                  <li><Link to="/location/bridal-makeup-artist-hingna" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Hingna <FiArrowRight /></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
