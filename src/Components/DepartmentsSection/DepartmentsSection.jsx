import React, { useState } from 'react';
import { FaHeartbeat, FaBrain, FaBaby, FaLungs, FaBone, FaUserNurse, FaEye } from 'react-icons/fa';

const departments = [
  {
    name: 'Cardiology',
    icon: <FaHeartbeat className="text-red-500 text-3xl mb-3" />,
    description: 'Heart care, diagnostics, and interventions by expert cardiologists.',
  },
  {
    name: 'Neurology',
    icon: <FaBrain className="text-purple-600 text-3xl mb-3" />,
    description: 'Comprehensive care for brain, spine, and nervous system disorders.',
  },
  {
    name: 'Pediatrics',
    icon: <FaBaby className="text-pink-400 text-3xl mb-3" />,
    description: 'Specialized care for infants, children, and adolescents.',
  },
  {
    name: 'Pulmonology',
    icon: <FaLungs className="text-blue-500 text-3xl mb-3" />,
    description: 'Diagnosis and treatment of lung and respiratory diseases.',
  },
  {
    name: 'Orthopedics',
    icon: <FaBone className="text-yellow-600 text-3xl mb-3" />,
    description: 'Bone, joint, and muscle care including surgeries and rehabilitation.',
  },
  {
    name: 'Nursing',
    icon: <FaUserNurse className="text-green-500 text-3xl mb-3" />,
    description: 'Round-the-clock nursing care with compassion and professionalism.',
  },
  {
    name: 'Ophthalmology',
    icon: <FaEye className="text-blue-700 text-3xl mb-3" />,
    description: 'Eye care, vision correction, and advanced eye surgeries.',
  },
];

const INITIAL_VISIBLE = 3;
const LOAD_MORE = 3;

const DepartmentsSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, departments.length));
  };

  const handleShowLess = () => {
    setVisibleCount((prev) => Math.max(prev - LOAD_MORE, INITIAL_VISIBLE));
  };

  return (
    <section className="bg-white py-16 px-4" id="departments">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
        className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4">Our Departments</h2>
        <p  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
         className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          LifeCare Hospital brings together leading specialists across a wide range of departments to provide comprehensive healthcare for every need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {departments.slice(0, visibleCount).map((dept, idx) => (
            <div
            data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
              key={idx}
              className="bg-blue-50 rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
            >
              {dept.icon}
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{dept.name}</h3>
              <p className="text-gray-600">{dept.description}</p>
            </div>
          ))}
        </div>
        <div             data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
         className="flex justify-center mt-10 gap-4">
          {visibleCount < departments.length && (
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

export default DepartmentsSection;
