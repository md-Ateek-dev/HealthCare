import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Doctor_logo.svg';
import {
  Menu, X, ChevronDown, User, Mail, Phone, Calendar, Edit2, Heart, Shield, MapPin, ArrowRight
} from 'lucide-react';

const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/aboutUs' },
  { name: 'Contact', link: '/contactus' },
  { name: 'Doctors', link: '/doctors' },
  { name: 'Departments', link: '/departments' },
];

const dropdownItems = [
  { name: 'Gallery', link: '/gellery', icon: Shield },
  { name: 'Blogs', link: '/blogs', icon: Edit2 },
  { name: 'Services', link: '/services', icon: MapPin },
];

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', appointmentDate: '', reason: '' });
  const menuRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const foundMain = menuItems.find(item => item.link === location.pathname);
    if (foundMain) setActive(foundMain.name);
    else {
      const foundDrop = dropdownItems.find(item => item.link === location.pathname);
      if (foundDrop) setActive(foundDrop.name);
    }
  }, [location.pathname]);

  useLayoutEffect(() => {
    let idx = menuItems.findIndex((item) => item.name === active);
    if (idx === -1 && dropdownItems.some(item => item.name === active)) idx = menuItems.length;
    if (menuRefs.current[idx]) {
      const el = menuRefs.current[idx];
      setUnderlineProps({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active, menuOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('✓ Appointment request submitted successfully!');
    setFormData({ fullName: '', email: '', phone: '', appointmentDate: '', reason: '' });
    setShowModal(false);
  };

  const closeMenus = (name) => {
    if (name) setActive(name);
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-white/40 py-1' : 'bg-white/60 backdrop-blur-lg shadow-sm border-b border-white/20 py-2'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16 relative">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer group transition-transform hover:scale-105 duration-300" onClick={() => closeMenus('Home')}>
              <div className="bg-blue-50 p-1.5 rounded-2xl shadow-inner group-hover:shadow-blue-200/50 transition-all duration-300">
                <img className="h-10 lg:h-11 transform group-hover:-rotate-3 transition-transform duration-300" src={logo} alt="logo" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-teal-500 bg-clip-text text-transparent tracking-tight">LifeCare</span>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest -mt-1 hidden lg:block">Healthcare Excellence</div>
              </div>
            </Link>

            {/* Desktop Navigation Grouped to the Center */}
            <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-1 relative bg-slate-50/50 p-1.5 rounded-2xl border border-slate-100/50">
                {menuItems.map((item, index) => (
                  <Link key={index} to={item.link} ref={el => menuRefs.current[index] = el} onClick={() => closeMenus(item.name)}
                    className={`relative px-4 py-2 text-[15px] font-bold transition-all duration-300 rounded-xl z-10 ${active === item.name ? 'text-blue-700' : 'text-slate-500 hover:text-blue-600 hover:bg-white/60'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)} ref={el => menuRefs.current[menuItems.length] = el}>
                  <button className={`flex items-center px-4 py-2 text-[15px] font-bold transition-all duration-300 rounded-xl z-10 ${dropdownItems.some(item => item.name === active) ? 'text-blue-700' : 'text-slate-500 hover:text-blue-600 hover:bg-white/60'
                    }`} onClick={() => setDropdownOpen(!dropdownOpen)}>
                    More
                    <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 origin-top transform ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    <div className="w-64 bg-white/95 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden p-2">
                      {dropdownItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        const isActive = active === item.name;
                        return (
                          <Link key={idx} to={item.link} onClick={() => closeMenus(item.name)}
                            className={`w-full flex items-center px-4 py-3 rounded-2xl text-left transition-all duration-200 group ${isActive ? 'bg-blue-50/80 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                              }`}
                          >
                            <div className={`p-2 rounded-xl mr-3 transition-colors duration-200 ${isActive ? 'bg-white shadow-sm text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-blue-500 group-hover:shadow-sm'}`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Tracking Underline Pill */}
                <div className="absolute bottom-1.5 top-1.5 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"
                  style={{ left: underlineProps.left, width: underlineProps.width }}
                />
              </div>
            </nav>

            {/* Desktop CTA */}
            <button
              className="hidden lg:flex items-center group relative px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-500 transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => setShowModal(true)}
            >
              <span className="relative z-10 flex items-center">
                <Calendar className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Book Appointment
              </span>
              <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors border border-slate-100 z-50" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`transition-transform duration-300 ${menuOpen ? 'rotate-90 scale-110' : ''}`}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Wrapper */}
        <div className={`lg:hidden fixed inset-x-0 top-[70px] bg-white/95 backdrop-blur-2xl border-t border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0 visible z-40' : 'opacity-0 -translate-y-4 invisible'}`}>
          <div className="max-w-md mx-auto px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.link} onClick={() => closeMenus(item.name)}
                className={`w-full block text-left px-5 py-3.5 rounded-2xl font-semibold transition-all duration-200 ${active === item.name ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <div>
              <button className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl font-semibold text-slate-600 hover:bg-slate-50 transition-all duration-200" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
                More
                <ChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdownOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="bg-slate-50/80 rounded-2xl mx-4 p-2">
                  {dropdownItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <Link key={idx} to={item.link} onClick={() => closeMenus(item.name)}
                        className={`w-full flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-200 ${active === item.name ? 'text-blue-700 bg-white shadow-sm' : 'text-slate-500 hover:text-blue-600 hover:bg-white/50'
                          }`}
                      >
                        <div className={`p-1.5 rounded-lg mr-3 ${active === item.name ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-6 pb-2">
              <button className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500"
                onClick={() => { setShowModal(true); setMenuOpen(false); }}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Appointment Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] p-8 w-full max-w-md transform transition-all scale-100 animate-in fade-in zoom-in-95 duration-300 border border-white/20">
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute -top-12 -left-2 w-16 h-16 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -top-8 -right-4 w-16 h-16 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">Book Visit</h2>
                <p className="text-slate-500 mt-1 font-medium">Skip the queue, reserve your time.</p>
              </div>
              <button className="p-2.5 bg-slate-50 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all duration-300 hover:rotate-90 relative z-10" onClick={() => setShowModal(false)}>
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
    </>
  );
};

export default HeaderSection;
