import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Stars, Code, Terminal, Rocket, Briefcase, Book, Gamepad, Camera, Music, Globe, CodeIcon } from 'lucide-react'; // Import relevant icons for hobbies

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
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

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 flex items-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
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

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.div 
        className="flex justify-center items-center gap-4 mb-10"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative w-10 h-10 flex justify-center items-center bg-blue-400/10 rounded-full shadow-lg"
          whileHover={{ rotate: [0, 360], scale: 1.2 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Stars className="w-8 h-8 text-blue-400" />
        </motion.div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          About me
        </h2>
        <motion.div
          className="relative w-10 h-10 flex justify-center items-center bg-emerald-400/10 rounded-full shadow-lg"
          whileHover={{ rotate: [0, 360], scale: 1.2 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <Stars className="w-8 h-8 text-emerald-400" />
        </motion.div>
      </motion.div>

          
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center"
          variants={itemVariants}
        >
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="relative backdrop-blur-sm bg-gray-900/40 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800 max-w-4xl mx-auto"
          >
            <motion.div
              className="absolute -top-6 right-8"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.p variants={itemVariants} className="text-xl text-gray-300 leading-relaxed">
                Hey there! I’m Aayush, a creative developer currently diving deep into web development with the MERN stack. 
                My journey in tech is fueled by curiosity and a passion for building things that not only work but also look amazing. 
                I’m all about creating digital experiences that blend 
                aesthetic beauty with technical excellence.
              </motion.p>

              <motion.div className="flex flex-col gap-6">
                <motion.div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-emerald-400" />
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Technologies:</strong> React, Node.js, JavaScript, Tailwind CSS, and daisyUI. Always exploring more!
                  </p>
                </motion.div>

                <motion.div className="flex items-center gap-4">
                  <Terminal className="w-8 h-8 text-blue-400" />
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Stack Focus:</strong> MERN stack, building full-stack apps with a creative twist.
                  </p>
                </motion.div>

                <motion.div className="flex items-center gap-4">
                  <Rocket className="w-8 h-8 text-red-400" />
                  <p className="text-gray-400 leading-relaxed">
                    <strong>Goal:</strong> To master full-stack development and create apps that stand out, both functionally and visually.
                  </p>
                </motion.div>

                <motion.div className="flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-indigo-400" />
                  <p className="text-gray-400 leading-relaxed">
                  <strong>Current Learning Path:</strong> Mastering the MERN stack to build dynamic and scalable applications.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-gray-400 bg-gray-800/50 p-4 rounded-xl border border-gray-800/50"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-sm italic">
                  "Crafting digital solutions that inspire, delight, and push the boundaries."
                </span>
              </motion.div>
            </div>
          </motion.div>

{/* Right Column with Hobbies */}
        <motion.div
          variants={itemVariants}
          className="relative p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold font-poppins  text-gray-300 mb-4 text-center">Hobbies</h3>
          <motion.ul 
            className="space-y-4 border border-gray-800 rounded-lg p-6 bg-gray-900/40 shadow-md"
            variants={containerVariants} // Apply the container animation for the list
          >
            {[
              { hobby: "Programming", icon: <CodeIcon className="w-6 h-6 text-indigo-400" /> },
              { hobby: "Reading", icon: <Book className="w-6 h-6 text-emerald-400" /> },
              { hobby: "Gaming", icon: <Gamepad className="w-6 h-6 text-blue-400" /> },
              { hobby: "Traveling", icon: <Globe className="w-6 h-6 text-red-400" /> },
              { hobby: "Music", icon: <Music className="w-6 h-6 text-pink-400" /> },
            ].map(({ hobby, icon }, index) => (
              <motion.li
                key={hobby}
                variants={itemVariants} // Use itemVariants for individual animation
                className="flex items-center gap-3 p-4 hover:bg-gray-800/30 transition duration-300 rounded-lg"
              >
                {icon}
                <span className="text-lg text-gray-300">{hobby}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
