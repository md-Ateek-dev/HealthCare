import React, { useState, useEffect } from 'react';
import { HeartPulse, Truck, Stethoscope, X, User, Mail, Phone, Calendar, Edit2 } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', appointmentDate: '', reason: '' });

  const texts = [
    'Compassionate Care for All.',
    'Your Health, Our Priority.',
    'Trusted Medical Experts.',
  ];

  useEffect(() => {
    let timeout;
    const currentString = texts[currentText];
    if (isTyping) {
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentText, texts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('✓ Your appointment request has been submitted successfully!');
    setFormData({ fullName: '', email: '', phone: '', appointmentDate: '', reason: '' });
    setShowModal(false);
  };

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col justify-center items-center bg-[#fafcff] overflow-hidden pt-20">

      {/* Decorative Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[45%] bg-teal-300/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center text-center">

        {/* Floating Badge */}
        <div data-aos="fade-down" data-aos-duration="1000" className="opacity-0 animate-[fade-in-down_1s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 shadow-sm mb-8 hover:shadow-md transition-shadow">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">LifeCare Medical Center</span>
          </div>
        </div>

        {/* Heart Icon Wrapper */}
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="mb-8 transform transition-all duration-500 hover:scale-110">
          <div className="w-20 h-20 bg-gradient-to-br from-white to-blue-50 rounded-[2rem] flex items-center justify-center mx-auto shadow-[0_10px_40px_-10px_rgba(37,99,235,0.3)] border border-white relative group">
            <div className="absolute inset-0 bg-blue-400 rounded-[2rem] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            <HeartPulse className="text-4xl text-blue-600 animate-pulse drop-shadow-sm" strokeWidth={2.5} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black mb-6 text-slate-800 leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Welcome to{' '}
          <span className="relative inline-block px-2">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400">LifeCare</span>
            <svg className="absolute -bottom-2 left-0 w-full h-4 text-blue-200/50 -z-0" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="transparent" />
            </svg>
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="h-10 sm:h-12 md:h-16 mb-6 flex items-center justify-center">
          <span className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-500 min-h-[2.5rem] tracking-wide">
            {displayText}
            <span className="animate-pulse text-blue-500 ml-1 font-light">|</span>
          </span>
        </div>

        {/* Description */}
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mt-2 max-w-2xl text-slate-500 text-lg md:text-xl leading-relaxed font-medium mx-auto">
          Providing exceptional healthcare services with compassion and expertise.
          <br className="hidden sm:block" />
          <span className="text-blue-600 font-bold"> Your well-being, our greatest achievement.</span>
        </p>

        {/* CTA Buttons */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <button
            className="group relative w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_4px_20px_-4px_rgba(37,99,235,0.5)] transform transition-all duration-300 hover:shadow-[0_8px_25px_-4px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
            onClick={() => setShowModal(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Stethoscope className="w-5 h-5 relative z-10" />
            <span className="relative z-10 tracking-wide">Book Appointment</span>
          </button>

          <a
            href="tel:7054375826"
            className="group relative w-full sm:w-auto bg-white text-slate-700 px-8 py-4 rounded-full font-bold shadow-md shadow-slate-200/50 transform transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1 hover:text-blue-600 active:scale-95 flex items-center justify-center gap-3 border border-slate-100"
          >
            <div className="bg-red-50 p-2 rounded-full text-red-500 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
              <Truck className="w-4 h-4" />
            </div>
            <span className="tracking-wide">Emergency: 7054375826</span>
          </a>
        </div>

        {/* Stats Section with Glassmorphism */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-center w-full max-w-4xl mx-auto pb-10">
          {[
            { value: "100+", label: "Expert Doctors", color: "from-blue-600 to-cyan-500" },
            { value: "10K+", label: "Patients Yearly", color: "from-teal-500 to-emerald-400" },
            { value: "24/7", label: "Emergency Care", color: "from-indigo-500 to-purple-500" }
          ].map((stat, idx) => (
            <div key={idx} className="relative group p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
              <div className={`absolute inset-x-0 -top-px h-px w-1/2 mx-auto bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Modal (styled to match Header Section exactly) */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 w-full max-w-md transform transition-all scale-100 animate-[fade-in-up_0.3s_ease-out] border border-white/20 relative overflow-hidden">

            <div className="absolute -top-12 -left-2 w-16 h-16 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -top-8 -right-4 w-16 h-16 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Book Visit</h2>
                <p className="text-slate-500 mt-1 font-medium">Skip the queue, reserve your time.</p>
              </div>
              <button className="p-2.5 bg-slate-50 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-300 hover:rotate-90" onClick={() => setShowModal(false)}>
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            <form className="space-y-4 relative z-10" onSubmit={handleFormSubmit}>
              {[
                { name: 'fullName', type: 'text', placeholder: 'Full Name', icon: User },
                { name: 'email', type: 'email', placeholder: 'Email Address', icon: Mail },
                { name: 'phone', type: 'tel', placeholder: 'Phone Number', icon: Phone },
                { name: 'appointmentDate', type: 'date', placeholder: '', icon: Calendar },
              ].map((field, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300">
                    <field.icon className="w-5 h-5" />
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400"
                    required
                  />
                </div>
              ))}

              <div className="relative group">
                <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-300">
                  <Edit2 className="w-5 h-5" />
                </div>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Reason for Appointment"
                  rows={3}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-300 font-medium text-slate-700 placeholder:text-slate-400 resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full relative group overflow-hidden bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5">
                  <span className="relative z-10">Confirm Appointment</span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
