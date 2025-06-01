"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight, FiCheckCircle, FiMousePointer, FiCode, FiDatabase, FiLayout } from "react-icons/fi";
import Social from "@/components/Social";
import ProfessionalPhoto from "@/components/ProfessionalPhoto";
import PhotoSkeleton from "@/components/PhotoSkeleton";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Spring physics for smooth cursor following
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Handle mouse movement for interactive elements
    const handleMouseMove = (e : MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Simulate loading or check actual image loading
    const timer = setTimeout(() => {
      setPhotoLoaded(true);
    }, 2000); // Show skeleton for 2 seconds

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const goToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1dO187I1eWJPNxnDjzrEGN6FN5tjhw7Ao/view?usp=sharing",
    );
  };
  
  // Character by character animation for text
  const titleText = "Crafting Digital Solutions for Modern Businesses";
  const titleChars = titleText.split("");
  
  // Breaking paragraph into words for staggered animation
  const paragraphText = "I'm Alwin Aji, a full-stack developer specializing in building exceptional digital experiences that help businesses achieve their goals. My focus is on creating scalable, high-performance applications with clean, maintainable code.";
  const paragraphWords = paragraphText.split(" ");

  return (
    <>
      {/* Custom cursor effect */}
      <motion.div 
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          left: springX, 
          top: springY,
          backgroundColor: isHovering ? "#ffd700" : "rgba(255, 215, 0, 0.2)",
          scale: isHovering ? 1.5 : 1,
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div 
        ref={containerRef}
        style={{ opacity, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 overflow-hidden border-b border-text-primary/5">
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-accent/10 to-transparent blur-3xl opacity-50"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-3xl opacity-30"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
              {/* Photo - Adjusted column width and position */}
              <div className="lg:col-span-5 lg:col-start-8 lg:order-last order-1 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{ 
                    perspective: "1000px",
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotateY: cursorPosition.x ? (cursorPosition.x - window.innerWidth / 2) * 0.005 : 0,
                      rotateX: cursorPosition.y ? (window.innerHeight / 2 - cursorPosition.y) * 0.005 : 0
                    }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="relative"
                  >
                    {photoLoaded ? <ProfessionalPhoto /> : <PhotoSkeleton />}
                    
                    {/* Floating elements around photo */}
                    <motion.div
                      className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 flex items-center justify-center text-accent"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <FiCode size={20} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Content - With improved text container */}
              <div className="lg:col-span-7 lg:col-start-1 space-y-8 order-2 lg:order-1 relative z-20 mt-8 lg:mt-0">
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="inline-flex items-center px-4 py-1.5 border border-accent/30 bg-accent/5 rounded-full text-accent text-sm"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Full Stack Developer & Consultant
                    </motion.span>
                  </motion.div>
                </motion.div>
                
                {/* Title with improved word wrapping */}
                <div className="w-full overflow-hidden">
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  >
                    {/* Split by words first, then animate characters within each word */}
                    {titleText.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="inline-block mr-[0.2em] mb-1">
                        {word.split("").map((char, charIndex) => (
                          <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.8 + (wordIndex * word.length + charIndex) * 0.02,
                              ease: "easeOut" 
                            }}
                            className={`inline-block ${char === "M" ? "text-accent" : ""}`}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </span>
                    ))}
                  </motion.h1>
                </div>
                
                <div className="overflow-hidden">
                  <motion.p 
                    className="text-lg text-text-secondary max-w-xl"
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {paragraphWords.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1.2 + index * 0.01,
                          ease: "easeOut" 
                        }}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <Button
                    size="lg"
                    onClick={goToResume}
                    className="bg-accent hover:bg-accent-hover text-primary relative overflow-hidden group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-accent-hover"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <span className="relative z-10 flex items-center">
                      Download CV
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <FiDownload />
                      </motion.span>
                    </span>
                  </Button>
                  
                  <Link href="/contact">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-text-primary/20 hover:border-accent text-text-primary hover:text-accent relative overflow-hidden"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <motion.span 
                        className="absolute inset-0 bg-accent/5"
                        initial={{ scale: 0, borderRadius: "100%" }}
                        whileHover={{ scale: 1, borderRadius: "0%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10 flex items-center hover:text-black">
                        Start a Project
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                        >
                          <FiArrowRight />
                        </motion.span>
                      </span>
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <motion.span 
                      className="flex items-center text-accent"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        color: ["#ffd700", "#ffe44d", "#ffd700"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiCheckCircle className="mr-1" /> Available for work
                    </motion.span>
                    <motion.span 
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >|</motion.span>
                    <span>Based in India</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Social links at bottom with scroll indicator */}
            <motion.div 
              className="mt-12 pt-6 border-t border-text-primary/10 flex flex-wrap justify-between items-center relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-sm text-text-secondary mb-2">Connect with me</p>
                <Social
                  containerStyles="flex gap-4"
                  iconsStyles="w-10 h-10 bg-text-primary/5 border border-text-primary/10 text-text-secondary hover:text-accent hover:border-accent flex justify-center items-center rounded-full transition-colors relative overflow-hidden group"
                />
              </motion.div>
              
              <motion.div 
                className="mt-6 sm:mt-0"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="text-sm text-text-secondary mb-2">Scroll to explore</p>
                <div className="relative">
                  <motion.div 
                    className="w-6 h-10 rounded-full border border-text-primary/20 flex items-center justify-center"
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                      animate={{ 
                        y: [0, 12, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-text-secondary opacity-60"
                    animate={{ 
                      y: [5, 0, 5],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiMousePointer size={14} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section with enhanced animations */}
        <section className="relative bg-secondary/30 border-t border-b border-text-primary/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            {/* Creative background elements */}
            <motion.div
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent top-0"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scaleY: [1, 2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent bottom-0"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                scaleY: [1, 2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
            
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-24 bg-accent/10"
                style={{ 
                  left: `${10 + i * 8}%`,
                  top: `${Math.random() * 100}%`,
                  height: `${Math.random() * 40 + 30}px`,
                  opacity: Math.random() * 0.3 + 0.1
                }}
                animate={{ 
                  height: [`${Math.random() * 30 + 20}px`, `${Math.random() * 50 + 40}px`, `${Math.random() * 30 + 20}px`],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
              />
            ))}
          </motion.div>
          
          <Stats />
        </section>
      </motion.div>
    </>
  );
};

export default Home;