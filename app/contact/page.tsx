"use client";

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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Social from "@/components/Social";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    desc: "+91 8138977809",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    desc: "alwinaji717@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    desc: "Thrissur, Kerala, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/*form*/}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-secondary rounded-xl">
              <h3 className="text-2xl font-bold">Let's Work Together</h3>
              <p className="text-text-secondary mb-4">
                Looking forward to collaborating and building next-gen technologies
              </p>
              
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="First name" className="bg-primary border-white/5" />
                <Input type="text" placeholder="Last name" className="bg-primary border-white/5" />
                <Input type="email" placeholder="Email address" className="bg-primary border-white/5" />
                <Input type="tel" placeholder="Phone number" className="bg-primary border-white/5" />
              </div>
              
              {/*select*/}
              <Select>
                <SelectTrigger className="bg-primary border-white/5">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="websec">Web Security</SelectItem>
                    <SelectItem value="consoleapp">Console Applications</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              {/*textarea*/}
              <Textarea
                className="h-[180px] bg-primary border-white/5"
                placeholder="Tell me about your project..."
              />
              
              {/*button*/}
              <Button size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
          
          {/*info*/}
          <div className="flex-1 order-1 xl:order-none">
            <div className="bg-secondary p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                {info.map((item: any, index: number) => {
                  return (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                        <div className="text-xl">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-text-secondary text-sm">{item.title}</p>
                        <h4 className="text-lg font-medium">{item.desc}</h4>
                      </div>
                    </li>
                  );
                })}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                <Social
                  containerStyles="flex gap-4"
                  iconsStyles="w-10 h-10 bg-primary text-text-primary hover:text-accent flex justify-center items-center rounded-full transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
