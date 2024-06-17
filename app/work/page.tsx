"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "E-commerce",
    desc: "E-commerce website with full stack development",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Handlebars" },
      { name: "bootstrap" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/retr0717/e-commerce",
  },
  {
    num: "02",
    category: "full stack",
    title: "Vercel clone",
    desc: "vercel clone to locally host a website by using the github repo of that project",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/retr0717/vercel-clone",
  },
  {
    num: "03",
    category: "full stack",
    title: "Omegle",
    desc: "omegle website clone with full stack development",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Sockets" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/retr0717/omegle-clone",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex felx-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*Project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/*Project Description*/}
              <p className="text-white/60">{project.desc}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item: { name: string }, index: number) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index === project.stack.length - 1 ? "" : ","}
                  </li>
                ))}
              </ul>
              {/*Border*/}
              <div className="border border-white/20"></div>
              {/*Buttons*/}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>View Live</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*live project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>Github Repo</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
