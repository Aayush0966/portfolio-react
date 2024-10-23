import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stars } from 'lucide-react';
import 'devicon/devicon.min.css'; // Import devicons CSS


const SkillsSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const skills = [
        { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "bg-[#F7DF1E]/10 hover:bg-[#F7DF1E]/20" },
        { name: "HTML5", icon: "devicon-html5-plain colored", color: "bg-[#E44D26]/10 hover:bg-[#E44D26]/20" },
        { name: "Python", icon: "devicon-python-plain colored", color: "bg-[#3776AB]/10 hover:bg-[#3776AB]/20" },
        { name: "ReactJS", icon: "devicon-react-original colored", color: "bg-[#61DAFB]/10 hover:bg-[#61DAFB]/20" },
        { name: "NodeJS", icon: "devicon-nodejs-plain colored", color: "bg-[#339933]/10 hover:bg-[#339933]/20" },
        { name: "Framer Motion", icon: "devicon-framermotion-plain colored", color: "bg-[#F24E1E]/10 hover:bg-[#F24E1E]/20" },
        { name: "Express", icon: "devicon-express-original colored", color: "bg-[#000000]/10 hover:bg-[#000000]/20" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", color: "bg-[#06B6D4]/10 hover:bg-[#06B6D4]/20" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored", color: "bg-[#47A248]/10 hover:bg-[#47A248]/20" },
        { name: "Git", icon: "devicon-git-plain colored", color: "bg-[#F05032]/10 hover:bg-[#F05032]/20" },
        { name: "GitHub", icon: "devicon-github-original colored", color: "bg-white/10 hover:bg-white/20" },
        { name: "VS Code", icon: "devicon-vscode-plain colored", color: "bg-[#007ACC]/10 hover:bg-[#007ACC]/20" },
        { name: "Postman", icon: "devicon-postman-plain colored", color: "bg-[#FF6C37]/10 hover:bg-[#FF6C37]/20" },
        { name: "Docker", icon: "devicon-docker-plain colored", color: "bg-[#2496ED]/10 hover:bg-[#2496ED]/20" },
        { name: "Figma", icon: "devicon-figma-plain colored", color: "bg-[#F24E1E]/10 hover:bg-[#F24E1E]/20" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const SectionHeader = ({ title }) => (
        <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4"
            variants={headerVariants}
        >
            <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-blue-400/10 rounded-full shadow-lg"
                whileHover={{ rotate: [0, 360], scale: 1.2 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <Stars className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                {title}
            </h2>
            <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-emerald-400/10 rounded-full shadow-lg"
                whileHover={{ rotate: [0, 360], scale: 1.2 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
                <Stars className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </motion.div>
        </motion.div>
    );

    return (
        <motion.section 
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-12 sm:py-16 md:py-20 px-3 sm:px-6 md:px-10 relative overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
        >
            {/* Top Left Glow */}
            <motion.div
                className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 sm:-top-64 -left-48 sm:-left-64 bg-emerald-500/20 rounded-full blur-3xl"
                variants={glowVariants}
                initial="initial"
                animate="animate"
            />
            
            {/* Bottom Right Glow */}
            <motion.div
                className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -bottom-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl"
                variants={glowVariants}
                initial="initial"
                animate="animate"
            />

            {/* Technologies Section */}
            <SectionHeader title="Technologies I Use" />
            <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4 max-w-7xl"
            >
                {skills.slice(0,9).map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                        ${skill.color} border border-white/10 
                        transition-all duration-300 hover:border-white/20 hover:scale-110`}
                    >
                        <i className={`${skill.icon} text-2xl sm:text-3xl`}></i>
                        <span className="text-white text-base sm:text-lg md:text-xl font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Development Tools Section */}
            <SectionHeader title="Development Tools" />
            <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4 max-w-7xl"
            >
                {skills.slice(9).map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                        ${skill.color} border border-white/10 
                        transition-all duration-300 hover:border-white/20 hover:scale-110`}
                    >
                        <i className={`${skill.icon} text-2xl sm:text-3xl`}></i>
                        <span className="text-white text-base sm:text-lg md:text-xl font-medium">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default SkillsSection;