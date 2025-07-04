import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { Facebook, FacebookIcon, InstagramIcon, Linkedin, Twitter } from 'lucide-react'
import Logo from '/src/assets/Doctor_logo.svg'; // Replace with your logo path

const FooterSection = () => (
  <footer className="bg-blue-900 text-white pt-12 pb-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Branding & Description */}
      <div>
        <img src={Logo} alt="Hospital Logo" className="h-12 mb-4" />
        <p className="text-gray-200 mb-4">
          LifeCare Hospital is dedicated to providing compassionate, world-class healthcare for your family. Your health, our priority.
        </p>
        <div className="flex space-x-3 mt-2">
          <a href="https://www.facebook.com/share/192oPcVNFH/" aria-label="Facebook" className="hover:text-blue-400"><FacebookIcon/></a>
          <a href="https://x.com/md_Ateek09?t=d03tkdmtmo5cmjJTv0b4PA&s=09" aria-label="Twitter" className="hover:text-blue-400"><Twitter absoluteStrokeWidth /></a>
          <a href="https://www.instagram.com/md_ateek09?igsh=ajZjNnFreWhwYWgx" aria-label="Instagram" className="hover:text-blue-400"><InstagramIcon absoluteStrokeWidth /></a>
          <a href="https://www.linkedin.com/in/mohd-ateek-80a949256?" aria-label="LinkedIn" className="hover:text-blue-400"><Linkedin /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
        <ul className="space-y-2 text-gray-200">
          <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">About Us</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Departments</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Doctors</a></li>
          <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
        <ul className="space-y-3 text-gray-200">
         <a href="tel: 7054375826"> <li className="flex mt-1 items-center gap-2 cursor-pointer"><FaPhoneAlt /> +91 7054375826</li></a>
         <a href="mohdateek.dev@gmail.com"> <li className="mt-1 flex items-center gap-2 cursor-pointer"><FaEnvelope /> info@lifecarehospi.com</li> </a>
          <li className="flex mt-1 items-center gap-2 cursor-pointer"><FaMapMarkerAlt /> Lucknow Kurshi Road, Uttar Pradesh</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
        <p className="text-gray-200 mb-3">Subscribe for health tips and hospital updates:</p>
        <form className="flex">
          <input
            type="email"
            className="rounded-l-sm border-1 placeholder:text-white border-amber-50 px-3 py-2 text-white w-full focus:outline-none"
            placeholder="Your email"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 border-1 border-amber-50 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-r-sm font-semibold transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="border-t border-blue-700 mt-10 pt-4 text-center text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} LifeCare Hospital. All rights reserved.
      <a href="#" className="ml-8 hover:text-blue-300">Privacy Policy</a> 
      <a href="#" className="ml-8 hover:text-blue-300">Terms of Service</a>  
      <a href="#" className="ml-8 hover:text-blue-300">Developed by @Mohd Ateek</a>
    </div>
  </footer>
);

export default FooterSection;
