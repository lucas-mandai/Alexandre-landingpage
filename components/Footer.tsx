import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid 
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
*/}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Preparado para elevar<span className="text-purple"> sua</span> presença digital para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo agora mesmo e vamos conversar sobre como posso te ajudar alcançar seus objetivos
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <hr className="mt-5" />
      <div className="flex flex-col md:flex-row justify-between items-center text-center flex-wrap gap-4 py-10">
        <div className="flex-1">
          <h1 className="font-bold text-purple">Sobre nós</h1> 
          <p>Estamos no mercado há mais de 5 anos e temos a satisfação do cliente como nossa principal prioridade.</p>
        </div>
        <div className="flex-1 ">
          <h1 className="font-bold text-purple">Endereço</h1>
          <p>Avenida Arquiteto Luis Saia, 610</p>
          <p>Vila Irmãos Andrade - Lins - SP</p>
          <p>CEP: 16400-748</p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-purple">Contato</h1>
          <p>contato@brasmova.com</p>
        </div>
      </div>
      <div className="text-center">
        Copyright Brasmova Comércio e Empreendimentos Digitais LTDA - 35973641000107 - 2024. Todos os direitos reservados.
      </div>

      {/* <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Brasmova LTDA
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
