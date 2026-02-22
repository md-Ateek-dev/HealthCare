import React, { useState } from 'react';
import { FaHeartbeat, FaBrain, FaBaby, FaLungs, FaBone, FaUserNurse, FaEye, FaArrowRight } from 'react-icons/fa';

const departments = [
  {
    name: 'Cardiology',
    icon: FaHeartbeat,
    gradient: 'from-rose-500 to-red-600',
    shadow: 'shadow-red-500/40',
    description: 'Heart care, diagnostics, and interventions by expert cardiologists.',
  },
  {
    name: 'Neurology',
    icon: FaBrain,
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-purple-500/40',
    description: 'Comprehensive care for brain, spine, and nervous system disorders.',
  },
  {
    name: 'Pediatrics',
    icon: FaBaby,
    gradient: 'from-pink-400 to-rose-500',
    shadow: 'shadow-pink-500/40',
    description: 'Specialized care for infants, children, and adolescents.',
  },
  {
    name: 'Pulmonology',
    icon: FaLungs,
    gradient: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-blue-500/40',
    description: 'Diagnosis and treatment of lung and respiratory diseases.',
  },
  {
    name: 'Orthopedics',
    icon: FaBone,
    gradient: 'from-amber-400 to-orange-500',
    shadow: 'shadow-orange-500/40',
    description: 'Bone, joint, and muscle care including surgeries and rehabilitation.',
  },
  {
    name: 'Nursing',
    icon: FaUserNurse,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/40',
    description: 'Round-the-clock nursing care with compassion and professionalism.',
  },
  {
    name: 'Ophthalmology',
    icon: FaEye,
    gradient: 'from-indigo-400 to-blue-600',
    shadow: 'shadow-indigo-500/40',
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
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="relative bg-[#f8fafc] py-28 px-4 overflow-hidden" id="departments">
      {/* Abstract Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-teal-400/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div data-aos="fade-down" data-aos-duration="1000">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200/60 backdrop-blur-sm">
              Our Specialties
            </span>
          </div>
          <h2
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Healthcare</span>
          </h2>
          <p
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            LifeCare Hospital brings together leading specialists across a wide range of departments to provide comprehensive healthcare for every need.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {departments.slice(0, visibleCount).map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <div
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(idx % 3) * 150}
                key={idx}
                className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-white/60 hover:-translate-y-3 overflow-hidden flex flex-col items-center text-center cursor-pointer"
              >
                {/* Micro-interaction Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${dept.gradient} text-white shadow-xl ${dept.shadow} mb-8 flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out relative`}>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500"></div>
                  <Icon className="text-4xl drop-shadow-md relative z-10" />
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {dept.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                  {dept.description}
                </p>

                {/* Learn More Floating Button */}
                <div className="mt-auto opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <div className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:bg-blue-600 transition-colors duration-300">
                    <span>Explore</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Controls */}
        <div data-aos="zoom-in" data-aos-duration="800" className="flex justify-center mt-16 gap-5">
          {visibleCount < departments.length && (
            <button
              onClick={handleShowMore}
              className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-[0_10px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                View All Departments
                <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>
          )}
          {visibleCount > INITIAL_VISIBLE && (
            <button
              onClick={handleShowLess}
              className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-full font-bold shadow-sm hover:shadow-md hover:border-slate-300 hover:text-slate-900 transition-all duration-300 hover:-translate-y-1"
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
