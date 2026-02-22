import React from 'react';
import { HeartPulse, Stethoscope, User, Brain, Syringe, Star, ArrowRight, Activity } from 'lucide-react';

import img1 from '/src/assets/Hospital5.avif';
import img2 from '/src/assets/Doctor1.avif';
import img3 from '/src/assets/doctor2.avif';
import img4 from '/src/assets/Doctor3.avif';
import img5 from '/src/assets/Doctor2.webp';

const doctors = [
  {
    name: 'Dr. Ayesha Sharma',
    specialty: 'Cardiologist',
    photo: img1,
    description: 'Expert in interventional cardiology with 15+ years of experience.',
    rating: '4.9',
    patients: '2k+',
    icon: HeartPulse,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100'
  },
  {
    name: 'Dr. Sofia Ansari',
    specialty: 'General Surgeon',
    photo: img2,
    description: 'Specializes in minimally invasive surgeries and patient care.',
    rating: '4.8',
    patients: '1.5k+',
    icon: Activity,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    name: 'Dr. Raj Verma',
    specialty: 'Pediatrician',
    photo: img3,
    description: 'Dedicated to child health and preventive medicine.',
    rating: '5.0',
    patients: '3k+',
    icon: Stethoscope,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100'
  },
  {
    name: 'Dr. Sameer Khan',
    specialty: 'Neurologist',
    photo: img4,
    description: 'Focuses on neurological disorders and patient rehabilitation.',
    rating: '4.9',
    patients: '1.2k+',
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  },
  {
    name: 'Dr. Nisha Patel',
    specialty: 'Dermatologist',
    photo: img5,
    description: 'Expert in skin care and laser cosmetic treatments.',
    rating: '4.7',
    patients: '4k+',
    icon: Syringe,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    border: 'border-pink-100'
  }
];

const DoctorsSection = () => {
  // We duplicate the array multiple times so the CSS animation can loop perfectly over half its length
  const repeatedDoctors = [...doctors, ...doctors, ...doctors, ...doctors];

  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden" id="doctors">

      {/* Embedded CSS for ultra-smooth hardware-accelerated scrolling */}
      <style>
        {`
          @keyframes smoothScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); } /* 12px accounts for half the gap */
          }
          .scroll-track {
            display: flex;
            width: max-content;
            animation: smoothScroll 30s linear infinite;
          }
          .scroll-wrapper:hover .scroll-track {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Background Decorators */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div data-aos="fade-up" data-aos-duration="800">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-4 border border-blue-200/50">
                Our Specialists
              </span>
            </div>
            <h2
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
              className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-800 tracking-tight mb-4"
            >
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Expert Team</span>
            </h2>
            <p
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
              className="text-lg text-slate-500 font-medium leading-relaxed"
            >
              Our board-certified doctors bring decades of experience and compassionate care to ensure the best possible outcomes for you and your family.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" className="hidden md:block pb-2">
            <button className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Doctors
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Auto-Slider using CSS */}
      <div className="w-full relative z-20 pb-12 pt-4 scroll-wrapper">

        {/* Fade gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-30 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-30 pointer-events-none"></div>

        {/* Outer track wrapper for smooth sliding */}
        <div className="overflow-hidden">
          <div className="scroll-track gap-6 py-4 px-4 md:px-0">
            {repeatedDoctors.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[300px] md:w-[350px] group"
                >
                  <div className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col cursor-pointer">

                    {/* Card Background Glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 ${doc.bg} rounded-full mix-blend-multiply filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    {/* Rating Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-bold text-slate-700">{doc.rating}</span>
                    </div>

                    {/* Doctor Image */}
                    <div className="relative w-28 h-28 mx-auto mb-6 mt-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20 group-hover:opacity-40 blur-sm"></div>
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                      />

                      {/* Specialty Icon Floating Badge */}
                      <div className={`absolute -bottom-2 -right-2 ${doc.bg} ${doc.border} border-2 w-10 h-10 rounded-full flex items-center justify-center shadow-sm z-20 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${doc.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-grow flex flex-col items-center">
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">{doc.name}</h3>
                      <p className={`text-sm font-bold ${doc.color} mb-4 uppercase tracking-wider`}>{doc.specialty}</p>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">{doc.description}</p>

                      <div className="w-full h-px bg-slate-100 mb-4 group-hover:bg-blue-100 transition-colors"></div>

                      <div className="flex items-center justify-between w-full text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <User className="w-4 h-4 text-slate-400" />
                          <span>{doc.patients} Patients</span>
                        </div>
                        <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
                          Book Session
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden flex justify-center mt-8 px-4" data-aos="fade-up">
        <button className="group w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300">
          View All Doctors
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
};

export default DoctorsSection;
