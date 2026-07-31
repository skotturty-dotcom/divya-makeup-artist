import React, { useState } from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { BlogCard } from '../../components/Cards/BlogCard';
import { blogPosts, blogCategories } from '../../data/blogData';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Beauty Insights & Trends
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Beauty Blog & Bridal Preparation Tips
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              Read expert tips on skincare timelines, HD airbrush comparisons, hair protection, and the latest luxury Indian wedding trends from Divya.
            </p>
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-poppins font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C78B74] text-white shadow-md scale-105'
                    : 'bg-[#FAF5F2] text-[#666666] border border-[#E9DED7] hover:border-[#C78B74]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
