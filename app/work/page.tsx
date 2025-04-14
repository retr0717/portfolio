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
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "crypto wallet",
    desc: "crypto wallet to store and transfer cryptocurrencies",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Tailwindcss" },
      { name: "Javascript" },
    ],
    image: "/assets/resume/wallet.png",
    live: "https://crypto-wallet-smoky.vercel.app/",
    github: "https://github.com/retr0717/crypto-wallet",
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
    image: "/assets/resume/vercel.png",
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
    image: "/assets/resume/omegle.png",
    live: "",
    github: "https://github.com/retr0717/omegle-clone",
  },
  {
    num: "04",
    category: "full stack",
    title: "Learning Platform",
    desc: "Learning Platform with full stack development",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Tailwindcss" },
      { name: "Typescript" },
    ],
    image: "/assets/resume/learn.png",
    live: "",
    github: "https://github.com/retr0717/learn",
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
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[40%] xl:sticky xl:top-20 xl:self-start">
            <div className="flex flex-col gap-6 bg-secondary rounded-xl p-8 mb-8">
              {/*Project category*/}
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {project.category}
              </div>

              <h2 className="text-2xl font-bold capitalize">{project.title}</h2>

              {/*Project Description*/}
              <p className="text-text-secondary">{project.desc}</p>

              {/*stack*/}
              <div className="mt-2">
                <h4 className="text-sm text-text-secondary mb-2">Technologies</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item: { name: string }, index: number) => (
                    <li key={index} className="px-3 py-1 bg-primary rounded-full text-xs">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

              {/*Buttons*/}
              <div className="flex items-center gap-4 mt-4">
                {project.live && (
                  <Link href={project.live} className="flex-1">
                    <Button variant="default" className="w-full">
                      <span>Live Demo</span>
                      <BsArrowUpRight className="ml-2" />
                    </Button>
                  </Link>
                )}

                <Link href={project.github} className="flex-1">
                  <Button variant="outline" className="w-full">
                    <span>GitHub</span>
                    <BsGithub className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="aspect-video relative group overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover transition-transform group-hover:scale-105 duration-500"
                        alt={project.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-4 bottom-4 z-20"
                btnStyles="bg-white/20 backdrop-blur-sm hover:bg-accent text-white text-[18px] w-10 h-10 flex justify-center items-center rounded-full transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
