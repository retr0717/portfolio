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
import WorkSliderButtons from "@/components/WorkSliderBtns";

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
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
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
                  <li key={index} className="text-sm text-accent">
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-8 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons*/}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
