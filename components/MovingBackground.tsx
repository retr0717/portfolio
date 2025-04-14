"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const MovingBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set initial values for the CSS variables
    if (backgroundRef.current) {
      backgroundRef.current.style.setProperty("--mouse-x", "50%");
      backgroundRef.current.style.setProperty("--mouse-y", "50%");
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate mouse position as percentage of window
      const mouseXpercentage = Math.round((clientX / windowWidth) * 100);
      const mouseYpercentage = Math.round((clientY / windowHeight) * 100);
      
      // Update CSS variables for the background position
      backgroundRef.current.style.setProperty("--mouse-x", `${mouseXpercentage}%`);
      backgroundRef.current.style.setProperty("--mouse-y", `${mouseYpercentage}%`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={backgroundRef} 
      className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none"
      style={{ 
        "--mouse-x": "50%", 
        "--mouse-y": "50%" 
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none">
        {/* Floating elements - shapes that slowly animate */}
        {[...Array(18)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border border-accent opacity-70"
            style={{
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
              ],
              y: [
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
              ],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Code-like elements */}
        {["{ }", "( )", "[ ]", "</>"," // ", "/**/", ">>", "<<"].map((symbol, index) => (
          <motion.div
            key={`code-${index}`}
            className="absolute text-accent opacity-30 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 14}px`,
            }}
            animate={{
              x: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
              ],
              y: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
              ],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {symbol}
          </motion.div>
        ))}
        
        {/* Background gradient that follows mouse */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle 50vw at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.08), transparent)",
            transition: "background 0.5s ease",
          }}
        />
      </div>
    </div>
  );
};

export default MovingBackground;