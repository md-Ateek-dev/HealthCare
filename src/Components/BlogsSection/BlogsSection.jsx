import React, { useState } from 'react';

const blogPosts = [
  {
    title: "Understanding the Importance of Regular Health Screenings",
    image: "/src/assets/Doctor2.webp",
    date: "June 15, 2025",
    author: "Dr. Ayesha Sharma",
    excerpt: "Learn why routine check-ups and screenings are vital for early disease detection and long-term wellness.",
    link: "#",
  },
  {
    title: "A Patient’s Journey: Recovering from Heart Surgery",
    image: "/src/assets/Doctor1.webp",
    date: "June 10, 2025",
    author: "LifeCare Team",
    excerpt: "Read the inspiring story of Mr. Verma’s recovery and the care he received at LifeCare Hospital.",
    link: "#",
  },
  {
    title: "5 Tips for Managing Diabetes Effectively",
    image: "/src/assets/Doctor.webp",
    date: "June 2, 2025",
    author: "Dr. Rahul Mehra",
    excerpt: "Practical advice for living well with diabetes, from diet to daily routines and ongoing support.",
    link: "#",
  },
  {
    title: "How to Prepare for Your Surgery",
    image: "/src/assets/Doctor2.webp",
    date: "May 28, 2025",
    author: "Dr. Nisha Patel",
    excerpt: "Essential steps and tips to ensure a smooth surgical experience.",
    link: "#",
  },
  {
    title: "Mental Health Matters: Coping with Stress",
    image: "/src/assets/Doctor1.webp",
    date: "May 20, 2025",
    author: "Dr. Sameer Khan",
    excerpt: "Discover practical ways to manage stress and improve mental well-being.",
    link: "#",
  },
  {
    title: "Vaccination Guide for Children",
    image: "/src/assets/Doctor.webp",
    date: "May 12, 2025",
    author: "Dr. Priya Verma",
    excerpt: "A complete guide to childhood vaccinations and their importance.",
    link: "#",
  },
];

const INITIAL_VISIBLE = 3;
const LOAD_MORE = 3;

const BlogsSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, blogPosts.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - LOAD_MORE, INITIAL_VISIBLE));
  };

  return (
    <section id="blogs" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">Hospital Blog & Health Tips</h2>
        <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="text-base text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Stay updated with the latest health tips, hospital news, and inspiring patient stories from our community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visibleCount).map((post, idx) => (
            <div
             data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"

              key={idx}
              className="bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col max-w-md mx-auto group"
              style={{ minHeight: 370 }}
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-xs text-blue-600 font-semibold mb-1">{post.date} • {post.author}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="mt-auto inline-block text-blue-600 font-semibold hover:underline text-sm"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 gap-4">
          {visibleCount < blogPosts.length && (
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Show More
            </button>
          )}
          {visibleCount > INITIAL_VISIBLE && (
            <button
              onClick={handleShowLess}
              className="bg-gradient-to-r from-gray-300 to-blue-100 text-blue-800 px-8 py-3 rounded-full font-semibold shadow hover:from-gray-400 hover:to-blue-200 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
