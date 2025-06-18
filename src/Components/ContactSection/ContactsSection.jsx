import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';

const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Message sent successfully!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#2563eb', // Tailwind blue-600
    }).then(() => {
      // After alert, submit the form to Formsubmit
      formRef.current.submit();
    });
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4 flex flex-col items-center" id='contact'>
      {/* Hero Heading */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Contact LifeCare Hospital</h1>
        <p className="text-lg text-gray-700">
          We're here to help. Reach out for appointments, questions, or emergencies—our team responds quickly and compassionately.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          ref={formRef}
          className="flex flex-col gap-4"
          action="https://formsubmit.co/mohdateek.dev@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Submission - LifeCare Hospital" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Send Us a Message</h2>
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              required
            />
          </div>
          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              required
            />
          </div>
          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
          </div>
          {/* Message */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-blue-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="pl-10 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Contact Information</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" /> <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" /> <span>info@lifecarehospital.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" /> <span>123 Main Road, City, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-blue-600" /> <span>Mon-Sat: 8:00am - 8:00pm</span>
              </li>
            </ul>
          </div>
          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902599980118!2d72.8346543154312!3d19.07283018708944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d8f8e7e9b%3A0x1d8e1b4b6d8e7e9b!2sHospital!5e0!3m2!1sen!2sin!4v1623242342342!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
