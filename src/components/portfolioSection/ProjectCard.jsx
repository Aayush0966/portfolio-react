import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
        }
    };

    const imageVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
    };

    const statsVariants = {
        initial: { y: 0 },
        hover: {
            y: -4,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    };

    // A function to map technology names to their corresponding icon paths
    const getTechIcon = (tech) => {
        const iconMap = {
            react: 'icons/react.png',
            tailwindcss: 'icons/tailwindcss.png',
            nodejs: 'icons/nodejs.png',
            mongodb: 'icons/mongodb.png',
            express: 'icons/express.png',
            jwt: 'icons/jwt.png',
            vite: 'icons/vite.png',
            cloudinary: 'icons/cloudinary.png',
            daisyui: 'icons/daisyUI.png',
            nextjs: 'icons/nextjs.jpg',
            nextauth: 'icons/next-auth.png',
            firebase: 'icons/firebase.png',
            prisma: 'icons/prisma.png',
            postgresql: 'icons/postgresql.png',
        };
    
        return iconMap[tech.toLowerCase().replace(" ", "").replace(".", "")] || null;
    };
    
    

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800/50 backdrop-blur-sm transform-gpu transition-all duration-300 ease-in-out h-[600px] flex flex-col"
        >
            <motion.div className="relative h-48 overflow-hidden">
                <motion.img
                    variants={imageVariants}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <motion.div
                    variants={statsVariants}
                    className="absolute top-4 right-4"
                >
                    <span className="px-4 py-2 rounded-full text-xs font-semibold bg-indigo-500/60 text-white border border-indigo-500/30 backdrop-blur-md shadow-lg">
                        {project.category}
                    </span>
                </motion.div>
            </motion.div>

            <div className="flex-1 p-6 relative z-10 flex flex-col justify-between bg-gradient-to-b from-gray-900/50 to-gray-900/90">
                <div>
                    <motion.div
                        variants={contentVariants}
                        className="flex justify-between items-start mb-4"
                    >
                        <h3 className="text-xl font-bold">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {project.title}
                            </span>
                        </h3>
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20"
                        >
                            <Code className="w-4 h-4 text-indigo-400" />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        variants={contentVariants}
                        className="text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        variants={contentVariants}
                        className="flex flex-wrap gap-1.5 mb-4"
                    >
                        {project.technologies.map((tech, index) => {
                            const icon = getTechIcon(tech);
                            return (
                                <motion.span
                                    key={index}
                                    className="flex items-center gap-1 px-2 py-1 text-xs bg-indigo-950/50 rounded-full text-indigo-300 border border-indigo-500/20 backdrop-blur-sm"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "rgba(79, 70, 229, 0.2)",
                                    }}
                                >
                                    {icon && <img src={icon} alt={tech} className="w-3.5 h-3.5" />}
                                    {tech}
                                </motion.span>
                            );
                        })}
                    </motion.div>

                    {project.features && (
                        <motion.ul
                            variants={contentVariants}
                            className="mb-4 space-y-1.5"
                        >
                            {project.features.slice(0, 3).map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-2 text-xs text-gray-400"
                                    whileHover={{ x: 4, color: "#c4b5fd" }}
                                >
                                    <motion.div
                                        className="w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </div>

                <motion.div
                    variants={contentVariants}
                    className="flex gap-3 mt-auto"
                >
                    <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-indigo-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Eye size={16} />
                        <span className="text-sm">Live Demo</span>
                    </motion.a>
                    <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 font-medium hover:bg-gray-750"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Github size={16} />
                        <span className="text-sm">View Code</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
