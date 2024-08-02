"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

//about data
const about = {
  title: "A propos de moi",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores eaque earum expedita fugit id itaque praesentium quidem ullam voluptatibus!",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Monel Cocou GAFFAN",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+229) 97 15 85 19",
    },
    {
      fieldName: "Expérience",
      fieldValue: "+8 Années",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Béninoise",
    },
    {
      fieldName: "Email",
      fieldValue: "monelcocou@gmail.com",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
  ],
};

//Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores eaque earum expedita fugit id itaque praesentium quidem ullam voluptatibus!",
  items: [
    {
      company: "CICASYS",
      position: "CEO",
      duration: "2019 - à nos jours",
    },
    {
      company: "Web Design",
      position: "Full Stack Developper",
      duration: "2019 - 2022",
    },
    {
      company: "E-commerce Startup",
      position: "Full Stack Developper",
      duration: "2018 - 2019",
    },
    {
      company: "Tech Academy",
      position: "Full Stack Developper",
      duration: "2018 - 2019",
    },
    {
      company: "Digital Agency",
      position: "Junior Developer",
      duration: "2018 - 2019",
    },
    {
      company: "AMANGA SA",
      position: "Junior Developer",
      duration: "2018 - 2019",
    },
  ],
};

//Experience data
const Education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon éducation",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores eaque earum expedita fugit id itaque praesentium quidem ullam voluptatibus!",
  items: [
    {
      institution:
        "Ecole Nationale d'Economie Appliquée et de Management (ENEAM)",
      degree: "Licence Professionnelle",
      duration: "2013",
    },
    {
      institution: "Design School",
      degree: "Licence Professionnelle",
      duration: "2013",
    },
    {
      institution: "Online course",
      degree: "Programing Course",
      duration: "2015",
    },
    {
      institution: "Ecole Catholique Notre Dame de Lourdes",
      degree: "Baccalaureat",
      duration: "2015",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores eaque earum expedita fugit id itaque praesentium quidem ullam voluptatibus!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const Propos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Expériences</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">A propos de moi</TabsTrigger>
          </TabsList>

          {/*Content*/}
          <div className="min-h-[70vh] w-full">
            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              Experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Propos;
