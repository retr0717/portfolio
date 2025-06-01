"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import { BsArrowUpRight, BsGithub, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Enhanced project data with additional fields
const projects = [
  {
    id: "MERN-GPT",
    num: "00",
    category: "full stack",
    title: "MERN-GPT",
    desc: "A full-stack application that integrates OpenAI's GPT-3.5 API for generating text-based responses, built with the MERN stack.",
    features: [
      "User authentication",
      "Chat interface",
      "Real-time messaging",
      "OpenAI API integration"
    ],
    stack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
    ],
    image: "/assets/work/merngpt.png",
    live: "",
    github: "https://github.com/retr0717/merngpt",
    featured: false,
    year: "2024"
  },
  {
    id: "svc-pred-model",
    num: "01",
    category: "ML",
    title: "VEHICLE SERVICE PREDICTION MODEL",
    desc: "A machine learning model that predicts outcomes based on real-time data collected from the vehicle sensors(CAN DATA), built with Python and PyTorch.",
    features: [
      "Data preprocessing",
      "Model training and evaluation",
      "Interactive web interface",
      "Real-time predictions"
    ],
    stack: [
      { name: "Python", color: "bg-yellow-500" },
      { name: "Pandas", color: "bg-green-500" },
      { name: "Scikit-learn", color: "bg-blue-600" },
      { name: "PyTorch", color: "bg-red-500" },
      { name: "NumPy", color: "bg-blue-500" },
      { name: "Matplotlib", color: "bg-blue-600" },
      { name: "FASTAPI", color: "bg-blue-500" },
    ],
    image: "/assets/work/svc.png",
    live: "",
    github: "https://github.com/retr0717/service_prediction_model",
    featured: false,
    year: "2025"
  },
  {
    id: "CTF Platform",
    num: "02",
    category: "full stack",
    title: "CTF PLATFORM",
    desc: "A Capture The Flag (CTF) platform designed for cybersecurity enthusiasts, featuring challenges, hints, and a leaderboard to track progress.",
    features: [
      "User authentication",
      "Challenge management",
      "Hint system",
      "Leaderboard",
      "Real-time scoring"
    ],
    stack: [
      { name: "Next.js", color: "bg-blue-600" },
      { name: "Express", color: "bg-gray-500" },
      { name: "Socket.io", color: "bg-purple-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "PostgreSQL", color: "bg-blue-700" },
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "Prisma", color: "bg-blue-500" },
      { name: "Turborepo", color: "bg-green-500" },
    ],
    image: "/assets/work/ctf2.png",
    github: "https://github.com/retr0717/ctf-platform",
    featured: true,
    year: "2024"
  },
  {
    id: 'social-media',
    num: "03",
    category: "full stack",
    title: "SOCIAL MEDIA",
    desc: "A social media platform that allows users to create profiles, post updates, and interact with others through comments and likes.",
    features: [
      "User authentication",
      "Profile management",
      "Post creation and commenting",
      "Real-time notifications"
    ],
    stack: [
      { name: "React Native", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Postgres", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Supabase", color: "bg-green-500" },
    ],
    image: "/assets/work/social.png",
    live: "",
    github: "https://github.com/retr0717/socialmedia",
    featured: false,
    year: "2024"
  },
  {
    id: "Webly",
    num: "04",
    category: "full stack",
    title: "WEBLY",
    desc: "A web-based platform that allows users to create websites using claude api and chatgpt api, providing a user-friendly interface for website development.",
    features: [ 
      "User authentication",
      "Create with Prompt",
      "Real time Preview",
      "Edit"
    ],
    stack: [
      { name: "Nextjs", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Postgres", color: "bg-green-500" },
      { name: "Prisma", color: "bg-blue-500" },
      { name: "Express", color: "bg-gray-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "OpenAI API", color: "bg-blue-500" },
      { name: "Claude API", color: "bg-purple-500" },
      { name: "Turborepo", color: "bg-green-500" },
    ],
    image: "/assets/work/webly.png",
    live: "",
    github: "https://github.com/retr0717/miniproj",
    featured: false,
    year: "2025"
  },
  {
    id: "vercel-clone",
    num: "05",
    category: "full stack",
    title: "VERCEL CLONE",
    desc: "A streamlined deployment platform that allows developers to locally host websites directly from GitHub repositories, providing a similar experience to Vercel's deployment workflow.",
    features: [
      "GitHub integration",
      "Automatic deployments",
      "Custom domain support",
      "Build configuration"
    ],
    stack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
    ],
    image: "/assets/resume/vercel.png",
    live: "",
    github: "https://github.com/retr0717/vercel-clone",
    featured: false,
    year: "2023"
  },
  {
    id: "omegle",
    num: "06",
    category: "full stack",
    title: "OMEGLE CLONE",
    desc: "A real-time video chat platform that connects users randomly, implementing WebRTC for peer-to-peer video streaming and socket connections for signaling.",
    features: [
      "Real-time video chat",
      "Text messaging",
      "Random matching algorithm",
      "Low-latency connections"
    ],
    stack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "WebSockets", color: "bg-purple-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
    ],
    image: "/assets/resume/omegle.png",
    live: "",
    github: "https://github.com/retr0717/omegle-clone",
    featured: true,
    year: "2023"
  },
  {
    id: "learning-platform",
    num: "07",
    category: "full stack",
    title: "LEARNING PLATFORM",
    desc: "An interactive educational platform that offers courses, assessments, and progress tracking with a focus on personalized learning paths and content delivery.",
    features: [
      "Course management system",
      "Student progress tracking",
      "Interactive assessments",
      "Content recommendation"
    ],
    stack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-blue-600" },
    ],
    image: "/assets/resume/learn.png",
    live: "",
    github: "https://github.com/retr0717/learn",
    featured: false,
    year: "2022"
  },
];

