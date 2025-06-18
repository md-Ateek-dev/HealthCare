import React from 'react';
import { FaUserMd, FaHospital, FaRegSmile } from 'react-icons/fa';
import Hospital_bg from '/src/assets/hospital_About.avif'; // Use your hospital image here

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={Hospital_bg}
            alt="Hospital Building"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">About LifeCare Hospital</h2>
          <p className="text-lg text-gray-700 mb-6">
            LifeCare Hospital has been dedicated to providing compassionate, world-class healthcare to our community for over a decade. Our team of expert doctors, nurses, and staff work around the clock to ensure every patient receives personalized care in a safe and comfortable environment.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <FaUserMd className="text-blue-600 text-xl" />
              <span>Highly qualified and experienced medical professionals</span>
            </li>
            <li className="flex items-center gap-3">
              <FaHospital className="text-blue-600 text-xl" />
              <span>State-of-the-art facilities and advanced equipment</span>
            </li>
            <li className="flex items-center gap-3">
              <FaRegSmile className="text-blue-600 text-xl" />
              <span>Patient-centric approach and compassionate care</span>
            </li>
          </ul>
          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">100+</div>
              <div className="text-gray-500">Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">500+</div>
              <div className="text-gray-500">Beds</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">50K+</div>
              <div className="text-gray-500">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
