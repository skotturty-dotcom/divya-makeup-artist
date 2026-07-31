import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaClock, FaCheckCircle, FaStar, FaArrowLeft, FaCalendarCheck } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { servicesData } from '../../data/servicesData';

export const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === id) || servicesData[0];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[
            { label: 'Services', path: '/services' },
            { label: service.title }
          ]} />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-6">
            <div>
              <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
                <FaSparkles /> {service.category}
              </span>
              <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-3">
                {service.title}
              </h1>
              <div className="flex items-center gap-6 text-xs font-poppins text-[#666666]">
                <span className="flex items-center gap-1 text-[#D4AF37] font-semibold"><FaStar /> {service.rating} Rating</span>
                <span>•</span>
                <span className="flex items-center gap-1"><FaClock className="text-[#C78B74]" /> {service.duration}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9DED7] shadow-lg flex items-center">
              <LuxuryButton 
                to={`/book-appointment?service=${service.id}`} 
                variant="gold" 
                size="md"
                icon={<FaCalendarCheck />}
              >
                Book This Service
              </LuxuryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Service Image */}
            <div className="rounded-[32px] overflow-hidden border border-[#E9DED7] shadow-2xl aspect-[16/9] bg-[#FAF5F2]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-4">
                Service Overview
              </h3>
              <p className="text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed mb-4">
                {service.fullDescription || service.description}
              </p>
            </div>

            {/* Key Benefits */}
            {service.benefits && (
              <div className="bg-[#FAF5F2] p-8 rounded-[28px] border border-[#E9DED7]">
                <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-6">
                  Key Experience Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm font-poppins text-[#2B2B2B]">
                      <FaCheckCircle className="text-[#C78B74] mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service FAQs */}
            {service.faqs && (
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-6">
                  Service FAQs
                </h3>
                <FAQAccordion faqs={service.faqs} />
              </div>
            )}

          </div>

          {/* Sidebar Right Column */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="bg-white p-8 rounded-[28px] border border-[#E9DED7] shadow-luxury space-y-6 sticky top-28">
              <h4 className="font-cormorant text-2xl font-bold text-[#2B2B2B] pb-4 border-b border-[#E9DED7]">
                Service Summary
              </h4>

              <div className="space-y-4 text-xs font-poppins">
                <div className="flex justify-between text-[#666666]">
                  <span>Category:</span>
                  <strong className="text-[#2B2B2B]">{service.category}</strong>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Duration:</span>
                  <strong className="text-[#2B2B2B]">{service.duration}</strong>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Products Used:</span>
                  <strong className="text-[#2B2B2B]">Dior, Tilbury, NARS</strong>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Location:</span>
                  <strong className="text-[#2B2B2B]">Studio & Venue Available</strong>
                </div>
              </div>

              <LuxuryButton 
                to={`/book-appointment?service=${service.id}`} 
                variant="gold" 
                className="w-full"
              >
                Book Appointment Now
              </LuxuryButton>

              <button 
                onClick={() => navigate(-1)} 
                className="w-full text-xs font-poppins font-medium text-[#666666] hover:text-[#C78B74] flex items-center justify-center gap-2 pt-2"
              >
                <FaArrowLeft /> Back to All Services
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
