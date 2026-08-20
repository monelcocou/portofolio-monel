import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/monelcocou", label: "Github" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/monel-cocou-gaffan-a0abb716b/",
    label: "LinkedIn",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
