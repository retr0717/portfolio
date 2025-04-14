"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiLayers, FiFileText, FiBriefcase, FiMail } from "react-icons/fi";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const links = [
  {
    name: "home",
    path: "/",
    icon: <FiHome />
  },
  {
    name: "services",
    path: "/services",
    icon: <FiLayers />
  },
  {
    name: "resume",
    path: "/resume",
    icon: <FiFileText />
  },
  {
    name: "work",
    path: "/work",
    icon: <FiBriefcase />
  },
  {
    name: "contact",
    path: "/contact",
    icon: <FiMail />
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Menu animations
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0,
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.07,
        delayChildren: 0.1,
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 20,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        ease: "easeOut",
      }
    }
  };

  const buttonVariants = {
    open: {
      rotate: 180,
      transition: { duration: 0.2 }
    },
    closed: {
      rotate: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Menu Button */}
      <motion.button
        className="fixed z-50 top-6 right-6 w-12 h-10 rounded-full flex items-center justify-center 
                  text-text-primary shadow-lg backdrop-blur-lg"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
        variants={buttonVariants}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <AiOutlineCloseCircle size={24} /> : <AiOutlineMenuUnfold size={24} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl overflow-y-auto h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Dark solid gradient background to improve visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary" />
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full 
                             bg-gradient-to-br from-accent/15 to-transparent blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full 
                             bg-gradient-to-tl from-accent-hover/15 to-transparent blur-3xl" />
            </div>

            {/* Menu content */}
            <motion.div
              className="min-h-screen flex flex-col justify-center items-center px-8 relative z-10 pt-16 pb-8"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Logo */}
              <motion.div 
                className="mb-8"
                variants={menuItemVariants}
              >
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <h1 className="text-4xl font-bold">
                    Alwin<span className="text-accent">.</span>
                  </h1>
                </Link>
              </motion.div>

              {/* Navigation links */}
              <nav className="flex flex-col items-center gap-3 mb-8 w-full max-w-xs">
                {links.map((link, index) => {
                  const isActive = pathname === link.path;
                  
                  return (
                    <motion.div 
                      key={index}
                      variants={menuItemVariants}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full"
                    >
                      <Link 
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block w-full"
                      >
                        <motion.div
                          className={`py-2.5 px-6 rounded-xl flex items-center gap-3 w-full ${
                            isActive 
                              ? "bg-accent/30 border border-accent/40 text-text-primary" 
                              : "bg-secondary/80 border border-text-primary/10 text-text-primary hover:text-text-primary"
                          }`}
                          whileHover={{
                            backgroundColor: isActive ? "rgba(255, 215, 0, 0.3)" : "rgba(30, 30, 30, 0.9)",
                            y: -1,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <span className="text-lg">{link.icon}</span>
                          <span className="text-base capitalize font-medium">{link.name}</span>
                          
                          {isActive && (
                            <motion.div 
                              className="ml-auto w-2 h-2 rounded-full bg-accent"
                              layoutId="mobileActiveIndicator"
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Available status */}
              <motion.div
                variants={menuItemVariants}
                className="text-center mt-auto"
              >
                <div className="inline-flex items-center px-4 py-1.5 
                               border border-accent/40 bg-accent/20 
                               rounded-full text-accent text-sm">
                  Available for new projects
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
