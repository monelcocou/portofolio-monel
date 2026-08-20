"use client";
import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLaravel,
  FaWordpress, FaPhp, FaSymfony, FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiMysql,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";
import {BiLogoPostgresql} from "react-icons/bi";
import {DiMsqlServer} from "react-icons/di";

//about data
const about = {
  title: "A propos de moi",
  description:
    "Développeur full-stack depuis plus de huit ans. J’ai commencé par des " +
      "applications de gestion en C# au Bénin, puis j’ai créé CICASYS et conçu " +
      "des logiciels métier pour le secteur médical, aujourd’hui utilisés par " +
      "plus de 70 cliniques, laboratoires et cabinets. Je suis désormais en " +
      "Master 2 MIAGE à l’Université de Rennes, en alternance chez Samsic.",
  info: [
    {
      fieldName: "Nom:",
      fieldValue: "Monel Cocou GAFFAN",
    },
    {
      fieldName: "Expérience:",
      fieldValue: "+8 Années",
    },
    {
      fieldName: "Localisation:",
      fieldValue: "Rennes, France",
    },
    {
      fieldName: "Nationalité:",
      fieldValue: "Béninoise",
    },
    {
      fieldName: "Langues:",
      fieldValue: "Français (natif), Anglais (B1)",
      wide: true,
    },
    {
      fieldName: "Statut:",
      fieldValue: "Master 2 MIAGE en alternance",
      wide: true,
    },
  ],
  highlights: [
    {
      label: "Hackathon",
      value:
        "3ᵉ place — BreakTheCode 2025 (Sopra Steria), avec l’équipe L3G4CY",
    },
    {
      label: "Produits en production",
      value: "Medica, Cica Laboratoire, Cica Facturation, Optica, Medivio",
    },
  ],
};

//Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Plus de huit ans de terrain, du développement d’applications desktop en C# " +
      "à la conception de plateformes SaaS. Cinq de ces années passées à faire " +
      "vivre mes propres produits chez des clients payants m’ont appris autant " +
      "sur la maintenance, le support et la relation client que sur le code.",
  items: [
    {
      company: "SAMSIC — Rennes",
      position: "Développeur Full-Stack (alternance)",
      duration: "Depuis Septembre 2026",
      details: "Application MySamsic — Symfony, ElasticSearch",
    },
    {
      company: "SAMSIC — Rennes",
      position: "Stage - Développeur Symfony",
      duration: "Mai - Aout 2026",
      details:
        "Fonctionnalité des minutes prévention de MySamsic — Symfony, ElasticSearch",
    },
    {
      company: "InnovQube — Paris",
      position: "Stage - Développeur Laravel",
      duration: "Avril - Juin 2025",
      details:
        "SaaS B2B en environnement Agile — Laravel 12, Vue.js, Livewire, Filament, GitLab CI/CD",
    },
    {
      company: "CICASYS — Cotonou",
      position: "Fondateur & Développeur",
      duration: "2019 - 2024",
      details:
        "Medica, Cica Laboratoire, Cica Facturation, Medivio — C#, SQL Server, NestJS, Next.js, Symfony",
    },
    {
      company: "GED Technologies / Orabank",
      position: "Consultant en GED",
      duration: "2016 - 2018",
      details:
        "Dématérialisation et optimisation des process documentaires — M-Files, Kofax Express",
    },
    {
      company: "AMANGA SA — Cotonou",
      position: "Développeur d’apps Desktop",
      duration: "2014 - 2016",
      details: "Amanga Gestion Commerciale — C#, SQL Server, MySQL",
    },
  ],
};

