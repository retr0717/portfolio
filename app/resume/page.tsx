"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCypress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { DockIcon } from "lucide-react";

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
      fieldName: "GitHub",
      fieldValue: "retr0717",
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
      fieldValue: "English,Malayalam",
    },
  ],
};

const education = {
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
    {
      icons: <SiTypescript />,
      name: "Typescript",
    },
    {
      icons: <FaDocker />,
      name: "Dockers",
    },
    {
      icons: <SiCypress />,
      name: "Cypress",
    },
    {
      icons: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icons: <SiPostgresql />,
      name: "Postgresql",
    },

    {
      icons: <FaLinux />,
      name: "Linux",
    },
  ],
};

const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My Experience",
  desc: "Self Taught Web Developer ,focused on building next gen web apps",
  items: [
    {
      company: "IEEE SB CE KGR",
      position: "Webmaster",
      duration: "2024 - Present",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dat*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/*dat*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-text-secondary mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill: any, index: number) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-secondary rounded-lg hover:border border-accent/30 flex justify-center items-center group transition-all">
                              <div className="text-4xl group-hover:text-accent transition-all">
                                {skill.icons}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*aboutme*/}
            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info: any, index: number) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
