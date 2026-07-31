import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { ServiceCard } from '../../components/Cards/ServiceCard';
import { servicesData, serviceCategories } from '../../data/servicesData';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All"
    ? servicesData
    : servicesData.filter(svc => svc.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Our Services' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Ethereal Transformations
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Beauty Parlor & Artistry Services
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              Explore our complete range of high-definition bridal makeovers, skin therapy, hair architecture, mehendi, and nail lounge services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-poppins font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#C78B74] text-white shadow-lg shadow-[#C78B74]/25 scale-105'
                    : 'bg-[#FAF5F2] text-[#666666] border border-[#E9DED7] hover:border-[#C78B74] hover:text-[#C78B74]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-[#FAF5F2] rounded-3xl border border-[#E9DED7]">
              <p className="font-cormorant text-2xl font-bold text-[#2B2B2B]">No services found in this category.</p>
              <p className="text-xs text-[#666666] font-poppins mt-2">Please select "All" to view our complete menu.</p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
