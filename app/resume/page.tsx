"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

{
  /*about data*/
}
const about = {
  title: "About Me",
  desc: "Developer who actively follows the tech field",
  info: [
    {
      fieldName: "Name",
      fieldValue: "ALwin Aji",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8138977809",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "alwinaji717@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
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
    {
      icons: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icons: <FaCss3 />,
      name: "CSS3",
    },
    {
      icons: <FaJs />,
      name: "Javascript",
    },
    {
      icons: <FaReact />,
      name: "ReactJs",
    },
    {
      icons: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icons: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icons: <FaNodeJs />,
      name: "nodsjs",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Experience",
  desc: "Self Taught web developer",
  items: [
    {
      company: "Nill",
      position: "web developer",
      duration: "2022 - Present",
    },
    {
      company: "Nill",
      position: "web developer",
      duration: "2022 - Present",
    },
    {
      company: "Nill",
      position: "web developer",
      duration: "2022 - Present",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/*aboutme*/}
            <TabsContent value="experience" className="w-full">
              aboutme
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
