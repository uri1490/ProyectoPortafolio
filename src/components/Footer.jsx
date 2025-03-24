import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserAstronaut, FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
export const Footer = () => {
  // <div className="bg-yellow-300 h-[5vh] sticky bottom-0">Footer</div>;
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const cambiarIdioma = (leng) => {
    console.log(leng);
    i18n.changeLanguage(leng);
  };
  return (
    <div className="flex-wrap md:flex md:justify-between md:items-center  bg-slate-900">
      <h1 className=" text-lg font-light text-cyan-300 text-center">
        <b>&#129299;{t("Portafolio")} </b>
      </h1>
      <div className="flex flex-col text-white text-center text-sm">
        <span>© 2024 {t("FooterText")}.</span>
        <span>"{t("FooterFrase")}"</span>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://github.com/uri1490" target="_blank">
          <FaGithub className="w-6 h-10 cursor-pointer trasition linear duration-500 hover:fill-teal-300"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/jose-uriel-isc" target="_blank">
          <TiSocialLinkedinCircular className="h-8 w-9 cursor-pointer trasition linear duration-500 hover:fill-teal-300"></TiSocialLinkedinCircular>
        </a>
      </div>
    </div>
  );
};
