import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail, ExternalLink, Quote } from 'lucide-react';

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    { text: "Code is poetry in motion", author: "Anonymous" },
    { text: "Simplicity is the ultimate sophistication", author: "Leonardo da Vinci" },
    { text: "Design is not just what it looks like, design is how it works", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower", author: "Steve Jobs" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Aayush0966", label: "Github" },
    { icon: Linkedin, href: "www.linkedin.com/in/aayush-budhathoki-102954332", label: "LinkedIn" },
    { icon: Mail, href: "aayushx699@gmail.com", label: "Email" }
  ];

  const iconAnimation = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.footer 
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}

    >

    <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 sm:-top-64 -left-48 sm:-left-64 bg-emerald-500/10 rounded-full blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
   
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          animate={{
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
          animate={{
            backgroundPosition: ["-200% 0", "200% 0"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Quote Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center gap-2"
            >
              <Quote className="w-5 h-5 text-emerald-500" />
              <p className="text-gray-300 italic">
                "{quotes[currentQuote].text}"
              </p>
              <span className="text-emerald-500 ml-2">
                — {quotes[currentQuote].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
          variants={containerVariants}
        >
          {/* Logo Section */}
          <motion.div 
            className="text-center md:text-left space-y-3"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AAYUSH
            </motion.h2>
            <p className="text-gray-400 text-sm">
              Building the future, one pixel at a time
            </p>
          </motion.div>

          {/* Social Links with Enhanced Animations */}
          <motion.div 
            className="flex justify-center gap-6"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group relative"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={iconAnimation}
              >
                <motion.span 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  {social.label}
                </motion.span>
                <motion.div 
                  className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)"
                  }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links with Enhanced Hover Effects */}
          <motion.div 
            className="text-center md:text-right space-y-4"
            variants={itemVariants}
          >
            <motion.div className="inline-flex flex-col items-center md:items-end gap-2">
              {[
                { label: "Latest Projects", href: "#portfolio" },
                { label: "View Resume", href: "https://drive.google.com/file/d/11XTBjV3euCusWY1zdfTdffCn4YVqSyLC/view?usp=sharing" },
                { label: "Get in Touch", href: "#contact" }
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-sm">{link.label}</span>
                  <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            © {new Date().getFullYear()} AAYUSH • Built with passion
            <motion.span 
              className="text-emerald-500 ml-1"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

  
    </motion.footer>
  );
};

export default Footer;