import React from 'react'
import avatar from "/src/assets/avatar.png"
import { motion } from 'framer-motion';
import { Code, Coffee, Terminal } from 'lucide-react';

function AvatarSection({ glowVariants, itemVariants}) {

  const stats = [
    { icon: Code, label: "Projects", value: "10+" },
    { icon: Coffee, label: "Coffee Cups", value: "1000+" },
    { icon: Terminal, label: "Commits", value: "200+" }
  ];
  const avatarVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        damping: 20
      }
    }
  };

  return (
    <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end">
              {/* Avatar Container - Repositioned */}
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
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-3xl opacity-30"
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                  />
                  
                  <motion.div
                    className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden"
                    whileHover={{ borderColor: "rgba(59, 130, 246, 0.8)" }}
                  >
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src={avatar} alt="User Avatar" className="rounded-full p-4 sm:p-6 md:p-8" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full"
                variants={itemVariants}
              >
                {stats.map(({ icon: Icon, label, value }, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-2 md:space-y-3 p-2 md:p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">{value}</span>
                    <span className="text-xs md:text-sm text-gray-400">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
  )
}

export default AvatarSection