// Filter categories
const categories = ["all", "full stack"];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100]);

  // Handle category filtering
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = activeCategory === "all" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);
      
      // Only update if there are projects after filtering
      if (filtered.length > 0) {
        setFilteredProjects(filtered);
        setSelectedProject(filtered[0]);
      } else {
        // If no projects match the filter, keep all projects but show a message
        setFilteredProjects(projects);
        setSelectedProject(projects[0]);
        // Optionally show a notification that no projects match the filter
      }
      
      setIsLoading(false);
    }, 500);
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    exit: { scale: 0.9, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="pt-20 pb-32 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-4"
      >
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
              My Portfolio
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Explore my latest work showcasing a range of full stack applications built with modern technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-accent text-black' 
                  : 'bg-secondary/80 text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center py-20"
            >
              <div className="w-12 h-12 border-t-2 border-accent rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 xl:grid-cols-12 gap-10"
            >
              {/* Project List - Reduced height */}
              <motion.div 
                variants={itemVariants}
                className="xl:col-span-4 order-2 xl:order-1"
              >
                <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
                  <h3 className="text-lg font-semibold mb-3">Project Collection</h3>
                  
                  {/* Project list with max height and scrolling */}
                  <div className="space-y-2 max-h-[330px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent pr-2">
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className={`cursor-pointer p-3 rounded-xl transition-all ${
                          selectedProject.id === project.id 
                            ? 'bg-accent/10 border border-accent/20' 
                            : 'hover:bg-white/5'
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className={`font-semibold text-sm ${
                              selectedProject.id === project.id ? 'text-accent' : 'text-white'
                            }`}>{project.title}</h4>
                            <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">{project.desc}</p>
                          </div>
                          <span className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded-full">
                            {project.year}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Project Details - Reduced height */}
              <motion.div 
                variants={itemVariants} 
                className="xl:col-span-8 order-1 xl:order-2"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-secondary rounded-2xl overflow-hidden border border-white/5"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Project Image - Reduced height with fixed aspect ratio */}
                      <div className="relative bg-black/20 w-full overflow-hidden flex items-center justify-center">
                        <div className="relative w-full h-[300px] lg:h-[400px]">
                          <Image 
                            src={selectedProject.image}
                            fill
                            className="object-contain" 
                            alt={selectedProject.title}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                            priority={true}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent pointer-events-none"></div>
                        
                        {/* Project category badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <Badge className="bg-accent/80 backdrop-blur-sm text-black hover:bg-accent text-xs">
                            {selectedProject.category.toUpperCase()}
                          </Badge>
                        </div>
                        
                        {/* Project Links */}
                        <div className="absolute top-3 right-3 z-10 flex space-x-2">
                          {selectedProject.github && (
                            <motion.div whileHover={{ y: -2 }}>
                              <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="secondary" className="w-7 h-7 rounded-full p-0">
                                  <BsGithub className="text-xs" />
                                </Button>
                              </Link>
                            </motion.div>
                          )}
                          
                          {selectedProject.live && (
                            <motion.div whileHover={{ y: -2 }}>
                              <Link href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="default" className="w-7 h-7 rounded-full p-0">
                                  <HiOutlineExternalLink className="text-xs text-black" />
                                </Button>
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {/* Project Content - More compact layout */}
                      <div className="p-4 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-xl font-bold">{selectedProject.title}</h2>
                          <span className="text-xs px-1.5 py-0.5 bg-white/10 rounded-full">
                            {selectedProject.year}
                          </span>
                        </div>
                        <p className="text-text-secondary text-xs mb-3 line-clamp-2">{selectedProject.desc}</p>
                        
                        <div className="grid grid-cols-2 gap-3 flex-grow">
                          {/* Project Features - More compact */}
                          <div>
                            <h3 className="text-xs font-semibold mb-2">Key Features</h3>
                            <ul className="space-y-1">
                              {selectedProject.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-1.5 text-text-secondary text-[10px]">
                                  <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0"></span>
                                  <span className="line-clamp-1">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Tech Stack - More compact */}
                          <div>
                            <h3 className="text-xs font-semibold mb-2">Technologies</h3>
                            <div className="flex flex-wrap gap-1">
                              {selectedProject.stack.slice(0, 6).map((tech, idx) => (
                                <span 
                                  key={idx} 
                                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium text-white ${tech.color} bg-opacity-80`}
                                >
                                  {tech.name}
                                </span>
                              ))}
                              {selectedProject.stack.length > 6 && (
                                <span className="text-[10px] text-text-secondary">
                                  +{selectedProject.stack.length - 6} more
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons - More compact */}
                        <div className="mt-4 flex gap-2">
                          {selectedProject.live && (
                            <Link href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button size="sm" className="w-full gap-1 text-xs text-black py-1">
                                Live Demo
                                <BsArrowUpRight className="text-xs" />
                              </Button>
                            </Link>
                          )}
                          
                          <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" variant="outline" className="w-full gap-1 text-xs py-1">
                              Source Code
                              <BsGithub className="text-xs" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-accent text-black rounded-xl font-medium hover:bg-accent/90 transition-all"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
