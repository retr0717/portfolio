"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsCode, BsShieldLock, BsPhone, BsLightbulb } from "react-icons/bs";
import Link from "next/link";

// Enhanced services array with icons and more detailed descriptions
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
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
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

  const serviceVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-0 lg:py-40 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">My Expertise</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Specialized services tailored to deliver exceptional digital experiences
            that drive business growth and user engagement.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden group"
            >
              <div className="bg-secondary rounded-2xl p-8 lg:p-10 h-full border border-white/5 backdrop-blur-sm">
                {/* Background gradient */}
                <motion.div 
                  className={`absolute -inset-1 opacity-0 bg-gradient-to-r ${service.color} blur-lg rounded-2xl -z-10`}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.15 : 0,
                    scale: hoveredIndex === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10">
                      <span className="text-accent font-bold">{service.num}</span>
                    </div>
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white/5">
                      {service.icon}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={service.href}
                      className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center text-accent hover:bg-accent hover:text-white transition-all"
                    >
                      <BsArrowUpRight className="text-xl" />
                    </Link>
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  animate={{ 
                    x: hoveredIndex === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Need a custom solution?</h3>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
