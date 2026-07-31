import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaClock, FaUser, FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { blogPosts } from '../../data/blogData';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto max-w-4xl">
          <Breadcrumb items={[
            { label: 'Blog', path: '/blog' },
            { label: post.title }
          ]} />

          <div className="mt-6">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> {post.category}
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs font-poppins text-[#666666] pt-4 border-t border-[#E9DED7]">
              <div className="flex items-center gap-2">
                <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover border border-[#C78B74]" />
                <span className="font-semibold text-[#2B2B2B]">{post.author}</span>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-[#C78B74]" /> {post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><FaClock className="text-[#C78B74]" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Post Body */}
      <section className="py-16 bg-[#FFFDFC]">
        <div className="max-w-4xl w-[90%] mx-auto space-y-10">
          
          <div className="rounded-[32px] overflow-hidden border border-[#E9DED7] shadow-2xl aspect-[16/9] bg-[#FAF5F2]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div 
            className="prose prose-lg max-w-none font-poppins text-sm leading-relaxed text-[#2B2B2B] space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="pt-8 border-t border-[#E9DED7] flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)} 
              className="text-xs font-poppins font-semibold text-[#C78B74] hover:text-[#B7745F] flex items-center gap-2"
            >
              <FaArrowLeft /> Back to Blog
            </button>

            <LuxuryButton to="/book-appointment" variant="gold" size="sm">
              Book Appointment
            </LuxuryButton>
          </div>

        </div>
      </section>

    </div>
  );
};
