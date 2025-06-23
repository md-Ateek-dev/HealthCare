import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Doctor_logo.svg';
import { 
  Menu, X, ChevronDown, User, Mail, Phone, Calendar, Edit2, Heart, Shield, MapPin
} from 'lucide-react';

const LogoIcon = () => (
  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
    <Heart className="text-white text-xl" />
  </div>
);

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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    reason: ''
  });
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
    if (idx === -1 && dropdownItems.some(item => item.name === active)) {
      idx = menuItems.length;
    }
    if (menuRefs.current[idx]) {
      const el = menuRefs.current[idx];
      setUnderlineProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active, menuOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('✓ Appointment request submitted successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      appointmentDate: '',
      reason: ''
    });
    setShowModal(false);
  };

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 lg:h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                setActive('Home');
                setMenuOpen(false);
                setDropdownOpen(false);
                setMobileDropdownOpen(false);
              }}
            >
              <img className="h-10 lg:h-12" src={logo} alt="logo" />
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  LifeCare
                </span>
                <div className="text-xs text-gray-500 -mt-1">Healthcare Excellence</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-center space-x-1 relative">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    ref={el => menuRefs.current[index] = el}
                    onClick={() => {
                      setActive(item.name);
                      setMenuOpen(false);
                      setDropdownOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                    className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-xl hover:bg-blue-50/50 ${
                      active === item.name 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  ref={el => menuRefs.current[menuItems.length] = el}
                >
                  <button
                    className={`flex items-center px-4 py-2 font-medium transition-all duration-200 rounded-xl hover:bg-blue-50/50 ${
                      dropdownItems.some(item => item.name === active) 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    More 
                    <ChevronDown 
                      className={`ml-1 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl overflow-hidden">
                      {dropdownItems.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={idx}
                            to={item.link}
                            onClick={() => {
                              setActive(item.name);
                              setDropdownOpen(false);
                              setMenuOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            className={`w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-blue-50/70 hover:text-blue-600 transition-all duration-150 ${
                              active === item.name ? 'bg-blue-50/70 text-blue-600 font-medium' : ''
                            }`}
                          >
                            <IconComponent className="mr-3 text-lg" />
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Underline */}
                <div
                  className="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out"
                  style={{
                    left: underlineProps.left,
                    width: underlineProps.width,
                  }}
                />
              </div>
            </nav>

            {/* Desktop CTA */}
            <button
              className="hidden lg:flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:-translate-y-0.5"
              onClick={() => setShowModal(true)}
            >
              <Calendar className="mr-2 w-4 h-4" />
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100/50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
            <div className="max-w-md mx-auto px-4 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => {
                    setActive(item.name);
                    setMenuOpen(false);
                    setDropdownOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                  className={`w-full block text-left px-4 py-3 rounded-xl font-medium transition-all duration-150 ${
                    active === item.name 
                      ? 'bg-blue-50 text-blue-600 border border-blue-200/50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-all duration-150"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  More
                  <ChevronDown 
                    className={`transition-transform duration-200 ${
                      mobileDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="overflow-hidden bg-gray-50/50 rounded-xl mt-2 ml-4">
                    {dropdownItems.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={() => {
                            setActive(item.name);
                            setDropdownOpen(false);
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className={`w-full flex items-center px-4 py-3 text-sm font-medium text-left transition-all duration-150 ${
                            active === item.name 
                              ? 'text-blue-600 bg-blue-50/70' 
                              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/30'
                          }`}
                        >
                          <IconComponent className="mr-3 w-4 h-4" />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
                  onClick={() => {
                    setShowModal(true);
                    setMenuOpen(false);
                  }}
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Centered Appointment Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Book Appointment</h2>
                <p className="text-gray-500 text-sm">Schedule your visit with us</p>
              </div>
              <button
                className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-all hover:scale-110"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative group">
                <Edit2 className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors w-4 h-4" />
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Reason for Appointment"
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 rounded-xl shadow hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSection;
