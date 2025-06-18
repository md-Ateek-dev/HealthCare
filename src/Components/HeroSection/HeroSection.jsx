import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaAmbulance, FaStethoscope } from 'react-icons/fa';
// import Logo from '../../assets/Doctor_logo.svg';
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
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

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
      {/* Medical Background Elements */}
      <div className="absolute inset-0">
        {/* Soft Medical Waves */}
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
            {/* <img cla src={Logo} alt="" /> */}
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
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
        <p className="mt-4 max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed">
          Providing exceptional healthcare services with compassion and expertise.
          <br />
          <span className="text-blue-500 font-medium">Your well-being, our greatest achievement.</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button className="group relative bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center gap-2">
            <FaStethoscope className="text-lg" />
            <span className="relative z-10">Book Appointment</span>
          </button>
          
          <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-200 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-blue-300 active:scale-95 flex items-center gap-2">
            <FaAmbulance className="text-lg" />
            <span className="relative z-10">Emergency Contact</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center mb-5">
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
    </div>
  );
};

export default HeroSection;
