"use client";
import React from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Developement",
    description:
      "Création de plateformes web performantes et évolutives avec Laravel, Symfony, ReactJS, Next.js et NestJS.",
    href: "",
  },
  {
    num: "02",
    title: "Applications Desktop",
    description:
      "Conception d’applications Windows robustes avec C# et SQL Server, adaptées aux besoins métiers des PME.",
    href: "",
  },
  {
    num: "03",
    title: "Solutions SaaS",
    description:
        "Développement de logiciels SaaS clés en main pour digitaliser les processus métiers.",
    href: "",
  },
  {
    num: "04",
    title: "Gestion de projet",
    description:
      "Prise en charge du cycle complet d’un projet, de l’expression des besoins au déploiement final.",
    href: "",
  },
  {
    num: "05",
    title: "Formations",
    description:
        "Sessions de formation pour assurer une prise en main rapide et une adoption réussie des outils développés.",
    href: "",
  },
  {
    num: "06",
    title: "Maintenance et support",
    description:
        "Suivi post-livraison, correction de bugs, ajout de nouvelles fonctionnalités, et assistance continue.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*Top*/}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                  transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>

                {/*Title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/*description*/}
                <p className="text-white/60">{service.description}</p>

                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
