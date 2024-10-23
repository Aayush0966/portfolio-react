import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const ContactMe = () => {
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
        stiffness: 100,
        damping: 12
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
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div id='contact' className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 text-white py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 sm:-top-64 -right-48 sm:-right-64 bg-emerald-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -bottom-48 sm:-bottom-64 -left-48 sm:-left-64 bg-emerald-500/20 rounded-full blur-3xl"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16 space-y-4"
          variants={itemVariants}
        >
          <SectionHeader title="Contact Me" />
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            ~ Crafting digital solutions that inspire, delight, and push the boundaries ~
          </p>
        </motion.div>

        <motion.div 
          className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-xl border border-gray-700/50 shadow-2xl"
          variants={itemVariants}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 rounded-2xl" />
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 md:col-span-1">
              {[
                { icon: Mail, text: "aayushx699@gmail.com", label: "Email" },
                { icon: Phone, text: "", label: "Phone" },
                { icon: MapPin, text: "Itahari, Nepal", label: "Location" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div 
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                  >
                    <div className="p-3 rounded-lg bg-gray-900/60 group-hover:bg-gray-900/80 transition-all">
                      <item.icon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.label}</p>
                      <p className="text-sm font-medium break-words max-w-xs">{item.text}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>


              {/* Contact Form */}
              <motion.form 
                className="space-y-6 md:col-span-2"
                variants={itemVariants}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <textarea 
                    rows={6}
                    placeholder="Your Message"
                    className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500 resize-none"
                  />
                </motion.div>

                <motion.button
                  className="w-full p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMe;