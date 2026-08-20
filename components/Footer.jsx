import React from "react";
import Link from "next/link";

import Social from "@/components/Social";

const EMAIL = "monelcocou@gmail.com";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/*Identité*/}
        <div className="text-center md:text-left">
          <Link href="/">
            <span className="text-2xl font-semibold text-white">
              Monel<span className="text-accent">.</span>
            </span>
          </Link>
          <p className="text-white/60 leading-normal">
            Développeur Full-Stack — Rennes
          </p>
        </div>

        {/*Contact*/}
        <a
          href={`mailto:${EMAIL}`}
          className="text-white/60 hover:text-accent transition-all"
        >
          {EMAIL}
        </a>

        {/*Réseaux*/}
        <Social
          containerStyles="flex gap-4"
          iconStyles="w-9 h-9 border border-accent/40 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
        />
      </div>

      <div className="container mx-auto mt-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Monel Cocou GAFFAN
      </div>
    </footer>
  );
};

export default Footer;
