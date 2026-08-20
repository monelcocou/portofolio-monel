import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";

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
            <span className="text-xl">Développeur Full-Stack</span>
            <h1 className="h1 mb-6">
              Hi, je suis
              <br /> <span className="text-accent">Monel GAFFAN</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Pendant cinq ans, j&apos;ai construit et vendu mes propres
              logiciels de gestion médicale, aujourd&apos;hui utilisés par plus
              de 70 cliniques, laboratoires et cabinets. Je suis désormais en
              Master 2 MIAGE à l&apos;Université de Rennes, en alternance chez
              Samsic, avec l&apos;habitude de penser un produit autant que son
              code.
            </p>

            {/*Button and social*/}
            <div className="flex flex-col items-center xl:items-start gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/realisations">
                  <Button
                      size="lg"
                      className="uppercase flex items-center gap-2"
                  >
                    <span>Mes réalisations</span>
                    <FiArrowRight className="text-xl"/>
                  </Button>
                </Link>

                <a href="/assets/Monel-CV.pdf" download="Monel-CV.pdf">
                  <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-2"
                  >
                    <span>Télécharger CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                </a>
              </div>

              <div className="mb-8 xl:mb-0">
                <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
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
