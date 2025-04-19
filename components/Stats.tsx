"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { FiClock, FiCheckSquare, FiCode, FiGithub } from "react-icons/fi";

const stats = [
  { 
    number: 3, 
    text: "Years of Experience", 
    icon: <FiClock className="text-accent" />,
    color: "from-accent/20 to-accent-hover/5"
  },
  { 
    number: 28, 
    text: "Projects Completed", 
    icon: <FiCheckSquare className="text-accent" />,
    color: "from-accent/20 to-accent-hover/5"
  },
  { 
    number: 12, 
    text: "Technologies Mastered", 
    icon: <FiCode className="text-accent" />,
    color: "from-accent/20 to-accent-hover/5"
  },
  { 
    number: 1218, 
    text: "Code Commits", 
    icon: <FiGithub className="text-accent" />,
    color: "from-accent/20 to-accent-hover/5" 
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
        >
          <span className="relative z-10">By the Numbers</span>
          <span className="absolute inset-x-0 bottom-2 h-3 bg-accent/20 -z-0 transform -rotate-1"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}></div>
              <div className="absolute inset-0 backdrop-blur-sm bg-primary/20"></div>
              
              <div className="relative p-8 flex flex-col items-center border border-text-primary/10 rounded-2xl h-full">
                <div className="w-14 h-14 rounded-xl bg-text-primary/5 flex items-center justify-center mb-6 relative">
                  {item.icon}
                  <motion.div 
                    className="absolute inset-0 border border-text-primary/20 rounded-xl"
                    animate={{ 
                      borderColor: ["rgba(243,244,246,0.1)", "rgba(255,215,0,0.5)", "rgba(243,244,246,0.1)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <CountUp
                      end={item.number}
                      duration={3}
                      enableScrollSpy
                      scrollSpyOnce={false}
                      className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-accent"
                    />
                    {item.number === 500 && <span className="text-xl text-text-primary/70">+</span>}
                  </div>
                  <p className="text-text-primary/80">{item.text}</p>
                </div>
                
                <motion.div 
                  className="absolute -z-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
