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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Looking forward to collaborate and build Next Gen Technologies
              </p>
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />{" "}
                <Input type="lastname" placeholder="Lastname" />{" "}
                <Input type="email" placeholder="Email" />{" "}
                <Input type="phoneno" placeholder="Phone Number" />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Web Security</SelectItem>
                    <SelectItem value="mst">Console Applications</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
