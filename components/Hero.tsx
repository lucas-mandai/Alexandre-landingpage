import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import imageHero from "/public/frameTrentin.png"
import imgTrofeu from "/public/trofeu.png"

const Hero = () => {
  return (
    <div className="pb-20 pt-28">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 "
          fill="purple"
        />
        <Spotlight className="md:left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex relative my-14 z-10 justify-evenly items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[45vw] flex flex-col ">
          <div className="flex items-center gap-3">
            <p className="uppercase tracking-widest text-blue-100">
              Seu sucesso é a minha maior recompensa
            </p>
            <Image src={imgTrofeu} alt="trofeu" height={30}></Image>
          </div>




          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Potencialize seu negócio com tráfego qualificado"
            className="text-[30px] md:text-5xl lg:text-5xl"
          />
          <div className=" flex md:hidden items-center text-right gap-4">
            <div className="flex-1">
              <Image src={imageHero} alt="Alexandre imagem" height={330} ></Image>
            </div>
            <p className="md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl flex-1">
              Olá! sou Alexandre Trentin, entenda um pouco mais sobre como minha experiência no mundo digital pode alavancar o seu negócio.
            </p>
          </div>

          <p className="hidden md:flex md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl flex-1 md:max-w-3xl">
            Olá! sou Alexandre Trentin, entenda um pouco mais sobre como minha experiência no mundo digital pode alavancar o seu negócio.
          </p>

          <div className="pt-6">
            <a href="#about">
              <MagicButton
                title="Saiba mais"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

        </div>

        <div className="hidden md:flex">
          <Image src={imageHero} alt="Alexandre imagem" height={420}></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
