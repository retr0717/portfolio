"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { FiMenu, FiX, FiHome, FiLayers, FiFileText, FiBriefcase, FiMail } from "react-icons/fi";

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

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        className={`hidden md:flex gap-1 bg-primary/40 backdrop-blur-lg px-3 py-1 rounded-lg border border-text-primary/10 ${
          scrolled ? "shadow-lg shadow-accent/10" : ""
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link, index) => {
          const isActive = pathname === link.path;
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Link href={link.path}>
                <motion.div
                  className={`px-3 py-1 flex items-center gap-2 font-medium relative ${
                    isActive 
                      ? "text-text-primary" 
                      : "text-text-primary/70 hover:text-text-primary"
                  }`}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <span className="relative z-10">{link.icon}</span>
                  <span className="relative z-10 capitalize">{link.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="navBackground"
                      className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/10 rounded-lg border border-accent/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex justify-end">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => toggleOpen()}
          className={`z-50 fixed top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-accent/90 backdrop-blur-lg text-primary shadow-lg ${
            isOpen ? "shadow-accent/30" : "shadow-primary/20"
          }`}
          animate={{
            backgroundColor: isOpen 
              ? "rgba(230, 194, 0, 0.9)" 
              : "rgba(255, 215, 0, 0.9)",
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.div>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-primary/80 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col h-full justify-center items-center"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map((link, index) => {
                  const isActive = pathname === link.path;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={mobileItemVariants}
                      whileTap={{ scale: 0.95 }}
                      className="my-3 w-64"
                    >
                      <Link 
                        href={link.path}
                        onClick={() => toggleOpen()}
                        className="block"
                      >
                        <motion.div
                          className={`py-4 px-6 rounded-xl flex items-center gap-3 ${
                            isActive 
                              ? "bg-accent/20 border border-accent/30 text-text-primary" 
                              : "border border-text-primary/10 text-text-primary/80"
                          }`}
                          whileHover={{
                            backgroundColor: isActive ? "rgba(255, 215, 0, 0.2)" : "rgba(243, 244, 246, 0.05)",
                            y: -5,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <span className="text-xl">{link.icon}</span>
                          <span className="text-lg capitalize font-medium">{link.name}</span>
                          
                          {isActive && (
                            <motion.div 
                              className="ml-auto w-2 h-2 rounded-full bg-accent"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Nav;
