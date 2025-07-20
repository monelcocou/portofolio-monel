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
  FaWordpress, FaPhp, FaSymfony, FaBootstrap,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiNestjs, SiMysql} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";
import {BiLogoPostgresql} from "react-icons/bi";
import {DiMsqlServer} from "react-icons/di";

//about data
const about = {
  title: "A propos de moi",
  description:
    "Vous avez un projet en tête ou souhaitez en savoir plus sur mes" +
      " services ? Je serais ravi d’échanger avec vous. N’hésitez " +
      "pas à me contacter pour discuter de vos besoins ou poser vos questions. Je suis à votre écoute.",
  info: [
    {
      fieldName: "Nom:",
      fieldValue: "Monel Cocou GAFFAN",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+33) 07 44 72 09 33",
    },
    {
      fieldName: "Expérience:",
      fieldValue: "+8 Années",
    },
    {
      fieldName: "Nationalité:",
      fieldValue: "Béninoise",
    },
    {
      fieldName: "Email:",
      fieldValue: "monelcocou@gmail.com",
    },
    {
      fieldName: "Langues:",
      fieldValue: "Français, Anglais",
    },
    /*{
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },*/
  ],
};

//Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Mon parcours professionnel m’a permis de concevoir des solutions " +
      "logicielles sur mesure et de participer à des projets innovants, " +
      "en étroite collaboration avec des entreprises. Grâce à une solide " +
      "expertise technique et un sens aigu de l’écoute, j’ai pu répondre " +
      "efficacement à des besoins métiers concrets, tout en assurant performance, " +
      "fiabilité et évolutivité des outils développés",
  items: [
    {
      company: "InnovQube",
      position: "Stage Développeur Laravel",
      duration: "Avril - Juin 2025",
    },
    {
      company: "CICASYS",
      position: "CEO et Développeur",
      duration: "2019 - 2024",
    },
    {
      company: "GED TECHNOLOGIES",
      position: "Consultant en GED",
      duration: "2016 - 2018",
    },
    {
      company: "AMANGA SA",
      position: "Développeur d’applis Desktop",
      duration: "2014 - 2016",
    },
  ],
};

//Experience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon éducation",
  description:
    "Mon parcours académique en informatique m’a permis d’acquérir des bases" +
      " théoriques solides ainsi que des compétences avancées en développement, " +
      "en analyse de systèmes et en gestion de projets numériques. " +
      "Ces connaissances me permettent aujourd’hui de concevoir des " +
      "solutions adaptées aux enjeux techniques et organisationnels des entreprises.",
  items: [
    {
      institution: "Université de Rennes 1",
      degree: "Licence Informatique Parcours MIAGE",
      duration: "2024",
    },
    {
      institution: "Université d'Abomey Calavi",
      degree: "Licence Informatique de Gestion",
      duration: "2013",
    },

    {
      institution: "Notre Dame de Lourdes - BJ",
      degree: "Baccalauréat",
      duration: "2010",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Mes compétences techniques et transversales témoignent de mon expertise en " +
      "développement full-stack, en modélisation de systèmes, et en conception de " +
      "solutions performantes. Curieux, rigoureux et orienté résultats, je sais" +
      " m’adapter rapidement aux besoins des projets et collaborer efficacement avec " +
      "les équipes techniques et métiers.",
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
      icon:<FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
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
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaSymfony />,
      name: "Symfony",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <TbBrandCSharp />,
      name: "C#",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    ,
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "C#",
    },
    {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    }


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
                <p className="text-white/60 mx-auto xl:mx-0">
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
                <p className="text-white/60 mx-auto xl:mx-0">
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
                  <p className="text-white/60 mx-auto xl:mx-0">
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
                <p className="text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0 mt-5">
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
