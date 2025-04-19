"use client";

import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLinux,
  FaAws,
  FaGithub,
  FaPython
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCypress,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiSocketdotio,
  SiExpo // Using Expo icon as an alternative for React Native
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { BriefcaseIcon, GraduationCapIcon, CodeIcon, UserIcon, GitBranch } from "lucide-react";

// Resume data
const about = {
  title: "About Me",
  desc: "Developer who actively follows the tech field",
  info: [
    { fieldName: "Name", fieldValue: "ALwin Aji" },
    { fieldName: "Phone", fieldValue: "(+91) 8138977809" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "GitHub", fieldValue: "retr0717" },
    { fieldName: "Email", fieldValue: "alwinaji717@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Malayalam" },
  ],
};

const education = {
  title: "My Education",
  desc: "Been an attentive student",
  items: [
    {
      institute: "Abdul Kalam Technological University",
      degree: "B.tech",
      duration: "2022-2026",
    },
    {
      institute: "CSHSS Thrissur",
      degree: "Higher Secondary",
      duration: "2020 - 2021",
    },
    {
      institute: "FreeCodeCamp",
      degree: "Backend Development",
      duration: "2021-2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  desc: "Full Stack Web Developer and a Security Enthusiast",
  skillList: [
    { icons: <FaHtml5 />, name: "HTML5" },
    { icons: <FaCss3 />, name: "CSS3" },
    { icons: <FaJs />, name: "Javascript" },
    { icons: <FaReact />, name: "ReactJs" },
    { icons: <SiExpo />, name: "React Native" },
    { icons: <SiNextdotjs />, name: "NextJS" },
    { icons: <SiTailwindcss />, name: "TailwindCSS" },
    { icons: <FaNodeJs />, name: "NodeJS" },
    { icons: <SiTypescript />, name: "TypeScript" },
    { icons: <FaPython />, name: "Python" },
    { icons: <FaDocker />, name: "Docker" },
    { icons: <SiKubernetes />, name: "Kubernetes" },
    { icons: <FaAws />, name: "AWS" },
    { icons: <SiSocketdotio />, name: "WebSockets" },
    { icons: <SiCypress />, name: "Cypress" },
    { icons: <SiMongodb />, name: "MongoDB" },
    { icons: <SiPostgresql />, name: "PostgreSQL" },
    { icons: <FaLinux />, name: "Linux" },
    { icons: <FaGithub />, name: "GitHub" },
    { icons: <GitBranch/>, name: "GitOps"}
  ],
};

const experience = {
  title: "My Experience",
  desc: "Self Taught Web Developer, focused on building next gen web apps",
  items: [
    {
      company: "IEEE SB CE KGR",
      position: "Webmaster",
      duration: "2024 - 2025,APRIL",
    },
    {
      compnay: "SATLAA JEWEL PVT LTD",
      position: "FULL STACK FRONTEND DEVELOPER",
      duration: "3 MONTHS'2025",
    }
  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const tabContentRef = useRef(null);

  // Tab icons for the navigation
  const tabIcons = {
    experience: <BriefcaseIcon className="w-5 h-5" />,
    education: <GraduationCapIcon className="w-5 h-5" />,
    skills: <CodeIcon className="w-5 h-5" />,
    aboutme: <UserIcon className="w-5 h-5" />
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const titleVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (index: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-[80vh] flex flex-col py-10 px-4 sm:py-16 lg:py-24"
      >
        <div className="container mx-auto relative">
          {/* Decorative Background Elements */}
          <motion.div 
            className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div 
            className="absolute -bottom-10 -right-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] -z-10" 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Resume</h1>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
              My professional journey, skills, and qualifications
            </p>
          </motion.div>

          <Tabs
            defaultValue="experience"
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Tab Navigation - Icons only on mobile */}
            <div className="w-full mx-auto max-w-md lg:max-w-none lg:w-[250px] lg:sticky lg:top-24 lg:self-start">
              <TabsList className="flex flex-row lg:flex-col w-full bg-secondary/50 backdrop-blur-sm rounded-xl p-2 gap-2 justify-center sm:justify-start">
                {Object.entries(tabIcons).map(([key, icon]) => (
                  <TabsTrigger 
                    key={key}
                    value={key}
                    className={`flex items-center gap-2 sm:gap-3 w-full justify-center sm:justify-start px-2 sm:px-4 py-3 data-[state=active]:bg-accent data-[state=active]:text-black transition-all duration-200 ${activeTab === key ? 'font-medium' : 'text-white/70'}`}
                    onClick={() => setActiveTab(key)}
                  >
                    <motion.span
                      animate={{ rotate: activeTab === key ? 0 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-base" // Slightly larger icon on mobile
                    >
                      {icon}
                    </motion.span>
                    <span className="hidden sm:inline-block text-sm">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px] sm:min-h-[600px] w-full" ref={tabContentRef}>
              <AnimatePresence mode="wait">
                {/* Experience Tab */}
                <TabsContent 
                  key="experience-tab"
                  value="experience" 
                  className="w-full mt-0"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 sm:gap-10"
                  >
                    <motion.div variants={titleVariants} className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {experience.title}
                      </h2>
                      <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                        {experience.desc}
                      </p>
                    </motion.div>

                    <ScrollArea className="h-[400px] sm:h-[500px] pr-3 sm:pr-6 py-2 sm:py-4">
                      <motion.ul 
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
                      >
                        {experience.items.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            custom={index}
                          >
                            <motion.div 
                              variants={cardVariants}
                              className="relative bg-secondary rounded-xl p-5 sm:p-8 border border-accent/10 h-full overflow-hidden group"
                            >
                              {/* Accent bar */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                              
                              {/* Background pattern */}
                              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-5 bg-accent/10 rounded-tl-3xl" />
                              
                              <motion.span 
                                className="inline-block mb-4 px-3 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.duration}
                              </motion.span>
                              
                              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {item.position}
                              </h3>
                              
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                <p className="text-text-secondary">{item.company}</p>
                              </div>
                            </motion.div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>

                {/* Education Tab */}
                <TabsContent 
                  key="education-tab"
                  value="education" 
                  className="w-full mt-0"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 sm:gap-10"
                  >
                    <motion.div variants={titleVariants} className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {education.title}
                      </h2>
                      <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                        {education.desc}
                      </p>
                    </motion.div>

                    <ScrollArea className="h-[400px] sm:h-[500px] pr-3 sm:pr-6 py-2 sm:py-4">
                      <motion.ul 
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
                      >
                        {education.items.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            custom={index}
                          >
                            <motion.div 
                              variants={cardVariants}
                              className="relative bg-secondary rounded-xl p-5 sm:p-8 border border-accent/10 h-full overflow-hidden group"
                            >
                              {/* Accent bar */}
                              <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                              
                              {/* Background pattern */}
                              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-5 bg-accent/10 rounded-tl-3xl" />
                              
                              <motion.span 
                                className="inline-block mb-4 px-3 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.duration}
                              </motion.span>
                              
                              <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                                {item.degree}
                              </h3>
                              
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                <p className="text-text-secondary">{item.institute}</p>
                              </div>
                            </motion.div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent 
                  key="skills-tab"
                  value="skills" 
                  className="w-full h-full mt-0"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 sm:gap-10"
                  >
                    <motion.div variants={titleVariants} className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {skills.title}
                      </h2>
                      <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                        {skills.desc}
                      </p>
                    </motion.div>

                    <ScrollArea className="pr-3 sm:pr-6 py-2 sm:py-4">
                      <motion.ul 
                        variants={containerVariants}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6"
                      >
                        {skills.skillList.map((skill, index) => (
                          <motion.li 
                            key={index}
                            variants={skillVariants}
                            whileHover="hover"
                            custom={index}
                          >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[100px] sm:h-[130px] bg-secondary rounded-xl border border-white/5 overflow-hidden flex flex-col justify-center items-center gap-3 sm:gap-4 group transition-all relative">
                                  {/* Decoration */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="text-4xl sm:text-5xl text-white/80 group-hover:text-accent transition-all duration-300 z-10">
                                    {skill.icons}
                                  </div>
                                  <p className="text-xs sm:text-sm text-text-secondary group-hover:text-white transition-colors duration-300 z-10">
                                    {skill.name}
                                  </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Expert in {skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>

                {/* About Me Tab */}
                <TabsContent 
                  key="aboutme-tab"
                  value="aboutme" 
                  className="w-full mt-0"
                >
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col gap-6 sm:gap-10"
                  >
                    <motion.div variants={titleVariants} className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {about.title}
                      </h2>
                      <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                        {about.desc}
                      </p>
                    </motion.div>

                    <motion.div 
                      variants={itemVariants}
                      className="bg-secondary rounded-xl border border-accent/10 p-5 sm:p-8 lg:p-10 mx-auto w-full"
                    >
                      <motion.ul 
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6"
                      >
                        {about.info.map((info, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 group"
                          >
                            <span className="text-text-secondary group-hover:text-accent transition-colors font-medium">
                              {info.fieldName}:
                            </span>
                            <span className="text-white">
                              {info.fieldValue}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default Resume;
