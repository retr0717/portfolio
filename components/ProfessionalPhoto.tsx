"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useRef, useState } from "react";

const ProfessionalPhoto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation values (limited range)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  // Add spring physics for smoother movement
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Spotlight effect that follows cursor
  const spotlightX = useTransform(mouseX, [-300, 300], [0, 100]);
  const spotlightY = useTransform(mouseY, [-300, 300], [0, 100]);
  const spotlightSpringX = useSpring(spotlightX, { stiffness: 300, damping: 30 });
  const spotlightSpringY = useSpring(spotlightY, { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the center of the container
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div 
      ref={containerRef}
      className="relative max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -z-10 w-[120%] h-[120%] -top-[10%] -left-[10%]">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          style={{
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
      
      <div className="absolute -z-10 w-40 h-40 -bottom-10 -right-10">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-2xl"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
          }}
          style={{
            scale: hovered ? 1.2 : 1,
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Photo container with frosted glass effect */}
      <motion.div 
        className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          rotateX: hovered ? springRotateX : 0,
          rotateY: hovered ? springRotateY : 0,
          transformPerspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spotlight effect */}
        {hovered && (
          <motion.div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle at ${spotlightSpringX}% ${spotlightSpringY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}
          />
        )}
        
        {/* Geometric accent */}
        <motion.div 
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/40 to-transparent -translate-y-1/2 translate-x-1/2 blur-xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          style={{
            scale: hovered ? 1.3 : 1,
            opacity: hovered ? 0.9 : 0.6,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Photo frame with subtle mask */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl"
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          style={{
            transform: "translateZ(30px)", // 3D effect
          }}
        >
          {/* Image with enhanced hover effects */}
          <motion.div
            style={{
              filter: hovered ? "contrast(1.1) brightness(1.05)" : "none",
            }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/pic.png" 
              alt="Alwin Aji"
              width={500}
              height={600}
              className="w-full object-cover object-center"
              priority
            />
          </motion.div>
          
          {/* Refined gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              opacity: hovered ? 0.7 : 1, // Slightly fade gradient on hover
            }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>
        
        {/* Professional info card */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            transform: "translateZ(50px)", // Stronger 3D effect for card
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                className="h-12 w-1 bg-accent rounded-full"
                animate={{ 
                  height: [12, 20, 12], 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  height: hovered ? 24 : undefined,
                }}
              />
              <div>
                <motion.h3 
                  className="text-lg font-medium text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                >
                  Alwin Aji
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                >
                  Full Stack Developer
                </motion.p>
              </div>
            </div>
            
            {/* Tech stack with icons */}
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <motion.div 
                whileHover={{ y: -3, color: "#61DAFB" }}
                animate={hovered ? { y: -3, color: "#61DAFB" } : {}}
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaReact size={18} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, color: "#8CC84B" }}
                animate={hovered ? { y: -3, color: "#8CC84B", rotateY: 180 } : {}}
                transition={{ delay: 0.1 }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <FaNodeJs size={18} />
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, color: "#FFFFFF" }}
                animate={hovered ? { y: -3, color: "#FFFFFF" } : {}}
                transition={{ delay: 0.2 }}
                className="text-white/70 hover:text-white transition-colors"
              >
                <TbBrandNextjs size={18} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Minimal decorative line */}
      <motion.div
        className="absolute -bottom-6 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          scaleX: hovered ? 1.3 : 1,
          opacity: hovered ? 0.8 : 0.5,
        }}
      />
    </motion.div>
  );
};

export default ProfessionalPhoto;