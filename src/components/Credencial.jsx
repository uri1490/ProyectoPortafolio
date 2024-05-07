import React from "react";
import { FaUserAstronaut, FaGithub } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { SiLinkedin } from "react-icons/si";
import { ListaIconos } from "./ListaIconos";
export const Credencial = () => {
  // divide-x-1 border-r-4 border-r-green-500 border-b-4
  const { t } = useTranslation();
  return (
    <>
      <div
        id="tarjeta"
        className="relative h-full w-full flex justify-center items-center flex-col gap-3"
      >
        <div className="absolute max-[767px]:space-x-1 sm:space-x-2 md:space-x-4 flex h-full w-full  items-end justify-center">
          <ListaIconos></ListaIconos>
        </div>
        <div className="z-20 flex md:items-center  max-[767px]:flex-col-reverse max-[767px]:h-[80%] h-[65%] max-[767px]:w-full w-full ">
          <div className="md:w-[50%] w-full   max-[767px]:h-[60%] flex flex-col gap-6 max-[767px]:justify-start justify-end items-center max-[767px]:items-center">
            <h1 className="text-[#212121] 2xl:text-7xl text-5xl w-[70%] font-mono max-[767px]:text-center">
              <b className="">{t("Saludo")},</b>
            </h1>
            <p className="text-[#212121] flex text-left w-[70%] font-mono items-end gap-4 text-5xl 2xl:text-7xl max-[767px]:text-center">
              <b>{t("Sujeto")}</b>
              <span className="">
                <b className="2xl:text-7xl text-5xl text-yellow-300 neon">
                  Uriel
                </b>
                ,
              </span>
            </p>
            <p className="text-[#212121] 2xl:text-6xl text-4xl font-mono text-left w-[70%] max-[767px]:text-center">
              <b>{t("Oficio")} web</b>
              <span className="animateGradient">
                <b> Front-End</b>
              </span>
            </p>
            <div className="flex w-[70%]  gap-10 max-[767px]:justify-center items-center ">
              <FaGithub className="w-6 h-10 cursor-pointer trasition linear duration-500 hover:fill-teal-300"></FaGithub>

              <TiSocialLinkedinCircular className="h-9 w-9 cursor-pointer trasition linear duration-500 hover:fill-teal-300"></TiSocialLinkedinCircular>
            </div>
          </div>

          <div className=" md:h-[70%]  h-full relative  md:w-[50%]  flex justify-center  items-center overflow-hidden ">
            <div className="absolute foto  z-10 bg-cyan-300  h-full w-[90%] rounded-md"></div>
            <img
              src="./perfil1.png"
              alt=""
              className="user object-contain max-[767px]:h-[90%] h-4/5 w-4/5 z-20 mb-5"
            />
          </div>
        </div>
        <div className="z-10  flex max-[767px]:h-[20%] md:w-full w-full max-[767px]:justify-start  items-center ">
          <a
            href="./certificado.pdf"
            // download={"../..public/certificado.pdf"}
            target="_blank"
          >
            <button className=" flex max-[767px]:h-16 max-[767px]:w-48 items-center ml-20 py-1 px-4 h-12  bg-[#212121] hover:border border-[#14FFEC] rounded-lg space-x-3 shadow-md transition duration-300 ease-linear hover:text-[#14FFEC]  hover:shadow-[0px_1px_7px_5px_#14FFEC] ">
              <FaFileDownload className="fill-[#14FFEC] h-12 animate-bounce" />
              <span className="text-white max-[767px]:text-xl  ">
                {t("Descargar")} CV
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
