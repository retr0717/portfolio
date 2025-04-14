"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PixelRevealTransition = () => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1600); // Shorter duration for better UX
    
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isAnimating) return null;

  // Grid configuration
  const gridSize = {
    cols: 12,
    rows: 8
  };
  
  const totalCells = gridSize.cols * gridSize.rows;
  const cells = Array.from({ length: totalCells });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-primary"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        {/* Logo in center */}
        <motion.div
          className="absolute z-20 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 1.2,
            times: [0, 0.3, 1],
            delay: 0.5
          }}
        >
          <motion.div 
            className="text-4xl font-bold text-text-primary"
            animate={{ y: [-20, 0] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span>Alwin</span>
            <span className="text-accent">.</span>
          </motion.div>
          <motion.div 
            className="text-sm text-text-secondary mt-1"
            animate={{ y: [-15, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Developer Portfolio
          </motion.div>
        </motion.div>

        {/* Pixel grid animation */}
        <div className="relative" 
             style={{ 
               width: "min(80vw, 600px)",
               height: "min(60vh, 450px)", 
             }}>
          <div className="absolute inset-0 grid"
               style={{ 
                 gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                 gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                 gap: "2px"
               }}>
            {cells.map((_, index) => {
              // Animation sequence - cascade in and out
              const col = index % gridSize.cols;
              const row = Math.floor(index / gridSize.cols);
              
              // Create wave-like pattern for delays
              const distance = Math.abs(col - gridSize.cols/2) + Math.abs(row - gridSize.rows/2);
              const maxDistance = gridSize.cols/2 + gridSize.rows/2;
              const normalizedDistance = distance / maxDistance;
              
              // Cell appearance delay - wave from center
              const appearDelay = normalizedDistance * 0.5;
              
              // Cell disappearance delay - reverse wave
              const disappearDelay = (1 - normalizedDistance) * 0.5 + 0.7;
              
              return (
                <motion.div
                  key={index}
                  className="bg-accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    transition: { 
                      duration: 1.2,
                      times: [0, 0.3, 1],
                      delay: appearDelay,
                      opacity: {
                        duration: 1.2,
                        times: [0, 0.3, 1],
                        ease: ["easeOut", "easeIn"]
                      },
                      scale: {
                        duration: 1.2,
                        times: [0, 0.3, 1],
                        ease: ["easeOut", "easeIn"]
                      }
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Final sweep light */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/30 to-accent/10"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: 0.5 }}
          transition={{ 
            duration: 0.7, 
            delay: 1, 
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PixelRevealTransition;