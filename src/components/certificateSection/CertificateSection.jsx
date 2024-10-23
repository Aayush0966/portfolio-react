import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from './certificateData.js';
import CertificateCard from './CertificateCard';
import SectionHeader from "../common/SectionHeader";
import AvatarSVG from '/src/assets/certificateAvatar.svg'; // Import the avatar SVG component

const CertificatesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Certificates will animate one after another
      },
    },
  };

  const avatarVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, y: 50, opacity: 0 },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex flex-col justify-center items-center py-24 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animates when 30% of the section is visible
    >
      {/* Background glow effects */}
      <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 sm:-top-64 -left-48 sm:-left-64 bg-emerald-500/20 rounded-full blur-3xl"
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
      <div className="mb-16 md:mb-20">
        <SectionHeader title="Certificates" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          {/* Certificates grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animates when 20% of the section is visible
            className="grid grid-cols-1 gap-12 md:gap-16 justify-items-center"
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants} // Each certificate will have the "pop-in" effect
                className="w-full"
              >
                <CertificateCard certificate={cert} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative w-full flex justify-center lg:justify-end mb-8 md:mb-12 lg:mb-16"
          variants={avatarVariants}
        >
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden"
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.8)" }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={AvatarSVG} alt="User Avatar" className="w-full h-full p-4 sm:p-6 md:p-8" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
