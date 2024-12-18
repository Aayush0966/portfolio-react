import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeader from "../common/SectionHeader";
import portfolioData from '../../../userData';
const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = portfolioData.projects;

    const categories = ['All', ...new Set(projects.map(project => project.category))];

    const filteredProjects = projects
        .filter(project => selectedCategory === 'All' || project.category === selectedCategory);

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
                staggerChildren: 0.2,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
           id='portfolio'
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-800 flex flex-col justify-center items-center  py-20 px-6 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div
                className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] -top-48 -right-48 bg-emerald-500/20 rounded-full blur-3xl"
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

            {/* Section Header */}
           <SectionHeader title="Featured Projects" />

            {/* Category Filters */}
            <motion.div 
                className="w-full max-w-7xl mb-12 px-8"
                variants={itemVariants}
            >
                <div className="flex flex-wrap gap-3 items-center">
                    <Filter className="w-5 h-5 text-gray-400" />
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={false}
                            animate={{ 
                                scale: selectedCategory === category ? 1.05 : 1,
                                backgroundColor: selectedCategory === category ? 'rgb(59, 130, 246)' : 'rgba(31, 41, 55, 0.5)'
                            }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Projects Horizontal Scroll Container */}
            <motion.div 
                className="w-full overflow-x-auto scrollbar-hide"
            >
                <motion.div 
                    className="flex gap-8 pl-16 pb-8 min-w-max"
                    variants={containerVariants}
                >
                    {/* Left Spacer */}
                    <div className="w-8 flex-shrink-0" />

                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-[400px] flex-shrink-0"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}

                    {/* Right Spacer */}
                    <div className="w-8 flex-shrink-0" />
                </motion.div>
            </motion.div>

            {/* Optional: Add scroll indicators */}
            <div className="absolute right-4 bottom-4 text-gray-400 text-sm">
                <span>Scroll →</span>
            </div>
        </motion.section>
    );
};

export default PortfolioSection;