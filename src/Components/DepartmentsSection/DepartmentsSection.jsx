import React from 'react';
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

const DepartmentsSection = () => (
  <section className="bg-white py-16 px-4" id="departments">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4">Our Departments</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        LifeCare Hospital brings together leading specialists across a wide range of departments to provide comprehensive healthcare for every need.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="bg-blue-50 rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
          >
            {dept.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{dept.name}</h3>
            <p className="text-gray-600">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DepartmentsSection;
