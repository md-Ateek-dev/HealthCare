import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaAmbulance, FaStethoscope, FaTimes } from 'react-icons/fa';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);

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
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
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

  // Modal form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Your appointment request has been submitted!');
    setShowModal(false);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
      {/* Medical Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Hospital Logo */}
        <div className="mb-8 transform transition-all duration-1000 hover:scale-105">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mt-5 mx-auto shadow-lg border-2 border-blue-200">
            <FaHeartbeat className="text-4xl text-blue-600 animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1  data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
          Welcome to{' '}
          <span className="text-blue-600 relative">
            LifeCare
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-100 animate-pulse"></span>
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="h-16 mb-8 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-light text-gray-600 min-h-[2.5rem]">
            {displayText}
            <span className="animate-pulse text-blue-400 ml-1">|</span>
          </span>
        </div>

        {/* Description */}
        <p data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="mt-4 max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed">
          Providing exceptional healthcare services with compassion and expertise.
          <br />
          <span className="text-blue-500 font-medium">Your well-being, our greatest achievement.</span>
        </p>

        {/* CTA Buttons */}
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="mt-12 flex flex-col sm:flex-row gap-4">
          <button
            className="group relative bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <FaStethoscope className="text-lg" />
            <span className="relative z-10 cursor-pointer">Book Appointment</span>
          </button>
          <a
            href="tel:7054375826"
            className="group relative bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-200 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-blue-300 active:scale-95 flex items-center gap-2"
          >
            <FaAmbulance className="text-lg" />
            <span className="relative z-10">Emergency Contact</span>
          </a>
        </div>

        {/* Stats Section */}
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"
 className="mt-16 grid grid-cols-3 gap-8 text-center mb-5">
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600">100+</div>
            <div className="text-sm text-gray-500 mt-1">Expert Doctors</div>
          </div>
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl font-bold text-teal-600">10K+</div>
            <div className="text-sm text-gray-500 mt-1">Patients Yearly</div>
          </div>
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-500 mt-1">Emergency Service</div>
          </div>
        </div>
      </div>

      {/* Subtle Medical Icons Background */}
      <div className="absolute inset-10 pointer-events-none">
        {Array.from({length: 10}, (_, i) => (
          <FaHeartbeat 
            key={i}
            className="absolute text-blue-100 duration-2000 animate-none"
            style={{
              left: `${Math.random() * 50}%`,
              top: `${Math.random() * 50}%`,
              fontSize: `${2 + Math.random() * 1}rem`,
              animationDelay: `${Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-blue-700 hover:text-blue-900 text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Book an Appointment</h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="date"
                placeholder="Preferred Date"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <textarea
                placeholder="Reason for Appointment"
                rows={3}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
          <style>
            {`
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95);}
                to { opacity: 1; transform: scale(1);}
              }
              .animate-fadeIn { animation: fadeIn 0.2s;}
            `}
          </style>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
