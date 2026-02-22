import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Message sent successfully!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#2563eb', // Tailwind blue-600
      customClass: {
        popup: 'rounded-2xl',
      }
    }).then(() => {
      // After alert, submit the form to Formsubmit
      formRef.current.submit();
    });
  };

  return (
    <section className="relative min-h-screen bg-[#f8fafc] py-28 px-4 flex flex-col items-center overflow-hidden" id='contact'>

      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40rem] h-[40rem] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Heading */}
      <div className="max-w-3xl text-center mb-16 relative z-10">
        <div data-aos="fade-down" data-aos-duration="1000">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-200/60 backdrop-blur-sm">
            Get in Touch
          </span>
        </div>
        <h1
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
          className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
        >
          Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">LifeCare</span>
        </h1>
        <p
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
          className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
          We're here to help. Reach out for appointments, questions, or emergencies—our team responds quickly and compassionately.
        </p>
      </div>

      {/* Main Content */}
      <div
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
        className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
      >

        {/* Contact Information & Map (Takes 2/5 width on large screens) */}
        <div className="lg:col-span-2 flex flex-col gap-8 h-full">
          {/* Info Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-500">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
            <ul className="space-y-6">
              {[
                { icon: FaPhoneAlt, text: '+91 7054375826', link: 'tel:7054375826', color: 'text-blue-600', bg: 'bg-blue-100' },
                { icon: FaEnvelope, text: 'mohdateek.dev@gmail.com', link: 'mailto:mohdateek.dev@gmail.com', color: 'text-indigo-600', bg: 'bg-indigo-100' },
                { icon: FaMapMarkerAlt, text: '123 Main Road, City, India', color: 'text-rose-600', bg: 'bg-rose-100' },
                { icon: FaClock, text: 'Mon-Sat: 8:00am - 8:00pm', color: 'text-emerald-600', bg: 'bg-emerald-100' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className={`mt-1 p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wider">{item.icon.name.replace('Fa', '')}</span>
                    {item.link ? (
                      <a href={item.link} className="text-slate-800 font-bold hover:text-blue-600 transition-colors">{item.text}</a>
                    ) : (
                      <span className="text-slate-800 font-bold">{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 p-3 h-full min-h-[250px] overflow-hidden group">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902599980118!2d72.8346543154312!3d19.07283018708944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d8f8e7e9b%3A0x1d8e1b4b6d8e7e9b!2sHospital!5e0!3m2!1sen!2sin!4v1623242342342!5m2!1sen!2sin"
                className="w-full h-full min-h-[250px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Form (Takes 3/5 width on large screens) */}
        <div className="lg:col-span-3 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white p-8 md:p-12 h-full">
          <form
            ref={formRef}
            className="flex flex-col h-full justify-between gap-6"
            action="https://formsubmit.co/mohdateek.dev@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Submission - LifeCare Hospital" />

            <div className="mb-4">
              <h2 className="text-3xl font-black text-slate-800 mb-3">Send Us a Message</h2>
              <p className="text-slate-500 font-medium">Fill out the form below and we will get back to you as soon as possible.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 font-medium text-slate-700"
                  required
                />
              </div>
              {/* Phone */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <FaPhoneAlt />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 font-medium text-slate-700"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 font-medium text-slate-700"
                required
              />
            </div>

            {/* Message */}
            <div className="relative group flex-grow">
              <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <FaEnvelope />
              </div>
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={6}
                className="w-full h-full min-h-[150px] pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-slate-400 font-medium text-slate-700 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full sm:w-auto self-start px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-[0_10px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                Send Message
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
