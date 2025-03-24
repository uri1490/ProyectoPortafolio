import React from "react";
import { useState } from "react";
import { FaTrophy, FaGraduationCap } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiDiploma, GiTeacher, GiSkills } from "react-icons/gi";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
export const CaracteristicasMovilDescripcion = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleClickAbout = () => setOpenAbout(!openAbout);
  const [openAbout2, setOpenAbout2] = useState(false);
  const handleClickAbout2 = () => setOpenAbout2(!openAbout2);
  const [openAbout3, setOpenAbout3] = useState(false);
  const handleClickAbout3 = () => setOpenAbout3(!openAbout3);
  const { t } = useTranslation();
  return (
    <>
      <div className=" w-full flex  justify-center  bg-[#212121] rounded-md text-xs">
        <div className="">
          <button className="flex items-center p-1" onClick={handleClickAbout}>
            <FaGraduationCap className="h-6 w-5 fill-[#14FFEC]" />
            <h1 className="font-light   ">
              <b>{t("Formacion")}</b>
            </h1>
            <MdOutlineArrowDropDown className="h-8 w-8" />
          </button>

          <ul
            className={`absolute divide-y-2 p-1 mt-1 bg-[#212121] rounded-md transition duration-1000 ease-linear
                   ${openAbout ? "opacity-100" : "opacity-0"} z-10 `}
          >
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className=" 2xl:text-lg text-white ">
                Universidad Politecnica de Querétaro
              </p>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className="2xl:text-lg">Oracle Next Education</p>
            </li>
          </ul>
        </div>
        <div>
          <button className="flex items-center p-1" onClick={handleClickAbout3}>
            <GiSkills
              src="./aptitud.ico"
              alt="solucion"
              className="h-6 w-5 fill-[#14FFEC]"
            />
            <h1 className="font-light  ">
              <b>{t("APTITUDES")}</b>
            </h1>
            <MdOutlineArrowDropDown className="h-8 w-8" />
          </button>

          <ul
            className={`absolute divide-y-2  p-1 mt-1 bg-[#212121] rounded-md transition duration-500 ease-linear ${
              openAbout3 ? "opacity-100 " : "opacity-0 "
            } z-10`}
          >
            <li className="flex  ml-2">
              <VscDebugBreakpointData className="mt-1" />
              <p className="2xl:text-lg">{t("Resolucion")}</p>
            </li>
            <li className="flex  ml-2">
              <VscDebugBreakpointData className="mt-1" />
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
              <p className="2xl:text-lg"> {t("Autocontrol")}</p>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="flex items-center p-1" onClick={handleClickAbout2}>
            <FaTools className="h-6 w-5 fill-[#14FFEC]" />
            <h1 className="font-light  ">
              <b>{t("Experiencia")}</b>
            </h1>
            <MdOutlineArrowDropDown className="h-8 w-8" />
          </button>

          <ul
            className={`absolute divide-y-2 w-[30%] p-1 mt-1 bg-[#212121] rounded-md transition duration-500 ease-linear ${
              openAbout2 ? "opacity-100" : "opacity-0"
            } z-10`}
          >
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <h1 className="2xl:text-lg">SINTELTI</h1>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <h1 className="2xl:text-lg">CMR</h1>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
