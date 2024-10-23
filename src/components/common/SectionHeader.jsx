import { motion } from "framer-motion";
import { Stars } from "lucide-react";

const SectionHeader = ({ title }) => {
    
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
)};

export default SectionHeader;