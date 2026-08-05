import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicePagesDetails } from '../../data/servicePagesData';
import { SEO } from '../../components/SEO/SEO';
import { FaStar, FaCheckCircle, FaWhatsapp, FaPhoneAlt, FaCalendarCheck, FaClock } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export const ServicePageTemplate = ({ customSlug }) => {
  const { id } = useParams();
  const slug = customSlug || id;
  const service = servicePagesDetails[slug] || servicePagesDetails["bridal-makeup"];

  // Schema.org Service & FAQ Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Makeover by Divyas",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "telephone": "+919876543210"
    },
    "areaServed": "Hyderabad",
    "description": service.metaDescription,
    "image": "https://www.makeoverbydivyas.in/src/assets/logo.jpg"
  };

  return (
    <div className="pt-24 pb-16 bg-[#FFFDFC]">
      <SEO 
        title={service.title}
        description={service.metaDescription}
        canonicalUrl={`https://www.makeoverbydivyas.in/${service.slug}`}
        schemaData={schemaData}
      />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#FAF4F0] via-[#FFFDFC] to-[#F7EBE4] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8D5C8]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C78B74]/10 text-[#C78B74] font-medium text-xs tracking-wider uppercase mb-4">
              <FaStar className="w-3.5 h-3.5 text-[#C78B74]" /> {service.category} • Hyderabad, TS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2B2B2B] font-bold leading-tight mb-4">
              {service.h1}
            </h1>
            <p className="text-lg text-[#555] font-sans mb-6 leading-relaxed">
              {service.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {service.heroTags?.map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-[#E8D5C8] text-[#2B2B2B] text-xs px-3 py-1.5 rounded-full shadow-xs">
                  <FaCheckCircle className="text-[#C78B74]" /> {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/book-appointment" className="inline-flex items-center justify-center gap-2 bg-[#C78B74] hover:bg-[#b07560] text-white px-7 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                <FaCalendarCheck /> Book Appointment
              </Link>
              <a href="https://wa.me/919876543210?text=Hi%20Divya,%20I%20want%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3.5 rounded-full font-medium transition-all shadow-md">
                <FaWhatsapp className="text-xl" /> WhatsApp Now
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border border-[#C78B74] text-[#C78B74] hover:bg-[#C78B74] hover:text-white px-6 py-3.5 rounded-full font-medium transition-all">
                <FaPhoneAlt /> Call Now
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#C78B74] to-[#E8D5C8] rounded-3xl blur-xl opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={service.image} 
                alt={service.altText} 
                className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Client Rating</span>
                  <div className="text-sm font-bold text-[#2B2B2B]">{service.rating}</div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#C78B74] font-bold">100% Genuine Luxury Brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Article / Service Body (2 Columns) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs leading-relaxed text-[#444] font-sans">
              <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-4">Overview</h2>
              <div className="whitespace-pre-line text-base leading-relaxed">{service.overview}</div>
            </div>

            {service.sections?.map((sec, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-4">{sec.h2}</h2>
                <div className="whitespace-pre-line text-base text-[#444] leading-relaxed">{sec.content}</div>
              </div>
            ))}

            {/* Packages Card */}
            {service.pricingPackages && (
              <div className="bg-gradient-to-r from-[#FAF4F0] to-[#F7EBE4] p-8 rounded-2xl border border-[#E8D5C8]">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-6">Popular Package Inclusions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.pricingPackages.map((pkg, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-[#E8D5C8] shadow-xs">
                      <h3 className="text-lg font-bold text-[#C78B74] mb-3">{pkg.name}</h3>
                      <ul className="space-y-2 text-sm text-[#555]">
                        {pkg.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#C78B74] shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Accordion */}
            {service.faqs && (
              <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, fidx) => (
                    <div key={fidx} className="p-4 rounded-xl bg-[#FAF4F0] border border-[#E8D5C8]/60">
                      <h3 className="font-semibold text-[#2B2B2B] mb-2">{faq.question}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {service.testimonials && (
              <div className="bg-white p-8 rounded-2xl border border-[#E8D5C8]/40 shadow-xs">
                <h2 className="text-2xl font-serif text-[#2B2B2B] font-bold mb-6">Client Reviews in Hyderabad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.testimonials.map((t, tidx) => (
                    <div key={tidx} className="p-5 bg-[#FAF4F0]/60 rounded-xl border border-[#E8D5C8]/40">
                      <div className="flex text-amber-400 gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
                      </div>
                      <p className="text-sm italic text-[#555] mb-3">"{t.text}"</p>
                      <span className="font-semibold text-xs text-[#C78B74] block">{t.name} • Verified Client</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar CTA & Navigation */}
          <div className="space-y-8">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-[#E8D5C8] shadow-lg text-center">
              <h3 className="text-xl font-serif font-bold text-[#2B2B2B] mb-2">Book Your Appointment</h3>
              <p className="text-sm text-gray-600 mb-6">Lock your date with Makeover by Divyas in Hyderabad.</p>
              
              <div className="space-y-3 mb-6">
                <Link to="/book-appointment" className="w-full inline-flex items-center justify-center gap-2 bg-[#C78B74] hover:bg-[#b07560] text-white py-3 rounded-xl font-medium transition-all shadow-md">
                  <FaCalendarCheck /> Check Availability
                </Link>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium transition-all">
                  <FaWhatsapp /> Instant WhatsApp Chat
                </a>
                <a href="tel:+919876543210" className="w-full inline-flex items-center justify-center gap-2 border border-[#C78B74] text-[#C78B74] py-3 rounded-xl font-medium transition-all hover:bg-[#C78B74] hover:text-white">
                  <FaPhoneAlt /> Call +91 98765 43210
                </a>
              </div>

              {/* Other Services Internal Links */}
              <div className="text-left border-t border-[#E8D5C8] pt-6">
                <h4 className="font-serif font-bold text-sm text-[#2B2B2B] uppercase tracking-wider mb-3">Explore Other Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/bridal-makeup" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Bridal Makeup Artist <FiArrowRight /></Link></li>
                  <li><Link to="/airbrush-makeup" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Airbrush Makeup Hyderabad <FiArrowRight /></Link></li>
                  <li><Link to="/reception-makeup" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Reception Makeup <FiArrowRight /></Link></li>
                  <li><Link to="/engagement-makeup" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Engagement Makeup <FiArrowRight /></Link></li>
                  <li><Link to="/saree-draping" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Saree Draping Services <FiArrowRight /></Link></li>
                  <li><Link to="/bridal-hairstyle" className="text-gray-700 hover:text-[#C78B74] flex items-center justify-between">Bridal Hairstyling <FiArrowRight /></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
