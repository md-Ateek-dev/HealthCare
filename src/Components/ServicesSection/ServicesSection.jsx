import React, { useState } from 'react';
import {
  Stethoscope,
  Truck,
  Activity,
  ScanHeart,
  Scissors,
  Syringe,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    name: 'Outpatient Services',
    icon: Stethoscope,
    description: 'Comprehensive outpatient care with expert consultations and precise diagnostics tailored for every stage of life.',
    color: 'from-blue-500 to-cyan-400',
    lightBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Emergency Care',
    icon: Truck,
    description: '24/7 dedicated emergency department fully equipped to handle critical medical, trauma, and surgical emergencies.',
    color: 'from-red-500 to-rose-400',
    lightBg: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    name: 'Cardiology Center',
    icon: Activity,
    description: 'Advanced interventional heart care integrating state-of-the-art diagnostics, treatments, and cardiac rehabilitation.',
    color: 'from-rose-500 to-pink-500',
    lightBg: 'bg-pink-50',
    iconColor: 'text-rose-600',
  },
  {
    name: 'Radiology & Imaging',
    icon: ScanHeart,
    description: 'High-precision diagnostic imaging services including high-resolution MRI, CT scans, digital X-rays, and 3D ultrasound.',
    color: 'from-teal-500 to-emerald-400',
    lightBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    name: 'Advanced Surgery',
    icon: Scissors,
    description: 'Ultra-modern operating theaters designated for general, orthopedic, neuro, and minimally invasive robotic surgeries.',
    color: 'from-indigo-500 to-purple-500',
    lightBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    name: 'Vaccination Program',
    icon: Syringe,
    description: 'Comprehensive routine immunization and travel vaccination protocols for children, adults, and senior citizens.',
    color: 'from-cyan-500 to-blue-500',
    lightBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
];

const INITIAL_VISIBLE = 3;

const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleShowMore = () => {
    setVisibleCount(services.length);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden" id="services">

      {/* Background Decorators */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center mx-auto mb-20">
          <div data-aos="fade-up" data-aos-duration="800">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wider uppercase mb-4 border border-blue-100">
              Medical Procedures
            </span>
          </div>
          <h2
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-tight mb-6"
          >
            Our Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Services</span>
          </h2>
          <p
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            LifeCare Hospital offers a full spectrum of medical services delivered by expert teams, using the latest technology and a patient-first approach.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, visibleCount).map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                data-aos="fade-up" data-aos-delay={idx * 100} data-aos-duration="800"
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Hover Gradient Overlay Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl ${service.lightBg} flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500 ease-out`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <Icon className={`w-8 h-8 ${service.iconColor} group-hover:text-white relative z-10 transition-colors duration-500`} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link Base */}
                <div className="mt-8 pt-6 border-t border-slate-100 relative overflow-hidden">
                  <div className="flex items-center text-blue-600 font-bold text-sm tracking-wide uppercase transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Controls */}
        <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center mt-16 gap-4">
          {visibleCount < services.length && (
            <button
              onClick={handleShowMore}
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <span className="relative z-10">View All Services</span>
              <ChevronDown className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform" />
            </button>
          )}

          {visibleCount === services.length && (
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

export default ServicesSection;
