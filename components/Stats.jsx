"use client";
import React from "react";

import CountUp from "react-countup";

const stats = [
  {
    num: 8,
    text: "Années d'éxpériences",
  },
  {
    num: 5,
    text: "Projets réalisés",
  },
  {
    num: +10,
    text: "Technologies maitrisées",
  },
  {
    num: 100,
    text: "Clients satisfaits",
  },
];

const Stats = () => {
  return (
    <container className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-start
                xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </container>
  );
};

export default Stats;
