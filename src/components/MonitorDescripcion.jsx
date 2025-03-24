import React from "react";
import { FaTrophy, FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiDiploma, GiTeacher, GiSkills } from "react-icons/gi";
import { ListaIconosCarrusel } from "./ListaIconosCarrusel";
import { TextoDescripcion } from "./TextoDescripcion";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
export const MonitorDescripcion = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden md:flex flex-col   ">
        <div className="w-full h-full  flex gap-2">
          <div className="flex flex-col  items-center md:w-[20%] lg:w-[25%] 2xl:w-[25%]   p-1 gap-2 bg-slate-900 rounded-md">
            <div className=" flex justify-center  w-full  flex-col gap-3">
              <img
                src="./perfil3.PNG"
                alt=""
                className=" object-contain rounded-md h-3/4"
              />
              <h1 className="border-t-2 border-b-2 font-semibold text-xl 2xl:text-lg text-[#14FFEC] text-center">
                Ing.José Uriel Reyes Vargas
              </h1>
            </div>
            <div className="flex h-[70%] text-xs  text-white">
              <div className=" w-full flex flex-col place-content-around">
                <div>
                  <div className="flex items-center">
                    <FaGraduationCap className="h-5 w-5 fill-[#14FFEC]" />
                    <h1 className="font-light text-xl 2xl:text-lg text-[#14FFEC]">
                      <b>{t("Formacion")}</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
                    <li className="flex items-center ml-2 ">
                      <VscDebugBreakpointData />
                      <p className=" 2xl:text-lg ">
                        Universidad Politecnica de Querétaro
                      </p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">Oracle Next Education</p>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <div className="flex items-center">
                    <FaTools className="h-6 w-5 fill-[#14FFEC]" />
                    <h1 className="font-light text-xl 2xl:text-lg text-[#14FFEC]">
                      <b>{t("Experiencia")}</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <h1 className="2xl:text-lg">SINTELTI | 1 {t("Year")}</h1>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <h1 className="2xl:text-lg">CMR | 5 {t("Years")}</h1>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center">
                    <GiSkills
                      src="./aptitud.ico"
                      alt="solucion"
                      className="h-6 w-6 fill-[#14FFEC]"
                    />
                    <h1 className="font-light text-xl 2xl:text-lg text-[#14FFEC]">
                      <b>{t("Aptitudes")}</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Resolucion")}</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Competencias")}</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Adaptabilidad")}</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Comunicacion")}</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Trabajo")}</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">{t("Autocontrol")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[80%] lg:w-[75%] 2xl:w-full  gap-2 bg-slate-950 ">
            <div className="p-2  text-white  bg-black bg-contain rounded-md">
              <h1 className=" md:text-[20px] lg:text-2xl  text-yellow-500 font-mono">
                <b>{t("Aboutme")}</b>
              </h1>
              <TextoDescripcion></TextoDescripcion>
            </div>
            <div className=" relative min-[1500px]:h-[60%]   grid grid-cols-9 grid-rows-8 bg-fondoCard-pen2 bg-cover rounded-md place-content-between">
              <div className="text-center col-span-9 row-span-1 col-start-1 row-start-1 md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
                {t("Logros")}
              </div>
              <div className="hoverMedalla col-start-1 row-start-3 col-span-2 flex justify-center ">
                <GiTeacher className="  fill-[#14FFEC] h-11 w-11  "></GiTeacher>
              </div>
              <div className="hoverDiploma col-start-1 row-start-4 col-span-2 flex justify-center ">
                <GiDiploma className=" fill-[#14FFEC] h-11 w-11 "></GiDiploma>
              </div>
              <div className=" hoverTrofeo col-start-1 row-start-5 col-span-2 flex justify-center ">
                <FaTrophy className=" fill-[#14FFEC] h-11 w-11 "></FaTrophy>
              </div>
              <div className="hoverCedula contenedorP   col-start-3 row-start-2 col-span-7 row-span-5 flex justify-center md:items-center lg:items-center gap-10">
                <div className="h-full flex justify-center flex-col gap-2">
                  <h1 className="text-white">{t("Cedula")}</h1>
                  <hr />
                  <p className="text-sm font-semibold text-white bg-black/60 rounded-md">
                    {t("CedulaTexto")}
                  </p>
                </div>

                <img
                  src="./titulo2.png"
                  alt="titulo"
                  className="titulo h-3/4 w-3/4 md:h-[40%] md:w-[40%] lg:w-1/2 lg:h-1/2 xl:h-3/4 xl:w-[60%]"
                />
              </div>
              <div className="contenedorMedalla relative col-start-3 row-start-2 col-span-7 row-span-5 flex justify-center gap-10">
                <div className="h-full flex justify-center flex-col gap-2">
                  <h1 className="text-white">{t("Instructor")}</h1>
                  <hr />
                  <p className="text-sm font-semibold text-white bg-black/60 rounded-md">
                    {t("InstructorTexto")}
                  </p>
                </div>
                <img
                  src="./diploma.jpg"
                  alt="diploma"
                  className="diploma  h-full w-3/5"
                />
              </div>
              <div className="contenedorDiploma relative  col-start-3 row-start-2 col-span-7 row-span-5 flex justify-center gap-10">
                <div className="h-full flex justify-center flex-col gap-2">
                  <h1 className="text-white">{t("Insignia")}</h1>
                  <hr />
                  <p className="text-sm font-semibold text-white bg-black/60 rounded-md">
                    {t("InsigniaTexto")}
                  </p>
                </div>
                <img
                  src="./challenge1.png"
                  alt="encriptador"
                  className="medalla h-full"
                />
              </div>
              <div className="contenedorTrofeo    col-start-3 row-start-2 col-span-7 row-span-5 flex justify-center gap-10">
                <div className=" h-full flex justify-center flex-col gap-2">
                  <h1 className="text-white">{t("Reconocimiento")}</h1>
                  <hr />
                  <p className="text-sm font-semibold text-white bg-black/60 rounded-md">
                    {t("ReconocimientoTexto")}
                  </p>
                </div>
                <img src="./oscar.PNG" alt="oscar" className="trofeo   w-1/4" />
              </div>
              <div className="  col-span-9 row-span-2 row-start-7  rounded-md">
                <div className="w-full h-[30%] flex items-center justify-center">
                  <h1 className="md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
                    Tech stack
                  </h1>
                </div>
                <div className="flex h-[70%] w-full  gap-96 space-x-56 overflow-hidden ">
                  <ListaIconosCarrusel />
                  <ListaIconosCarrusel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
