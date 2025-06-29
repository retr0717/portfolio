"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  BsArrowUpRight, 
  BsCode, 
  BsShieldLock, 
  BsPhone, 
  BsLightbulb, 
  BsCloud,
  BsServer,
  BsCpu,
  BsGearWideConnected
} from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import Link from "next/link";

// Enhanced services array with added AI integration service
const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Creating responsive, high-performance web applications tailored to your business needs using React, Next.js, and modern frontend technologies.",
    icon: <BsCode className="text-2xl" />,
    href: "/contact",
    color: "from-blue-500 to-cyan-400",
  },
  {
    num: "02",
    title: "Web Security",
    desc: "Implementing robust security measures to protect your applications from vulnerabilities, conducting penetration testing, and securing your data with industry best practices.",
    icon: <BsShieldLock className="text-2xl" />,
    href: "/contact",
    color: "from-emerald-500 to-teal-400",
  },
  {
    num: "03",
    title: "Mobile Development",
    desc: "Building cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices using React Native.",
    icon: <BsPhone className="text-2xl" />,
    href: "/contact",
    color: "from-purple-500 to-indigo-400",
  },
  {
    num: "04",
    title: "UI/UX Consulting",
    desc: "Optimizing user interfaces and experiences through research-driven design, user testing, and implementation of intuitive interaction patterns.",
    icon: <BsLightbulb className="text-2xl" />,
    href: "/contact",
    color: "from-amber-500 to-orange-400",
  },
  {
    num: "05",
    title: "Cloud Hosting & DevOps",
    desc: "Deploying and managing your applications on AWS using Kubernetes for scalability, reliability, and cost optimization with automated CI/CD pipelines.",
    icon: <BsCloud className="text-2xl" />,
    href: "/contact",
    color: "from-gray-500 to-slate-400",
  },
  {
    num: "06",
    title: "AWS Infrastructure",
    desc: "Architecting robust cloud solutions using AWS services, implementing serverless architectures, managing containerized applications, and optimizing for performance.",
    icon: <BsServer className="text-2xl" />,
    href: "/contact",
    color: "from-orange-500 to-red-400",
  },
  {
    num: "07",
    title: "AI Website Integration",
    desc: "Enhancing your web applications with cutting-edge AI capabilities including chatbots, content generation, recommendation systems, and personalized user experiences powered by the latest LLM technologies.",
    icon: <RiRobot2Line className="text-2xl" />,
    href: "/contact",
    color: "from-violet-500 to-fuchsia-400",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 }); // Reduced threshold for mobile

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const serviceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };

  // Handle touch events for mobile
  const handleTouchStart = (index: number) => {
    setTouchedIndex(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setTouchedIndex(null);
    }, 500);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-40 relative overflow-hidden">
      {/* Background elements - adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent/5 rounded-full blur-3xl" 
          animate={{ 
            scale: isInView ? [0.8, 1.2, 1] : 0.8,
            opacity: isInView ? 1 : 0.3,
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 right-5 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-accent/5 rounded-full blur-3xl" 
          animate={{ 
            scale: isInView ? [1, 1.3, 0.9, 1] : 1,
            opacity: isInView ? 1 : 0.3,
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <motion.span 
            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--accent-rgb), 0.15)" }}
          >
            Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">My Expertise</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg">
            Specialized services tailored to deliver exceptional digital experiences
            that drive business growth and user engagement.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              className="relative overflow-hidden group"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-secondary rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-10 h-full border border-white/5 backdrop-blur-sm">
                {/* Background gradient */}
                <motion.div 
                  className={`absolute -inset-1 opacity-0 bg-gradient-to-r ${service.color} blur-lg rounded-2xl -z-10`}
                  animate={{ 
                    opacity: (hoveredIndex === index || touchedIndex === index) ? 0.15 : 0,
                    scale: (hoveredIndex === index || touchedIndex === index) ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <motion.div 
                      className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-accent/10"
                      whileHover={{ rotate: 5 }}
                    >
                      <span className="text-accent font-bold text-sm sm:text-base">{service.num}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-white/5"
                      whileHover={{ rotate: -5 }}
                      animate={{ 
                        scale: (hoveredIndex === index || touchedIndex === index) ? [1, 1.1, 1] : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={service.href}
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/5 flex justify-center items-center text-accent hover:bg-accent hover:text-white transition-all"
                    >
                      <BsArrowUpRight className="text-base sm:text-xl" />
                    </Link>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                  animate={{ 
                    x: (hoveredIndex === index || touchedIndex === index) ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Need a custom solution?</h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-block text-black px-6 sm:px-8 py-3 sm:py-4 bg-accent rounded-lg font-medium hover:bg-accent/90 transition-all"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
