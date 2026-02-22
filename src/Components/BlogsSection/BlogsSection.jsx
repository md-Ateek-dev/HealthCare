import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import img1 from '/src/assets/Hospital13.avif';
import img2 from '/src/assets/Doctor1.webp';
import img3 from '/src/assets/Doctor.webp';
import img4 from '/src/assets/Doctor3.webp';
import img5 from '/src/assets/Doctor3.avif';
import img6 from '/src/assets/Doctor2.webp';

const blogPosts = [
  {
    title: "Understanding the Importance of Regular Health Screenings",
    image: img1,
    date: "June 15, 2025",
    author: "Dr. Ayesha Sharma",
    category: "Wellness",
    excerpt: "Learn why routine check-ups and screenings are vital for early disease detection and long-term wellness.",
    link: "#",
    readTime: "5 min read"
  },
  {
    title: "A Patient’s Journey: Recovering from Heart Surgery",
    image: img2,
    date: "June 10, 2025",
    author: "LifeCare Team",
    category: "Stories",
    excerpt: "Read the inspiring story of Mr. Verma’s recovery and the care he received at LifeCare Hospital.",
    link: "#",
    readTime: "8 min read"
  },
  {
    title: "5 Tips for Managing Diabetes Effectively",
    image: img3,
    date: "June 2, 2025",
    author: "Dr. Rahul Mehra",
    category: "Health Guide",
    excerpt: "Practical advice for living well with diabetes, from diet to daily routines and ongoing support.",
    link: "#",
    readTime: "6 min read"
  },
  {
    title: "How to Prepare for Your Surgery",
    image: img4,
    date: "May 28, 2025",
    author: "Dr. Nisha Patel",
    category: "Preparation",
    excerpt: "Essential steps and tips to ensure a smooth surgical experience from admission to discharge.",
    link: "#",
    readTime: "4 min read"
  },
  {
    title: "Mental Health Matters: Coping with Stress",
    image: img5,
    date: "May 20, 2025",
    author: "Dr. Sameer Khan",
    category: "Mental Health",
    excerpt: "Discover practical ways to manage stress and improve your overall mental well-being.",
    link: "#",
    readTime: "7 min read"
  },
  {
    title: "Vaccination Guide for Children",
    image: img6,
    date: "May 12, 2025",
    author: "Dr. Priya Verma",
    category: "Pediatrics",
    excerpt: "A complete guide to childhood vaccinations, schedules, and their critical importance.",
    link: "#",
    readTime: "5 min read"
  },
];

const INITIAL_VISIBLE = 3;

const BlogsSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount(blogPosts.length);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section id="blogs" className="relative bg-[#fafcff] py-24 px-4 overflow-hidden">

      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/10 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-200/20 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center mx-auto mb-16">
          <div data-aos="fade-up" data-aos-duration="800">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-4 border border-blue-200/50">
              <BookOpen className="w-4 h-4" />
              Knowledge Base
            </span>
          </div>
          <h2
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6"
          >
            Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Blog</span> & News
          </h2>
          <p
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Stay updated with the latest health tips, hospital news, and inspiring patient stories from our community of medical experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visibleCount).map((post, idx) => (
            <article
              data-aos="fade-up" data-aos-delay={idx * 100} data-aos-duration="800"
              key={idx}
              className="group bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative">

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-teal-500" />
                    {post.author}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  <a href={post.link} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer / Read More */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    {post.readTime}
                  </div>
                  <a
                    href={post.link}
                    className="flex items-center gap-2 text-blue-600 font-bold text-sm tracking-wide uppercase group/link"
                  >
                    Read Article
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Controls */}
        <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center mt-16 gap-4">
          {visibleCount < blogPosts.length && (
            <button
              onClick={handleShowMore}
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <span className="relative z-10">Load More Articles</span>
              <ChevronDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
            </button>
          )}

          {visibleCount === blogPosts.length && (
            <button
              onClick={handleShowLess}
              className="group relative px-8 py-4 bg-white text-slate-600 font-bold border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Show Less</span>
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default BlogsSection;
