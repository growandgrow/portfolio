import React from 'react';
import HomeSection from '../components/subsection/homeSection';
import AboutSection from '../components/subsection/aboutSection';
import ResumeSection from '../components/subsection/resumeSection';
import PortfolioSection from '../components/subsection/portfolioSection';
import BlogSection from '../components/subsection/blogSection';
import ContactSection from '../components/subsection/contactSection';
import ServiceSection from '../components/subsection/serviceSection';
import PriceSection from '../components/subsection/priceSection';
import HireMeSection from '../components/subsection/hireMeSection';

const Home = () => {
  return (
    <main id="main">
      <HomeSection/>
      <AboutSection/>
      <ResumeSection/>
      {/* <ServiceSection/> */}
      {/* <PriceSection/> */}
      <HireMeSection/>
      <PortfolioSection/>
      {/* <BlogSection/> */}
      <ContactSection/>
    </main>
  );
};

export default Home;
