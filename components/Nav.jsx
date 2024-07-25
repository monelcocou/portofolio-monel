"use client";
import React from "react";
import Link from "next/Link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  // {
  //     name: "A Propos",
  //     path: "/propos",
  // },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Compétences",
    path: "/competences",
  },
  {
    name: "Réalisations",
    path: "/realisations",
  },
  {
    name: "Contacts",
    path: "/contacts",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} 
                             capitalize font-medium hover:text-accent transition-all `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
