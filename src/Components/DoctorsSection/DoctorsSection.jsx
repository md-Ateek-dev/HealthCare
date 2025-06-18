import React, { useEffect, useState } from 'react';
import { FaUserMd, FaStethoscope, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Ayesha Sharma',
    specialty: 'Cardiologist',
    photo: '/src/assets/Hospital5.avif',
    description: 'Expert in interventional cardiology with 15+ years of experience.',
  },
  {
    name: 'Dr. Rahul Mehra',
    specialty: 'General Surgeon',
    photo: '/src/assets/Doctor1.avif',
    description: 'Specializes in minimally invasive surgeries and patient care.',
  },
  {
    name: 'Dr. Priya Verma',
    specialty: 'Pediatrician',
    photo: '/src/assets/doctor2.avif',
    description: 'Dedicated to child health and preventive medicine.',
  },
  {
    name: 'Dr. Sameer Khan',
    specialty: 'Neurologist',
    photo: '/src/assets/Doctor3.avif',
    description: 'Focuses on neurological disorders and patient rehabilitation.',
  },
  {
    name: 'Dr. Nisha Patel',
    specialty: 'Dermatologist',
    photo: '/src/assets/Doctor2.avif',
    description: 'Expert in skin care and cosmetic treatments.',
  },
];

const specialtyIcons = {
  Cardiologist: <FaHeartbeat className="text-red-500 text-lg" />,
  'General Surgeon': <FaUserMd className="text-blue-600 text-lg" />,
  Pediatrician: <FaStethoscope className="text-green-500 text-lg" />,
  Neurologist: <FaUserMd className="text-purple-600 text-lg" />,
  Dermatologist: <FaUserMd className="text-pink-600 text-lg" />,
};

function getVisibleCards() {
  if (window.innerWidth < 640) return 1; // mobile
  return 3; // desktop/tablet
}

const DoctorsSection = () => {
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [index, setIndex] = useState(0);

  // Responsive listener
  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate doctors array for infinite loop
  const cards = [...doctors, ...doctors];

  // Slide one card at a time, every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % doctors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Only show full cards: shift by 100% per card
  const shiftPercent = (100 / cards.length) * index;

  return (
    <section className="bg-white py-16 px-4" id="doctors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4">Meet Our Doctors</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our experienced and compassionate medical team is dedicated to providing the highest standard of care across all specialties.
        </p>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${shiftPercent}%` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            style={{
              width: `${(cards.length / visibleCards) * 100}%`,
            }}
          >
            {cards.map((doc, idx) => (
              <div
                key={idx}
                className="px-3 flex-shrink-0"
                style={{
                  width: `${100 / visibleCards}%`,
                  minWidth: visibleCards === 1 ? '90vw' : '300px',
                  maxWidth: visibleCards === 1 ? '95vw' : '350px',
                }}
              >
                <div className="bg-blue-50 border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center mx-2">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow mb-4 mx-auto"
                  />
                  <h3 className="text-xl font-semibold text-blue-700 mb-1">{doc.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {specialtyIcons[doc.specialty] || <FaUserMd className="text-blue-600 text-lg" />}
                    <span className="text-gray-700 font-medium">{doc.specialty}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{doc.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
