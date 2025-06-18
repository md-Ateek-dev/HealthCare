import React from 'react';

const galleryImages = [
  { src: '/src/assets/Hospital13.avif', alt: 'Hospital Entrance' },
  { src: '/src/assets/Hospital14.avif', alt: 'Modern Patient Room' },
  { src: '/src/assets/Doctor3.webp', alt: 'Advanced Operation Theater' },
  { src: '/src/assets/Doctor.webp', alt: 'Pediatric Ward' },
  { src: '/src/assets/Hospital11.avif', alt: 'Friendly Nursing Staff' },
  { src: '/src/assets/Doctor1.webp', alt: 'Hospital Cafeteria' },
  { src: '/src/assets/Hospital_About.avif', alt: 'Waiting Area' },
  { src: '/src/assets/Hospital12.avif', alt: 'Diagnostic Imaging Center' },
];

const GallerySection = () => (
  <section id="gallery" className="bg-white py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4">Hospital Gallery</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our facilities, modern patient rooms, and the compassionate environment we provide at LifeCare Hospital.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl shadow hover:shadow-lg shadow-blue-100 transition group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
