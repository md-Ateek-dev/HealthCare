import React from 'react';
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Services from '../Pages/Services';
import Blogs from '../Pages/Blogs';
import Gellery from '../Pages/Gellery';
import Doctors from '../Pages/Doctors';
import Departments from '../Pages/Departments';
import Hero from '../Pages/Hero';

const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/gellery" element={<Gellery />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Departments" element={<Departments />} />
    </RouterRoutes>
  );
};

export default AppRoutes;
