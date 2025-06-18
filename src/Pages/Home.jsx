import React from 'react'
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import FooterSection from '../Components/FooterSection/FooterSection'
import AboutSection from '../Components/AboutSection/AboutSection'
import ServicesSection from '../Components/ServicesSection/ServicesSection'
import Departments from '../Components/DepartmentsSection/DepartmentsSection'
import DoctorsSection from '../Components/DoctorsSection/DoctorsSection'
import GellerySection from '../Components/GellerySection/GellerySection'
import HeroSection from '../Components/HeroSection/HeroSection'
import SliderSection from '../Components/SliderSection/SliderSection'
import BlogsSection from '../Components/BlogsSection/BlogsSection'
import ContactsSection from '../Components/ContactSection/ContactsSection'

const Home = () => {
  return (
    <>
<HeaderSection />
<SliderSection />
<HeroSection />
<AboutSection />
<ServicesSection />
<Departments/>
<BlogsSection />
<DoctorsSection />
<GellerySection />
<ContactsSection />
<FooterSection />

    </>
  )
}

export default Home