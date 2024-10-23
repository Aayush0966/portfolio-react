import React from 'react';
import Header from './components/header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/aboutSection/AboutMe';
import SkillsSection from './components/Skills/Skills'
import PortfolioSection from './components/portfolioSection/PortfolioSection';
import CertificatesSection from './components/certificateSection/CertificateSection';
import ContactMe from './components/ContactSection/ContactMe';
import Footer from './components/Footer/Footer';
import "./App.css"

function App() {


  return (
    <>
      <Header />

      <HeroSection />

      <AboutMe />

      <SkillsSection />

      <PortfolioSection />

      <CertificatesSection />

      <ContactMe />

      <Footer />


    </>
  );
}

export default App;
