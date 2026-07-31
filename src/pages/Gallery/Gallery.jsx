import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { MasonryGallery } from '../../components/Gallery/MasonryGallery';
import { BeforeAfterSlider } from '../../components/Gallery/BeforeAfterSlider';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const Gallery = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Ethereal Visuals
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Bridal & Artistry Gallery
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              Immerse yourself in our curated portfolio of real brides, high-definition airbrush work, intricate hair architecture, and backstage video films.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Gallery */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <MasonryGallery limit={12} showFilters={true} />
        </div>
      </section>

      {/* Interactive Before & After Section */}
      <section className="py-24 bg-[#FAF5F2] border-t border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <BeforeAfterSlider />
        </div>
      </section>

    </div>
  );
};
