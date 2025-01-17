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
  FaWordpress,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiCsharp } from "react-icons/si";
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
      fieldValue: "(+33) 07 44 72 09 33  -  (+229) 01 97 15 85 19",
    },
    {
      fieldName: "Expérience",
      fieldValue: "+7 Années",
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
      position: "CEO et Développeur",
      duration: "2016 - à nos jours",
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
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon éducation",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, asperiores eaque earum expedita fugit id itaque praesentium quidem ullam voluptatibus!",
  items: [
    {
      institution: "ENEAM/UAC",
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
      institution: "Notre Dame de Lourdes/PN",
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
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
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

            {/*Education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*Skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
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

            {/*About*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
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

export default Propos;
