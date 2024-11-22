import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

function DetailsSection({itemVariants }) {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Web Developer',
    'Backend Engineer',
    'Knowledge Enthusiast',
    'Curiosity-Driven Innovator',
    'Lifelong Learner',
];


  useEffect(() => {
    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (displayText.length < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex]);

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };


  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };


  return (
    <div className="space-y-6 md:space-y-8 w-full lg:w-3/5">
    {/* Social Icons */}
    <motion.div className="flex gap-4 md:gap-6 text-gray-400 justify-center lg:justify-start">
      {[
        { Icon: Github, url: 'https://github.com/Aayush0966' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/in/aayush-budhathoki-102954332' },
        { Icon: Mail, url: 'mailto:aayushx699@gmail.com' },
      ].map(({ Icon, url }, index) => (
        <motion.a
          key={index}
          href={url}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice
          className="text-gray-400 hover:text-blue-400"
          variants={socialIconVariants}
          whileHover="hover"
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </motion.a>
      ))}
    </motion.div>


    <motion.div className="space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
      <motion.div 
        className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
        variants={itemVariants}
      >
        <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-light">Hello!</span>
        <motion.span
          className="text-3xl md:text-4xl lg:text-5xl"
          animate={{
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          👋
        </motion.span>
      </motion.div>
      
      <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kurale font-bold">
          <span className="text-white">I'm </span>
          <span className="bg-gradient-to-r from-blue-300 to-emerald-400 bg-clip-text text-transparent">
            Aayush Budhathoki
          </span>
        </h1>
        
        <motion.p 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 h-16"
          variants={itemVariants}
        >
          I'm a <span className="text-blue-400 font-poppins">{displayText}</span>
          <motion.span
            className="inline-block ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.p>
      </motion.div>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 md:pt-6 justify-center lg:justify-start"
        variants={itemVariants}
      >
        <motion.a
          href="https://drive.google.com/file/d/1WYk2qqBSecQT6-tT_rq3QkpceX0VQdCg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 md:px-8 py-3 md:py-4 lg:py-5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl 
            flex items-center justify-center gap-3 text-white font-medium text-lg md:text-xl lg:text-2xl" 
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View Resume
          <motion.span
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.5,
            }}
          >
            <Download className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          </motion.span>
        </motion.a>
        <motion.a
          href="#portfolio"
          className="group px-6 md:px-8 py-3 md:py-4 lg:py-5 rounded-xl text-gray-300 border border-gray-700
            flex items-center justify-center gap-3 text-lg md:text-xl lg:text-2xl" 
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Projects
          <motion.span
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default DetailsSection