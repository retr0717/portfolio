"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "I develop scalable web applications using modern technologies and best practices.",
    href: "",
  },
  {
    num: "02",
    title: "Web Security",
    desc: "Deals with the security of websites, web applications, and web services.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">My Services</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Specialized services tailored to deliver exceptional digital experiences
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service: any, index: number) => {
            return (
              <div
                key={index}
                className="bg-secondary rounded-xl p-8 transition-all hover:translate-y-[-5px] hover:shadow-xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                    <span className="text-accent font-bold">{service.num}</span>
                  </div>
                  <Link
                    href={service.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex justify-center items-center text-accent hover:bg-accent hover:text-white transition-all"
                  >
                    <BsArrowDownRight className="text-xl" />
                  </Link>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-secondary">{service.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
