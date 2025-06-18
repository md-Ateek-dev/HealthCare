import React from 'react';

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
];

const BlogsSection = () => (
  <section id="blogs" className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">Hospital Blog & Health Tips</h2>
      <p className="text-base text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Stay updated with the latest health tips, hospital news, and inspiring patient stories from our community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col max-w-xs mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg h-32 w-full object-cover mb-3"
            />
            <div className="text-xs text-blue-600 font-semibold mb-1">{post.date} • {post.author}</div>
            <h3 className="text-lg font-bold text-blue-800 mb-1">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
            <a
              href={post.link}
              className="mt-auto inline-block text-blue-600 font-semibold hover:underline text-sm"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsSection;
