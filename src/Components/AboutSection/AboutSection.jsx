import React from 'react';
import { FaUserMd, FaHospital, FaRegSmile } from 'react-icons/fa';
import Hospital_bg from '/src/assets/hospital_About.avif'; // Use your hospital image here

const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50/50 py-24 px-4 overflow-hidden" id="about">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Image Section */}
        <div
          data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out-cubic"
          className="md:w-1/2 w-full flex justify-center relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl transform rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform duration-500 ease-in-out"></div>
          <img
            src={Hospital_bg}
            alt="Hospital Building"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover border-8 border-white transform group-hover:-translate-y-2 transition-transform duration-500 ease-in-out relative z-10"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center text-blue-600 shadow-inner">
              <FaUserMd size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Expert</p>
              <p className="text-xl font-black text-slate-800">Doctors</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <span className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-sm font-bold tracking-wider uppercase mb-6 shadow-sm border border-blue-200/50">
              Who We Are
            </span>
          </div>

          <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
            Committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Excellence</span> in Healthcare
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"
            className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
            LifeCare Hospital has been dedicated to providing compassionate, world-class healthcare to our community for over a decade. Our team of expert doctors, nurses, and staff work around the clock to ensure every patient receives personalized care in a safe and comfortable environment.
          </p>

          <ul className="space-y-5 mb-10">
            {[
              { icon: FaUserMd, text: "Highly qualified and experienced medical professionals", color: "text-blue-600", bg: "bg-blue-100" },
              { icon: FaHospital, text: "State-of-the-art facilities and advanced equipment", color: "text-teal-600", bg: "bg-teal-100" },
              { icon: FaRegSmile, text: "Patient-centric approach and compassionate care", color: "text-indigo-600", bg: "bg-indigo-100" }
            ].map((item, index) => (
              <li key={index} data-aos="fade-up" data-aos-delay={300 + (index * 100)} data-aos-duration="800"
                className="flex items-center gap-5 group cursor-default">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className={`${item.color} text-2xl`} />
                </div>
                <span className="text-slate-700 font-semibold text-lg group-hover:text-slate-900 transition-colors duration-300">{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Quick Stats */}
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 mt-4">
            {[
              { value: "100+", label: "Doctors" },
              { value: "500+", label: "Beds" },
              { value: "50K+", label: "Happy Patients" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
