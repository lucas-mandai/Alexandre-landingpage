import { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full md:pt-20 pb-10" id="contact">
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
        <a href="https://wa.me/5514997638316">
          <MagicButton
            title="Entre em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <hr className="mt-5" />
      <div className="flex flex-col md:flex-row justify-between items-center text-center flex-wrap gap-4 py-10">
        <div className="flex-1">
          <h1 className="font-bold text-purple">Sobre mim</h1> 
          <p>No mercado há mais de 6 anos ajudando pessoas a baterem recorde de faturamento.</p>
        </div>
        
        <div className="flex-1">
          <h1 className="font-bold text-purple">Contato</h1>
          <p>contato@alexandretrentin.com.br</p>
          <p>(14) 99763-8316</p>
        </div>
        <div className="flex-1 ">
          {/* <h1 className="font-bold text-purple">Endereço</h1>
          <p>Avenida Arquiteto Luis Saia, 610</p>
          <p>Vila Irmãos Andrade - Lins - SP</p>
          <p>CEP: 16400-748</p> */}
          <h1 className="font-bold text-purple">Siga nas redes</h1>
          <div className="flex justify-center gap-5 pt-2">
            <a href="https://www.instagram.com/alexandretrentinn">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563936280667">
              <FaFacebook size={24} />
           </a>
          </div>
          
        </div>
      </div>
      <div className="text-center text-xs">
        Copyright GOLD INVESTIMENTOS E CONSULTORIA LTDA - 57.443.093/0001-46 - 2024. Todos os direitos reservados.
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
