import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle  } from 'lucide-react';
import emailjs from 'emailjs-com';
import SectionHeader from '../common/SectionHeader';

const ContactMe = () => {
  const formRef = useRef();
  const [alert, setAlert] = useState(null); // State for the alert message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
        formRef.current.reset(); // Reset form
        setAlert({ type: "success", message: "Message sent successfully!" });
    }, (error) => {
        setAlert({ type: "error", message: "Failed to send message, please try again." });
    });

    // Hide the alert after 3 seconds
    setTimeout(() => setAlert(null), 3000);
  };

  const alertVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  

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
        damping: 12,
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

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white py-20 px-4 relative overflow-hidden">
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
        viewport={{ once: true, margin: '-100px' }}
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
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6 md:col-span-2"
                variants={itemVariants}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <input 
                      type="text" 
                      name="from_name"
                      placeholder="Your Name"
                      className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <input 
                      type="email" 
                      name="from_email"
                      placeholder="Your Email"
                      className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <textarea 
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full p-4 bg-gray-900/60 rounded-xl border border-gray-700/50 focus:border-emerald-500/50 outline-none transition-all placeholder-gray-500 resize-none"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
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
        <AnimatePresence>
          {alert && (
            <motion.div
              className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg ${
                alert.type === "success" ? "bg-emerald-600" : "bg-red-600"
              } flex items-center gap-2 text-white`}
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {alert.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <XCircle className="w-5 h-5" />
              )}
              <span>{alert.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactMe;
