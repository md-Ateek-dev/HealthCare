import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Logo from '../../assets/Doctor_logo.svg';

// Main menu items (no Gallery, Blogs, Services here)
const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/aboutUs' },
  { name: 'Contact', link: '/contactus' },
  { name: 'Doctors', link: '/doctors' },
  { name: 'Departments', link: '/departments' },
];

// Dropdown menu items
const dropdownItems = [
  { name: 'Gallery', link: '/gellery' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Services', link: '/services' },
];

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const menuRefs = useRef([]);
  const location = useLocation();

  // Set active based on current route
  React.useEffect(() => {
    // Check main menu first
    const foundMain = menuItems.find(item => item.link === location.pathname);
    if (foundMain) {
      setActive(foundMain.name);
    } else {
      // Then check dropdown
      const foundDrop = dropdownItems.find(item => item.link === location.pathname);
      if (foundDrop) setActive(foundDrop.name);
    }
  }, [location.pathname]);

  // Set underline position and width when active changes
  useLayoutEffect(() => {
    let idx = menuItems.findIndex((item) => item.name === active);
    // If not found in main, check if active is dropdown
    if (idx === -1 && active === 'More') {
      idx = menuItems.length; // underline under "More"
    }
    if (menuRefs.current[idx]) {
      const el = menuRefs.current[idx];
      setUnderlineProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active, menuOpen]);

  // Handle main menu click
  const handleMenuClick = (item) => {
    setActive(item.name);
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Handle dropdown menu click
  const handleDropdownClick = (item) => {
    setActive(item.name);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  // Handle More hover/focus for desktop
  const handleMoreMouseEnter = () => setDropdownOpen(true);
  const handleMoreMouseLeave = () => setDropdownOpen(false);

  // Handle More toggle for mobile
  const handleMobileMoreClick = () => setMobileDropdownOpen((prev) => !prev);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur shadow-md z-50 transition-all">
      <div className="max-w-6xl mx-auto py-3 px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-extrabold text-blue-700 tracking-tight hidden sm:inline">LifeCare</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block relative">
          <div className="flex space-x-8 relative">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                ref={el => menuRefs.current[index] = el}
                onClick={() => handleMenuClick(item)}
                className={`px-2 py-1 font-medium transition cursor-pointer ${
                  active === item.name ? 'text-blue-600' : 'text-blue-800 hover:text-blue-500'
                }`}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {item.name}
              </Link>
            ))}
            {/* More Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={handleMoreMouseEnter}
              onMouseLeave={handleMoreMouseLeave}
              ref={el => menuRefs.current[menuItems.length] = el}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <button
                className={`flex items-center px-2 py-1 font-medium transition duration-100 cursor-pointer ${
                  dropdownItems.some(item => item.name === active) ? 'text-blue-600' : 'text-blue-800 hover:text-blue-500'
                }`}
                onClick={() => setDropdownOpen((prev) => !prev)}
                type="button"
              >
                More <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white border border-blue-100 rounded-xl shadow-lg z-50">
                  {dropdownItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.link}
                      onClick={() => handleDropdownClick(item)}
                      className={`block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition rounded-xl ${
                        active === item.name ? 'font-semibold bg-blue-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-blue-500 rounded-full"
              layout
              initial={false}
              animate={{
                left: underlineProps.left,
                width: underlineProps.width,
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              style={{ zIndex: 0 }}
            />
          </div>
        </nav>

        {/* Desktop CTA */}
        <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-200 hover:scale-105">
          Book Appointment
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => handleMenuClick(item)}
              className={`text-lg font-semibold transition relative ${
                active === item.name ? 'text-blue-600 underline underline-offset-4' : 'text-blue-700 hover:text-blue-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button
              className="flex items-center text-lg font-semibold text-blue-800 hover:text-blue-500 transition mb-2"
              onClick={handleMobileMoreClick}
              type="button"
            >
              More <FiChevronDown className="ml-1" />
            </button>
            {mobileDropdownOpen && (
              <div className="w-44 bg-white border border-blue-100 rounded-xl shadow-lg z-50">
                {dropdownItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    onClick={() => {
                      handleDropdownClick(item);
                      setMobileDropdownOpen(false);
                    }}
                    className={`block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition rounded-xl text-center ${
                      active === item.name ? 'font-semibold bg-blue-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-200 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
