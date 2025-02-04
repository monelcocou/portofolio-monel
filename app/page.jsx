import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Texte*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Développeur Informatique</span>
            <h1 className="h1 mb-6">
              Hi! I&apos;m
              <br /> <span className="text-accent">Monel GAFFAN</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Développeur passionné, j’allie créativité et logique pour concevoir des solutions innovantes, alliant performance et expérience utilisateur.
            </p>

            {/*Button and social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/CV%20Monel%20GAFFAN.pdf" download="Monel-CV.pdf">
                <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                >
                  <span>Télécharger CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>


              <div className="mb-8 xl:mb-0">
                <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary
                  hover:transition-all duraion-500"
                />
              </div>
            </div>
          </div>

          {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl-mb-0">
            <Photo/>
          </div>
        </div>
      </div>

      {/*Stats*/}
      <Stats/>
    </section>
  );
};

export default Home;
