import React from "react";
import { FaTrophy, FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiDiploma, GiTeacher, GiSkills } from "react-icons/gi";
import { ListaIconosCarrusel } from "./ListaIconosCarrusel";
import { TextoDescripcion } from "./TextoDescripcion";
import { VscDebugBreakpointData } from "react-icons/vsc";
export const MonitorDescripcion = () => {
  return (
    <>
      <div className="hidden md:flex flex-col   ">
        <div className="w-full h-full  flex gap-2">
          <div className="flex flex-col  items-center md:w-[20%] lg:w-[25%] 2xl:w-[25%]   p-1 gap-2 bg-slate-950 rounded-md">
            <div className=" flex justify-center h-[30%] ">
              <img
                src="./f2.jpg"
                alt=""
                className=" object-cover rounded-md h-full w-full"
              />
            </div>
            <div className="flex h-[70%] text-xs  text-white">
              <div className=" w-full flex flex-col place-content-evenly">
                <div>
                  <div className="flex items-center">
                    <FaGraduationCap className="h-5 w-5 fill-[#14FFEC]" />
                    <h1 className="font-light text-xl 2xl:text-lg text-[#14FFEC]">
                      <b>FORMACIÓN ACADÉMICA</b>
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
                      <b>EXPERIENCIA LABORAL</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <h1 className="2xl:text-lg">SINTELTI | 1 Año</h1>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <h1 className="2xl:text-lg">CMR | 5 años</h1>
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
                      <b>APTITUDES</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
                      <p className="2xl:text-lg">Resolucion de problemas</p>
                    </li>
                    <li className="flex items-center ml-2">
                      <VscDebugBreakpointData />
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
            </div>
          </div>

          <div className="flex flex-col md:w-[80%] lg:w-[75%] 2xl:w-full  gap-2 ">
            <div className="min-[1500px]:h-[40%] h-[30%] text-white bg-slate-950 rounded-md">
              <h1 className=" md:text-[20px] lg:text-3xl  text-yellow-500 font-mono">
                <b>Acerca de mi</b>
              </h1>
              <TextoDescripcion></TextoDescripcion>
            </div>
            <div className=" relative min-[1500px]:h-[60%] h-[70%]  grid grid-cols-9 grid-rows-8 gap-1">
              <div className="text-center col-span-9 row-span-1 col-start-1 row-start-1 md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
                Logros
              </div>
              <div className="contDiploma relative flex items-center justify-center  col-span-3 row-span-3 p-1    rounded-lg overflow-hidden">
                <div className="test3 h-[200%] w-[200%] rounded-full absolute"></div>
                <div className=" bg-fondoCard-enc bg-contain  w-full h-full z-10  flex flex-col items-center p-2 gap-2  rounded-lg">
                  <GiTeacher className="h-11 w-11  rounded-md fill-[#14FFEC]" />
                  <p className="text-sm font-semibold h-full text-white bg-black/60 rounded-md">
                    Participe como instructor en el uso de equipo radiologico y
                    el software de adquisición de imagenes de rayos x en CMR.
                  </p>
                </div>
              </div>
              <div className="logros1 flex absolute mt-32 ml-40 rounded-lg h-1/2 w-1/2 bg-white shadow-2xl shadow-black p-2">
                <img
                  src="./diploma.jpg"
                  alt="diploma"
                  className=" rounded-lg h-full w-full shadow-2xl shadow-black"
                />
              </div>
              <div className="contChalleng relative flex items-center justify-center  z-10 col-span-3 row-span-3 p-1   rounded-lg overflow-hidden">
                <div className="test3 h-[200%] w-[200%] rounded-full absolute"></div>
                <div className="bg-fondoCard-enc bg-contain z-10 w-full h-full flex flex-col items-center p-2 gap-2  rounded-lg">
                  <GiDiploma className="fill-[#14FFEC] h-11 w-11" />
                  <p className="text-sm font-semibold h-full text-white bg-black/60 rounded-md">
                    Participe en un bootcamp de programacion en el cual se te
                    otorgaban insignias por terminar los desafios que se
                    presentaban al termino de un curso, uno de ellos fue
                    Springboot y el otro fue con html, css y javascript.
                  </p>
                </div>
              </div>
              <div className="logros2 flex mt-32 2xl:ml-32 ml-40 absolute gap-1 h-1/2 2xl:w-3/5 w-1/2 bg-white rounded-lg shadow-2xl shadow-black p-2 ">
                <img
                  src="./challenge3.png"
                  alt="spring"
                  className="w-1/2 h-full shadow-2xl shadow-black rounded-lg"
                />
                <img
                  src="./challenge1.png"
                  alt="encriptador"
                  className="w-1/2 h-full shadow-2xl shadow-black rounded-lg"
                />
              </div>
              <div className="contPremio relative flex items-center justify-center col-span-3 row-span-3 p-1   rounded-lg overflow-hidden">
                <div className="test3 h-[200%] w-[200%] rounded-full absolute"></div>
                <div className="bg-fondoCard-enc bg-contain z-10 rounded-lg flex flex-col items-center  p-2 gap-2 w-full h-full">
                  {/* <img
                    src="./trofeo.svg"
                    alt="oscar"
                    className="h-9 fill-red-500"
                  /> */}
                  <FaTrophy className="fill-[#14FFEC] h-11 w-11" />
                  <p className=" text-sm font-semibold h-full text-white bg-black/60 rounded-md">
                    Durante mi estancia en CMR se me otorgo un reconocimiento
                    por el cumplimiento de mis labores.
                  </p>
                </div>
              </div>
              <div className=" logros3 rounded-lg mt-32 2xl:ml-32 ml-60 absolute h-1/2 w-2/5 p-2 bg-white">
                <img
                  src="./oscar.webp"
                  alt="oscar"
                  className="rounded-lg h-full w-full shadow-2xl shadow-black object-fill  "
                />
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
