import React, { useState } from 'react';
import { FaUserMd, FaAmbulance, FaStethoscope, FaHeartbeat, FaXRay, FaSyringe } from 'react-icons/fa';

const services = [
  {
    name: 'Outpatient Services',
    icon: <FaStethoscope className="text-blue-600 text-3xl mb-4" />,
    description: 'Comprehensive outpatient care with expert consultations and diagnostics for all ages.',
  },
  {
    name: 'Emergency Care',
    icon: <FaAmbulance className="text-blue-600 text-3xl mb-4" />,
    description: '24/7 emergency department equipped for all medical and surgical emergencies.',
  },
  {
    name: 'Cardiology',
    icon: <FaHeartbeat className="text-blue-600 text-3xl mb-4" />,
    description: 'Advanced heart care including diagnostics, interventions, and rehabilitation.',
  },
  {
    name: 'Radiology & Imaging',
    icon: <FaXRay className="text-blue-600 text-3xl mb-4" />,
    description: 'State-of-the-art imaging services including MRI, CT, X-ray, and ultrasound.',
  },
  {
    name: 'Surgery',
    icon: <FaUserMd className="text-blue-600 text-3xl mb-4" />,
    description: 'Modern operating theaters for general, orthopedic, and specialty surgeries.',
  },
  {
    name: 'Vaccination Center',
    icon: <FaSyringe className="text-blue-600 text-3xl mb-4" />,
    description: 'Routine and travel vaccinations for children and adults.',
  },
];

const INITIAL_VISIBLE = 4;
const LOAD_MORE = 2;

const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, services.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - LOAD_MORE, INITIAL_VISIBLE));
  };

  return (
    <section className="bg-white py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4">Our Services</h2>
        <p   data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
         className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          LifeCare Hospital offers a full spectrum of medical services delivered by expert teams, using the latest technology and a patient-first approach.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, visibleCount).map((service, idx) => (
            <div
              data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
              key={idx}
              className="bg-blue-50 rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 gap-4">
          {visibleCount < services.length && (
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

export default ServicesSection;
