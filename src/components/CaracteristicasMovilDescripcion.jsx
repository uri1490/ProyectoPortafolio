import React from "react";
import { useState } from "react";
import { FaTrophy, FaGraduationCap } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiDiploma, GiTeacher, GiSkills } from "react-icons/gi";
import { VscDebugBreakpointData } from "react-icons/vsc";
export const CaracteristicasMovilDescripcion = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleClickAbout = () => setOpenAbout(!openAbout);
  const [openAbout2, setOpenAbout2] = useState(false);
  const handleClickAbout2 = () => setOpenAbout2(!openAbout2);
  const [openAbout3, setOpenAbout3] = useState(false);
  const handleClickAbout3 = () => setOpenAbout3(!openAbout3);
  return (
    <>
      <div className=" w-full flex  justify-center gap-x-10 bg-[#212121] rounded-md ">
        <div>
          <button className="flex items-center " onClick={handleClickAbout}>
            <FaGraduationCap className="h-6 w-5 fill-[#14FFEC]" />
            <h1 className="font-light  text-[#14FFEC]">
              <b>Estudios</b>
            </h1>
            <MdOutlineArrowDropDown />
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

        <div className="">
          <button className="flex items-center " onClick={handleClickAbout2}>
            <FaTools className="h-6 w-5 fill-[#14FFEC]" />
            <h1 className="font-light  text-[#14FFEC]">
              <b>Empresas</b>
            </h1>
            <MdOutlineArrowDropDown />
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
        <div>
          <button className="flex items-center" onClick={handleClickAbout3}>
            <GiSkills
              src="./aptitud.ico"
              alt="solucion"
              className="h-6 w-5 fill-[#14FFEC]"
            />
            <h1 className="font-light  text-[#14FFEC]">
              <b>Aptitudes</b>
            </h1>
            <MdOutlineArrowDropDown />
          </button>

          <ul
            className={`absolute divide-y-2  p-1 mt-1 bg-[#212121] rounded-md transition duration-500 ease-linear ${
              openAbout3 ? "opacity-100 " : "opacity-0 "
            } z-10`}
          >
            <li className="flex  ml-2">
              <VscDebugBreakpointData className="mt-1" />
              <p className="2xl:text-lg">Resolucion de problemas</p>
            </li>
            <li className="flex  ml-2">
              <VscDebugBreakpointData className="mt-1" />
              <p className="2xl:text-lg">Competencias digitales</p>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className="2xl:text-lg">Adaptabilidad</p>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className="2xl:text-lg">Comunicación</p>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className="2xl:text-lg">Trabajo en equipo</p>
            </li>
            <li className="flex items-center ml-2">
              <VscDebugBreakpointData />
              <p className="2xl:text-lg"> Autocontrol</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
