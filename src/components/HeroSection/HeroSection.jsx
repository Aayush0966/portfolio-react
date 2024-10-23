import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatar from "/src/assets/avatar.png"
import DetailsSection from './DetailsSection';
import AvatarSection from './AvatarSection';

function HeroSection() {
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 sm:-top-64 -left-48 sm:-left-64 bg-blue-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -bottom-48 sm:-bottom-64 -right-48 sm:-right-64 bg-emerald-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <div className="max-w-screen-2xl pt-28 mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-24 relative z-10">
         <DetailsSection itemVariants={itemVariants}  />
        <AvatarSection itemVariants={itemVariants} glowVariants={glowVariants} />
      </div>
    </motion.div>
  );
}

export default HeroSection;