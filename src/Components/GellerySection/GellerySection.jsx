import React, { useState } from 'react';
import { Eye, X, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import img1 from '/src/assets/Hospital14.avif';
import img2 from '/src/assets/Doctor3.webp';
import img3 from '/src/assets/Doctor.webp';
import img4 from '/src/assets/Hospital11.avif';
import img5 from '/src/assets/Doctor1.webp';
import img6 from '/src/assets/Hospital_About.avif';
import img7 from '/src/assets/Hospital12.avif';
import img8 from '/src/assets/Hospital13.avif';

const galleryImages = [
  { src: img1, alt: 'Hospital Entrance', category: 'Facility' },
  { src: img2, alt: 'Modern Patient Room', category: 'Rooms' },
  { src: img3, alt: 'Advanced Operation Theater', category: 'Surgery' },
  { src: img4, alt: 'Pediatric Ward', category: 'Facility' },
  { src: img5, alt: 'Friendly Nursing Staff', category: 'Staff' },
  { src: img6, alt: 'Waiting Area', category: 'Facility' },
  { src: img7, alt: 'Diagnostic Imaging Center', category: 'Technology' },
  { src: img8, alt: 'Emergency Ward', category: 'Facility' },
];

const INITIAL_VISIBLE = 6;
const LOAD_MORE = 3;

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, galleryImages.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section id="gallery" className="relative bg-[#fafcff] py-24 px-4 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-300/10 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center mx-auto mb-16">
          <div data-aos="fade-up" data-aos-duration="800">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-4 border border-blue-200/50">
              <ImageIcon className="w-4 h-4" />
              Our Facilities
            </span>
          </div>
          <h2
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6"
          >
            Hospital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Gallery</span>
          </h2>
          <p
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Explore our state-of-the-art facilities, modern patient rooms, and the compassionate, healing environment we provide at LifeCare Hospital.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.slice(0, visibleCount).map((img, idx) => (
            <div
              data-aos="fade-up" data-aos-delay={idx * 100} data-aos-duration="800"
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-all duration-500 cursor-pointer bg-white aspect-[4/3] transform hover:-translate-y-2"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-300 font-bold text-xs uppercase tracking-widest mb-2 block">{img.category}</span>
                  <h3 className="text-white text-xl md:text-2xl font-bold">{img.alt}</h3>
                </div>

                {/* View Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Load Less Buttons */}
        <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center mt-16 gap-4">
          {visibleCount < galleryImages.length && (
            <button
              onClick={handleShowMore}
              className="group relative px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-[0_4px_14px_0_rgb(37,99,235,0.1)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.2)] border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Load More Photos</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          )}

          {visibleCount > INITIAL_VISIBLE && (
            <button
              onClick={handleShowLess}
              className="group relative px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-full shadow-sm hover:bg-slate-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Show Less</span>
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors duration-300 z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform scale-100 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[85vh] object-contain bg-black/50"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">{selectedImage.category}</span>
              <h3 className="text-white text-2xl md:text-3xl font-bold mt-1">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
