import React from 'react'
import HeaderSection from '../Components/HeaderSection/HeaderSection'
import FooterSection from '../Components/FooterSection/FooterSection'
import AboutSection from '../Components/AboutSection/AboutSection'
import ServicesSection from '../Components/ServicesSection/ServicesSection'
import Departments from '../Components/DepartmentsSection/DepartmentsSection'
import DoctorsSection from '../Components/DoctorsSection/DoctorsSection'
import GellerySection from '../Components/GellerySection/GellerySection'
import HeroSection from '../Components/HeroSection/HeroSection'
import BlogsSection from '../Components/BlogsSection/BlogsSection'

const Home = () => {
  return (
    <>
<HeaderSection />
<HeroSection />
<AboutSection />
<ServicesSection />
<Departments/>
{/* <BlogsSection /> */}
<DoctorsSection />
{/* <GellerySection /> */}
<FooterSection />

    </>
  )
}

export default Home