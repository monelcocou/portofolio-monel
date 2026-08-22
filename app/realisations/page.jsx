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
      "Medica est une plateforme de gestion hospitalière utilisée par 70 cliniques pour simplifier et accélérer la gestion des données médicales.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/ic_medica.png",
    live: "https://cicasys.co/produits/medica",
    github: "",
  },
  {
    num: "02",
    category: "Medivio",
    title: "Medivio",
    description:
        "Plateforme SaaS de médecine du travail conçue et développée pour les cabinets médicaux d'Afrique francophone : suivi des salariés, visites médicales et aptitudes, AT/MP, vaccinations, prévention, agenda, alertes temps réel et abonnement mobile money.",
    stack: [
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/work/ic_medivio.jpeg",
    live: "https://cicasys.co/produits/medivio",
    github: "",
  },
  {
    num: "03",
    category: "Cica Laboratoire",
    title: "Cica Laboratoire",
    description:
      "Solution avancée de gestion de laboratoire, optimisant l’analyse des échantillons, la traçabilité et la collaboration pour des résultats fiables et rapides.",
    stack: [{ name: "C#" }, { name: "SQL Server" }],
    image: "/assets/work/ic_labo.png",
    live: "https://cicasys.co/produits/cica-laboratoire",
    github: "",
  },
  // {
  //   num: "04",
  //   category: "Cica Facturation",
  //   title: "Cica Facturation",
  //   description:
  //   "Logiciel de facturation professionnel, simplifiant la gestion des devis, factures et paiements pour une comptabilité précise et efficace.",
  //   stack: [{ name: "C#" }, { name: "SQL Server" }],
  //   image: "/assets/work/ic_facturation.png",
  //   live: "https://cicasys.co/cica-facturation/",
  //   github: "",
  // },
  // {
  //   num: "05",
  //   category: "Optica",
  //   title: "Optica",
  //   description:
  //   "Optica est un logiciel dédié à la gestion des centres optiques, conçu pour simplifier leurs opérations et améliorer leur productivité.",
  //   stack: [{ name: "C#" }, { name: "SQL Server" }],
  //   image: "/assets/work/ic_optica.png",
  //   live: "https://www.cicasys.co/",
  //   github: "",
  // },
  // {
  //   num: "06",
  //   category: "EduBase",
  //   title: "EduBase",
  //   description:
  //       "Edubase est une application de gestion scolaire complète, facilitant le suivi académique, administratif et la communication entre acteurs éducatifs.",
  //   stack: [{ name: "NestJS" }, { name: "NextJS" }, { name: "Prisma" }, { name: "PostgreSQL" }],
  //   image: "/assets/work/ic_edubase.png",
  //   live: "",
  //   github: "https://github.com/monelcocou/edubase",
  // },
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
        <div className="mb-14 text-center xl:text-left">
          <h1 className="h2 mb-4">
            Mes <span className="text-accent">réalisations</span>
          </h1>
          <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
            Cinq produits conçus et livrés, du logiciel de gestion clinique à la
            plateforme SaaS. Tous utilisés par de vrais clients.
          </p>
        </div>

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
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Voir le projet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/*Github project button*/}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Dépôt Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
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
                          sizes="(max-width: 1280px) 100vw, 50vw"
                          className="object-cover"
                          alt={`Aperçu du projet ${project.title}`}
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