//Experience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mon éducation",
  description:
    "Une formation initiale en informatique de gestion au Bénin, complétée par " +
      "un parcours MIAGE à l’Université de Rennes, filière qui associe " +
      "informatique, gestion et conduite de projet. C’est ce double regard, " +
      "technique et métier, que j’applique aux produits que je conçois.",
  items: [
    {
      institution: "Université de Rennes",
      degree: "Master Informatique — Parcours MIAGE",
      duration: "2025 - En cours",
    },
    {
      institution: "Université de Rennes",
      degree: "Licence 3 Info — Parcours MIAGE",
      duration: "2024 - 2025",
    },
    {
      institution: "Université d'Abomey-Calavi",
      degree: "Licence Informatique de Gestion",
      duration: "2010 - 2013",
    },

    {
      institution: "Notre Dame de Lourdes",
      degree: "Baccalauréat Série Scientifique",
      duration: "2010",
    },
  ],
};

const skills = {
  title: "Mes compétences",
  description:
    "Je travaille aussi bien côté front que côté back, et je prends en charge la " +
      "mise en production : conception d’API REST, bases de données " +
      "relationnelles, conteneurisation Docker et pipelines CI/CD. Les " +
      "technologies ci-dessous sont celles que j’utilise en projet réel, pas " +
      "seulement en cours.",
  categories: [
    {
      name: "Front-end",
      items: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaVuejs />, name: "Vue.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      name: "Back-end",
      items: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiNestjs />, name: "NestJS" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <FaSymfony />, name: "Symfony" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <TbBrandCSharp />, name: "C#" },
        { icon: <FaJava />, name: "Java / Spring Boot" },
        { icon: <FaWordpress />, name: "WordPress" },
      ],
    },
    {
      name: "Bases de données",
      items: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
        { icon: <DiMsqlServer />, name: "SQL Server" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      name: "Outils & DevOps",
      items: [
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git / GitLab CI-CD" },
      ],
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
        <div className="mb-14 text-center xl:text-left">
          <h1 className="h2 mb-4">
            Mon <span className="text-accent">parcours</span>
          </h1>
          <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
            Huit ans d’expérience, cinq produits en production et une formation
            MIAGE. Le détail, onglet par onglet.
          </p>
        </div>

        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 xl:sticky xl:top-40 xl:self-start">
            <TabsTrigger value="experience">Expériences</TabsTrigger>
            <TabsTrigger value="education">Éducation</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="about">A propos de moi</TabsTrigger>
          </TabsList>

          {/*Content*/}
          <div className="min-h-[70vh] w-full">
            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{experience.title}</h2>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl leading-snug text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] shrink-0 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.details && (
                          <p className="text-sm leading-snug text-white/40 text-center lg:text-left">
                            {item.details}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*Education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{education.title}</h2>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl leading-snug text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] shrink-0 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*Skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{skills.title}</h2>
                  <p className="text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {skills.categories.map((category, categoryIndex) => {
                  return (
                    <div key={categoryIndex} className="flex flex-col gap-4">
                      <h3 className="text-sm uppercase tracking-[2px] text-accent text-center xl:text-left">
                        {category.name}
                      </h3>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {category.items.map((skill, index) => {
                          return (
                            <li
                              key={index}
                              className="h-[130px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 px-2 group"
                            >
                              <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <p className="text-sm leading-snug text-white/60 text-center">
                                {skill.name}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/*About*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h2 className="text-4xl font-bold">{about.title}</h2>
                <p className="text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0 mt-5">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`flex items-center justify-center xl:justify-start gap-4 ${
                          item.wide ? "xl:col-span-2" : ""
                        }`}
                      >
                        <span className="text-white/60 xl:whitespace-nowrap">
                          {item.fieldName}
                        </span>
                        <span className="text-xl xl:whitespace-nowrap">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <ul className="flex flex-col gap-4 max-w-[720px] mx-auto xl:mx-0">
                  {about.highlights.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-xl py-4 px-6 flex flex-col gap-1"
                      >
                        <span className="text-sm uppercase tracking-[2px] text-accent">
                          {item.label}
                        </span>
                        <p className="text-white/60 leading-snug">
                          {item.value}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-hover transition-all mx-auto xl:mx-0"
                >
                  Me contacter →
                </Link>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Propos;
