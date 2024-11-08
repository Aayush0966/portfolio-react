import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Filter } from 'lucide-react';
import primeCvImage from '/src/assets/primeCv.png';
import ProjectCard from './ProjectCard';
import SectionHeader from "../common/SectionHeader";
import streamingSiteImage from '/src/assets/streamingSite.png';
import weatherAppImage from '/src/assets/weatherApp.png';
import contactManagerImage from '/src/assets/contactManager.png';

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Sample projects - replace with your actual projects
    const projects = [
        {
            "title": "PRIME CV",
            "description": "A modern, responsive resume builder website built with Next.js and styled using Tailwind CSS.",
            "technologies": ["Next.js", "Tailwind CSS", "MongoDB", "nextauth"],
            "image": primeCvImage,
            "liveLink": "https://primecv.netlify.app/",
            "githubLink": "https://github.com/Aayush0966/CV-Builder",
            "category": "Full Stack",
            "features": [
                "Secure authentication flow with Next-Auth",
                "Comprehensive resume CRUD operations",
                "Template-based resume generation",
                "Responsive design across various devices"
            ]
        },
        {
            "title": "Streaming Site",
            "description": "Modern, responsive movie and TV watching website frontend built with React and styled using Tailwind CSS.",
            "technologies": ["React", "Tailwind CSS", "Vite"],
            "image": streamingSiteImage,
            "liveLink": "https://moviesworld69.netlify.app/",
            "githubLink": "https://github.com/Aayush0966/Streaming-Site-Frontend",
            "category": "Frontend",
            "features": [
                "Responsive design across various devices",
                "Dynamic content fetching from TMDb API",
                "User-friendly navigation through movie details"
            ]
        },
        {
            "title": "Weather Dashboard 🌧️",
            "description": "Welcome to the Weather Dashboard! This application provides comprehensive weather data.",
            "technologies": ["React", "Tailwind CSS", "Vite"],
            "image": weatherAppImage,
            "liveLink": "https://aayush0966.github.io/React-Weather-Dashboard/",
            "githubLink": "https://github.com/Aayush0966/React-Weather-Dashboard",
            "category": "Frontend",
            "features": [
                "Get a complete overview of the weather for the entire week.",
                "Stay informed with weather data updated every 3 hours.",
                "Key weather metrics, such as humidity, wind speed, and rain probability"
            ]
        },
        {
            "title": "Contact Manager Dashboard 📇",
            "description": "A full-stack web application for efficient contact management, featuring a sleek React frontend and a powerful Node.js backend.",
            "technologies": ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Vite"],
            "image": contactManagerImage,
            "liveLink": "https://contactnest.netlify.app/",
            "githubLink": "https://github.com/Aayush0966/Contact-Manager-Dashboard",
            "category": "Full Stack",
            "features": [
                "Secure user authentication (Email/Password & Google Sign-In)",
                "Comprehensive contact CRUD operations",
                "Contact image upload and management using Multer and Cloudinary",
            ]
        }
       
    ];
    
    

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
                className="w-full max-w-7xl mb-12"
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

            {/* Projects Grid */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
                variants={containerVariants}
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default PortfolioSection;