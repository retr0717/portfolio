"use client";

import { useState, useRef, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Social from "@/components/Social";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+91 8138977809",
    bgColor: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "alwinaji717@gmail.com",
    bgColor: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    desc: "Thrissur, Kerala, India",
    bgColor: "from-amber-500/20 to-amber-600/10",
  },
];

const services = [
  { value: "webdev", label: "Web Development" },
  { value: "websec", label: "Web Security" },
  { value: "mobile", label: "Mobile Development" },
  { value: "uiux", label: "UI/UX Consulting" },
  { value: "cloud", label: "Cloud Hosting & DevOps" },
  { value: "aws", label: "AWS Infrastructure" },
];

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });
  const isInfoInView = useInView(infoRef, { once: false, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] opacity-60" 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] opacity-60" 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Decorative elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bg-accent/10 rounded-full w-2 h-2"
            style={{ 
              top: `${10 + Math.random() * 80}%`, 
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Page header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's Build Something Amazing</h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Have a project in mind or want to explore collaboration opportunities? I'm here to turn your ideas into reality.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-10">
          {/* Form Section */}
          <motion.div
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            className="xl:w-[58%] order-2 xl:order-none"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-secondary/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 lg:p-10">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold mb-2">Let's Work Together</h3>
                  <p className="text-text-secondary">
                    Looking forward to collaborating and building next-gen technologies
                  </p>
                </motion.div>
                
                {/* Input fields */}
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="text" 
                      placeholder="First name" 
                      className="bg-primary/50 border-white/5 h-12" 
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="text" 
                      placeholder="Last name" 
                      className="bg-primary/50 border-white/5 h-12" 
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="email" 
                      placeholder="Email address" 
                      className="bg-primary/50 border-white/5 h-12" 
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="tel" 
                      placeholder="Phone number" 
                      className="bg-primary/50 border-white/5 h-12" 
                    />
                  </motion.div>
                </motion.div>
                
                {/* Select */}
                <motion.div variants={itemVariants}>
                  <Select>
                    <SelectTrigger className="bg-primary/50 border-white/5 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </motion.div>
                
                {/* Textarea */}
                <motion.div
                  variants={itemVariants}
                  whileFocus={{ scale: 1.01 }}
                  className="relative"
                >
                  <Textarea
                    className="min-h-[180px] bg-primary/50 border-white/5 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <motion.div 
                    className="absolute -top-1 -right-1 opacity-0 pointer-events-none"
                    animate={{ 
                      rotate: [0, 180],
                      opacity: [0, 0.7, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                  >
                    <FaStar className="text-accent/30 text-2xl" />
                  </motion.div>
                </motion.div>
                
                {/* Button */}
                <motion.div
                  variants={itemVariants}
                  className="mt-2"
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "idle" && (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full sm:w-auto relative overflow-hidden group"
                        >
                          <span className="relative z-10 text-black">Send Message</span>
                          <motion.div 
                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </Button>
                      </motion.div>
                    )}
                    
                    {formStatus === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button disabled size="lg" className="w-full sm:w-auto">
                          <motion.div 
                            className="w-5 h-5 border-t-2 border-white rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </Button>
                      </motion.div>
                    )}
                    
                    {formStatus === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button variant="outline" size="lg" className="w-full sm:w-auto bg-green-500/20 border-green-500/30 text-white">
                          Message Sent Successfully!
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div
            ref={infoRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInfoInView ? "visible" : "hidden"}
            className="flex-1 order-1 xl:order-none"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-secondary/80 backdrop-blur-sm rounded-2xl border border-white/5 p-8 lg:p-10 h-full"
            >
              <motion.h3
                variants={itemVariants} 
                className="text-2xl font-bold mb-8"
              >
                Contact Information
              </motion.h3>
              
              <motion.ul
                variants={containerVariants}
                className="space-y-6"
              >
                {info.map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredInfo(index)}
                    onMouseLeave={() => setHoveredInfo(null)}
                    className="relative"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} rounded-xl opacity-0`}
                      animate={{ opacity: hoveredInfo === index ? 0.2 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10 flex items-start gap-5 p-4 rounded-xl transition-all">
                      <motion.div 
                        className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0"
                        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div 
                          className="text-xl"
                          animate={{ 
                            scale: hoveredInfo === index ? [1, 1.2, 1] : 1 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.icon}
                        </motion.div>
                      </motion.div>
                      
                      <div>
                        <p className="text-text-secondary text-sm mb-1">{item.title}</p>
                        <motion.h4 
                          className="text-lg font-medium"
                          animate={{ 
                            x: hoveredInfo === index ? [0, 2, 0] : 0 
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.desc}
                        </motion.h4>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                variants={itemVariants}
                className="mt-10 pt-8 border-t border-white/10"
              >
                <h4 className="text-lg font-medium mb-6">Connect With Me</h4>
                <Social
                  containerStyles="flex gap-4"
                  iconsStyles="w-11 h-11 bg-primary/50 text-text-primary hover:text-accent flex justify-center items-center rounded-lg transition-all hover:scale-110 hover:bg-primary"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Map or additional section could go here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-text-secondary max-w-2xl mx-auto">
            Whether you're looking for a strategic partnership or have a specific project in mind,
            I'm excited to hear from you and explore how we can work together.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
