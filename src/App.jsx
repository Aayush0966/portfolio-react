import React from 'react';
import { useAnimation } from 'framer-motion';
import Header from './components/header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/aboutSection/AboutMe';
import SkillsSection from './components/Skills/Skills'
import PortfolioSection from './components/portfolioSection/PortfolioSection';

function App() {


  return (
    <>
      {/* Header remains static */}
      <Header />

      {/* HeroSection visible on load */}
      <HeroSection />

      {/* AboutMe section triggers its own internal animations */}
      <AboutMe />

      <SkillsSection />

      <PortfolioSection />

    </>
  );
}

export default App;
