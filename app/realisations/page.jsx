"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Medica",
    title: "Medica",
    description:
      "Medica est une application utilisée par plus de 50 cliniques pour simplifier et accélérer la gestion des données médicales.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/thumb1.png",
    live: "https://cicasys.co/medica/",
    github: "",
  },
  {
    num: "02",
    category: "Cica Laboratoire",
    title: "Cica Laboratoire",
    description:
      "Solution avancée de gestion de laboratoire, optimisant l’analyse des échantillons, la traçabilité et la collaboration pour des résultats fiables et rapides.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/thumb2.png",
    live: "https://cicasys.co/cica-laboratoire/",
    github: "",
  },
  {
    num: "03",
    category: "Cica Facturation",
    title: "Cica Facturation",
    description:
      "Logiciel de facturation professionnel, simplifiant la gestion des devis, factures et paiements pour une comptabilité précise et efficace.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/thumb3.png",
    live: "https://cicasys.co/cica-facturation/",
    github: "",
  },
  {
    num: "04",
    category: "Optica",
    title: "Optica",
    description:
        "Optica est un logiciel dédié à la gestion des centres optiques, conçu pour simplifier leurs opérations et améliorer leur productivité.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/thumb3.png",
    live: "https://www.cicasys.co/",
    github: "",
  },
  {
    num: "05",
    category: "InnovRental",
    title: "InnovRental",
    description:
        "InnovRental est une application SaaS de gestion locative, à laquelle j’ai contribué durant mon stage en développant des modules clés.",
    stack: [{ name: "Laravel" }, { name: "Filament" }, { name: "Livewire" }, { name: "MySQL" }],
    image: "/assets/work/thumb3.png",
    live: "https://dev1.innovrental.com/",
    github: "",
  },
  {
    num: "06",
    category: "EduBase",
    title: "EduBase",
    description:
        "Edubase est une application de gestion scolaire complète, facilitant le suivi académique, administratif et la communication entre acteurs éducatifs.",
    stack: [{ name: "NestJS" }, { name: "NextJS" }, { name: "Prisma" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/monelcocou/edubase",
    github: "",
  },
];

const Realisations = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
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
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/*project description*/}
              <p className="text-white/60">{project.description}</p>

              {/*Stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/*border*/}
              <div className="border border-white/20"></div>

              {/*buttons*/}
              <div className="flex items-center gap-4">
                {/*Live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*Github project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
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
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/*Slider Buttons*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Realisations;
