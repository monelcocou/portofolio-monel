"use client";
import React from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const expertises = [
  {
    num: "01",
    title: "Applications métier",
    description:
      "Des logiciels de gestion conçus en C# et SQL Server, en production depuis 2019 : Medica équipe aujourd’hui 70 cliniques, Cica Laboratoire et Cica Facturation leurs laboratoires et cabinets.",
    href: "/realisations",
  },
  {
    num: "02",
    title: "Plateformes SaaS",
    description:
      "Conception d’applications multi-utilisateurs de bout en bout, en Next.js / NestJS / PostgreSQL ou en Laravel / Symfony. Medivio, plateforme de médecine du travail, en est le dernier exemple.",
    href: "/realisations",
  },
  {
    num: "03",
    title: "API & back-end",
    description:
      "Modélisation des données, API REST, authentification JWT et OAuth2, documentation. Avec NestJS, API Platform ou Spring Boot selon le contexte du projet.",
    href: "/realisations",
  },
  {
    num: "04",
    title: "Déploiement & CI/CD",
    description:
      "Conteneurisation Docker, pipelines GitLab CI/CD, mise en production et suivi. Livrer le code n’a jamais été la fin du projet.",
    href: "/realisations",
  },
  {
    num: "05",
    title: "Analyse & cadrage",
    description:
      "Recueil du besoin auprès des utilisateurs métier, modélisation, arbitrages fonctionnels. C’est le cœur de ma formation, et cinq ans de relation client directe.",
    href: "/realisations",
  },
  {
    num: "06",
    title: "Support & évolution",
    description:
      "Cinq ans à maintenir mes propres produits chez des clients actifs : corrections, montées de version, reprises de données et formation des utilisateurs.",
    href: "/realisations",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 2.4, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div className="container mx-auto">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-14 text-center xl:text-left"
          >
            <h1 className="h2 mb-4">
              Mon <span className="text-accent">expertise</span>
            </h1>
            <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
              Ce que je sais faire, et où je l’ai prouvé. Chaque domaine
              ci-dessous s’appuie sur des produits en production, pas sur des
              projets d’école.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {expertises.map((expertise, index) => {
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/*Top*/}
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                  transition-all duration-500"
                    >
                      {expertise.num}
                    </div>
                    <Link
                      href={expertise.href}
                      aria-label={`Voir les réalisations liées à : ${expertise.title}`}
                      className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-2xl" />
                    </Link>
                  </div>

                  {/*Title*/}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {expertise.title}
                  </h2>

                  {/*description*/}
                  <p className="text-white/60">{expertise.description}</p>

                  {/*border*/}
                  <div className="border-b border-white/20 w-full"></div>
                </motion.div>
              );
            })}
          </div>

          {/*CTA*/}
          <motion.div
            variants={item}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <p className="text-white/60 text-center sm:text-left">
              Un projet, un poste ou une question ?
            </p>
            <Link
              href="/contact"
              className="h-[48px] px-8 rounded-full bg-accent text-primary font-semibold flex items-center hover:bg-accent-hover transition-all"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
