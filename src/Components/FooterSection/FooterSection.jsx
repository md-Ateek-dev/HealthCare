import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Facebook, FacebookIcon, InstagramIcon, Linkedin, Twitter } from 'lucide-react'
import Logo from '/src/assets/Doctor_logo.svg'; // Replace with your logo path

const FooterSection = () => (
  <footer className="relative bg-[#0b1c3e] text-slate-300 pt-20 pb-8 px-4 border-t-4 border-blue-500 overflow-hidden">
    {/* Subtle Background Glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
      {/* Branding & Description */}
      <div className="space-y-6">
        <div className="bg-white/5 inline-block p-3 rounded-2xl backdrop-blur-sm border border-white/10">
          <img src={Logo} alt="Hospital Logo" className="h-14 brightness-0 invert" />
        </div>
        <p className="text-slate-400 leading-relaxed text-sm pr-4">
          LifeCare Hospital is dedicated to providing compassionate, world-class healthcare for your family. Your health, our priority.
        </p>
        <div className="flex space-x-4 pt-2">
          {[
            { icon: FacebookIcon, href: "https://www.facebook.com/share/192oPcVNFH/", label: "Facebook" },
            { icon: Twitter, href: "https://x.com/md_Ateek09?t=d03tkdmtmo5cmjJTv0b4PA&s=09", label: "Twitter" },
            { icon: InstagramIcon, href: "https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx", label: "Instagram" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-ateek-80a949256?", label: "LinkedIn" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-sm"
            >
              <social.icon size={18} absoluteStrokeWidth={social.icon === Twitter || social.icon === InstagramIcon} />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-white text-lg mb-6 relative inline-block">
          Quick Links
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
        </h3>
        <ul className="space-y-3">
          {['Home', 'About Us', 'Departments', 'Doctors', 'Contact'].map((link, index) => (
            <li key={index}>
              <a href="#" className="text-slate-400 hover:text-blue-400 hover:translate-x-2 transition-transform inline-block duration-300 flex items-center gap-2 text-sm">
                <span className="text-blue-500 text-xs text-opacity-0 -ml-4 transition-all duration-300 group-hover:text-opacity-100 group-hover:ml-0">❯</span>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-white text-lg mb-6 relative inline-block">
          Contact Us
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
        </h3>
        <ul className="space-y-4 text-sm text-slate-400">
          <a href="tel:7054375826" className="group">
            <li className="flex items-start gap-4 hover:text-white transition-colors duration-300">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                <FaPhoneAlt size={12} />
              </div>
              <div>
                <p className="block text-xs uppercase tracking-wider text-slate-500 mb-0.5">Call Us</p>
                <span className="font-medium">+91 7054375826</span>
              </div>
            </li>
          </a>
          <a href="mailto:mohdateek.dev@gmail.com" className="group block mt-4">
            <li className="flex items-start gap-4 hover:text-white transition-colors duration-300">
              <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                <FaEnvelope size={12} />
              </div>
              <div>
                <p className="block text-xs uppercase tracking-wider text-slate-500 mb-0.5">Email Us</p>
                <span className="font-medium">info@lifecarehospi.com</span>
              </div>
            </li>
          </a>
          <li className="flex items-start gap-4 mt-4 cursor-pointer hover:text-white transition-colors duration-300 group">
            <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
              <FaMapMarkerAlt size={12} />
            </div>
            <div>
              <p className="block text-xs uppercase tracking-wider text-slate-500 mb-0.5">Location</p>
              <span className="font-medium">Lucknow Kurshi Road,<br />Uttar Pradesh</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="font-bold text-white text-lg mb-6 relative inline-block">
          Newsletter
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
        </h3>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          Subscribe to our newsletter for the latest health tips and hospital updates.
        </p>
        <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 rounded-full transition-colors text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} LifeCare Hospital. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
        <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Terms of Service</a>
        <span className="text-slate-600 hidden md:inline">|</span>
        <a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Developed by <span className="text-blue-400">@Mohd Ateek</span></a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
