"use client";

import { motion } from "framer-motion";
import { FiCode, FiTerminal, FiDatabase } from "react-icons/fi";

const PhotoSkeleton = () => {
  // Random programming terms for the "typing" effect
  const codePhrases = ["const developer = {", "function render() {", "<Component />", "return (", "export default"];
  
  return (
    <motion.div 
      className="relative max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ambient background glow */}
      <div className="absolute -z-10 w-[140%] h-[140%] -top-[20%] -left-[20%]">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-br from-accent/5 via-accent-hover/3 to-transparent blur-3xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
      
      {/* Photo container skeleton */}
      <motion.div 
        className="relative bg-text-primary/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-text-primary/10 shadow-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Digital "scanning" effect */}
        <div className="relative h-[500px] overflow-hidden rounded-2xl bg-primary/40">
          {/* Scanning line */}
          <motion.div 
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/80 to-transparent"
            initial={{ top: 0, opacity: 0 }}
            animate={{ 
              top: ["0%", "100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          
          {/* Grid effect */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-10 gap-[1px] opacity-10">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-text-primary/5 rounded-sm"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: Math.random() > 0.7 ? [0.1, 0.5, 0.1] : [0.05, 0.2, 0.05]
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
          {/* Outline of a person */}
          <svg 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 stroke-text-primary/20 fill-none"
            viewBox="0 0 100 120"
            strokeWidth="0.5"
          >
            <motion.path
              d="M50,10 C65,10 70,25 70,40 C70,55 60,70 50,70 C40,70 30,55 30,40 C30,25 35,10 50,10 Z M30,75 C20,80 10,95 10,110 L90,110 C90,95 80,80 70,75 C65,85 55,90 50,90 C45,90 35,85 30,75 Z"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [0, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.8, 1]
              }}
            />
          </svg>
          
          {/* Typing code effect */}
          <div className="absolute top-[15%] left-[15%] right-[15%] font-mono text-xs opacity-50">
            {codePhrases.map((phrase, i) => (
              <motion.div
                key={i}
                className="mb-3 text-accent/60 flex"
                initial={{ width: 0, opacity: 0 }}
                animate={{ 
                  width: "100%", 
                  opacity: [0, 0.7, 0.4]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                <div className="whitespace-nowrap overflow-hidden">{phrase}</div>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  _
                </motion.span>
              </motion.div>
            ))}
          </div>
          
          {/* Floating tech symbols */}
          <div className="absolute inset-0">
            {[FiCode, FiTerminal, FiDatabase].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute text-text-primary/30"
                style={{
                  fontSize: `${24 + index * 4}px`,
                  left: `${20 + index * 25}%`,
                  top: `${60 + (index % 2) * 20}%`
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Info card skeleton with more professional animation */}
        <motion.div
          className="absolute bottom-6 left-6 right-6 px-6 py-4 bg-primary/40 backdrop-blur-lg rounded-xl border border-text-primary/10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Audio wave-like indicator */}
              <div className="flex items-end h-10 space-x-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-accent/60 rounded-full"
                    animate={{ 
                      height: [
                        5 + Math.random() * 5,
                        12 + Math.random() * 8,
                        5 + Math.random() * 5
                      ]
                    }}
                    transition={{ 
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
              
              {/* Name and title placeholders with better animation */}
              <div className="space-y-2">
                <motion.div 
                  className="h-5 w-28 bg-gradient-to-r from-text-primary/20 to-text-primary/5 rounded-md"
                  animate={{ 
                    opacity: [0.6, 0.8, 0.6],
                    width: ["60%", "80%", "60%"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="h-4 w-36 bg-gradient-to-r from-text-primary/15 to-text-primary/5 rounded-md"
                  animate={{ 
                    opacity: [0.5, 0.7, 0.5],
                    width: ["70%", "90%", "70%"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                />
              </div>
            </div>
            
            {/* Tech icon placeholders with pulsing effect */}
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-gradient-to-br from-accent/30 to-accent-hover/10"
                  style={{
                    height: `${16 + i * 2}px`, 
                    width: `${16 + i * 2}px`
                  }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Bottom loading indicator */}
      <div className="absolute -bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          className="px-4 py-1 rounded-full bg-text-primary/5 border border-text-primary/10 text-xs text-text-primary/50 backdrop-blur-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 0.5],
            y: 0
          }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Loading profile...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PhotoSkeleton;