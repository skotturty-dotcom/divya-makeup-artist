import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimes, FaCrown } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { PackageCard } from '../../components/Cards/PackageCard';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { packagesData, packageComparisonTable } from '../../data/packagesData';
import { homeFaqs } from '../../data/faqData';

export const BridalPackages = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Bridal Packages' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaCrown className="text-[#D4AF37]" /> Royal Transformation Suites
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Bridal Packages & Suites
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed">
              Curated luxury beauty suites for multi-ceremony weddings, engagement events, sangeet galas, and destination transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards Section */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison Table */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-2">
              Feature Breakdown
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              Package Comparison Table
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[24px] border border-[#E9DED7] shadow-2xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#2B2B2B] text-white font-cormorant text-xl">
                  <th className="p-5 font-bold">Package Feature</th>
                  <th className="p-5 font-bold text-slate-300">Silver</th>
                  <th className="p-5 font-bold text-[#C78B74]">Gold ⭐</th>
                  <th className="p-5 font-bold text-sky-400">Diamond</th>
                  <th className="p-5 font-bold text-[#D4AF37]">Royal Empress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9DED7] font-poppins text-xs text-[#2B2B2B]">
                {packageComparisonTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF5F2]/50'}>
                    <td className="p-5 font-semibold text-[#2B2B2B]">{row.feature}</td>
                    <td className="p-5">{row.silver}</td>
                    <td className="p-5 font-semibold text-[#C78B74]">{row.gold}</td>
                    <td className="p-5">{row.diamond}</td>
                    <td className="p-5 font-semibold text-[#D4AF37]">{row.royal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Package FAQs */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-cormorant text-4xl font-bold text-[#2B2B2B]">
              Package Booking FAQs
            </h2>
          </div>
          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2B2B2B] text-white text-center">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <h2 className="font-cormorant text-4xl font-bold mb-4">Unsure Which Package Fits Your Ceremonies?</h2>
          <p className="text-xs sm:text-sm font-poppins text-white/70 mb-8 max-w-xl mx-auto">
            Schedule a complimentary phone consultation with Divya to tailor a customized package.
          </p>
          <LuxuryButton to="/contact" variant="gold">
            Request Custom Consultation
          </LuxuryButton>
        </div>
      </section>

    </div>
  );
};
