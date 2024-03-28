import React from "react";
import { useState } from "react";
import { TextoDescripcion } from "./TextoDescripcion";
export const MovilDescripcion = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const handleClickAbout = () => setOpenAbout(!openAbout);
  const [openAbout2, setOpenAbout2] = useState(false);
  const handleClickAbout2 = () => setOpenAbout2(!openAbout2);
  const [openAbout3, setOpenAbout3] = useState(false);
  const handleClickAbout3 = () => setOpenAbout3(!openAbout3);
  return (
    <>
      <div className="hidden max-[767px]:flex flex-col h-full w-full items-center gap-2">
        <img
          src="./f2.jpg"
          alt=""
          className=" h-[20%] md:w-[40%] lg:w-[60%] 2xl:w-[70%] mt-3 mb-3"
        />
        <div className=" text-white">
          <h1 className=" md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
            Acerca de mi
          </h1>
          <TextoDescripcion></TextoDescripcion>
        </div>
        <div className="flex flex-col text-xs gap-6 text-white">
          <div className=" w-full flex  justify-center gap-x-10 ">
            <div>
              <button className="flex items-center " onClick={handleClickAbout}>
                <img src="./escuela.ico" alt="escuela" className="h-6" />
                <h1 className="font-bold">Estudios</h1>
              </button>

              <ul
                className={`absolute divide-y-2  bg-slate-800 rounded-md transition duration-1000 ease-linear
                   ${openAbout ? "opacity-100" : "opacity-0"} `}
              >
                <li className="flex items-center ml-2">
                  <img src="./lapiz.svg" alt="empresa" className="h-6" />
                  <p className=" 2xl:text-lg text-white">
                    Universidad Politecnica de Querétaro
                  </p>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./curso.svg" alt="empresa" className="h-6" />
                  <p className="2xl:text-lg">Oracle Next Education</p>
                </li>
              </ul>
            </div>

            <div className="">
              <button
                className="flex items-center "
                onClick={handleClickAbout2}
              >
                <img src="./empresa.ico" alt="empresa" className="h-6" />
                <h1 className="font-bold">Empresas</h1>
              </button>

              <ul
                className={`absolute divide-y-2  bg-slate-800 rounded-md transition duration-500 ease-linear ${
                  openAbout2 ? "opacity-100" : "opacity-0"
                } `}
              >
                <li className="flex items-center ml-2">
                  <img src="./html.svg" alt="empresa" className="h-6" />
                  <h1 className="2xl:text-lg">SINTELTI</h1>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./xray.svg" alt="empresa" className="h-6" />
                  <h1 className="2xl:text-lg">CMR</h1>
                </li>
              </ul>
            </div>
            <div>
              <button className="flex items-center" onClick={handleClickAbout3}>
                <img src="./aptitud.ico" alt="solucion" className="h-6" />
                <h1 className="font-bold 2xl:text-3xl">Aptitudes</h1>
              </button>

              <ul
                className={`absolute divide-y-2  bg-slate-800 rounded-md transition duration-500 ease-linear ${
                  openAbout3 ? "opacity-100 " : "opacity-0 "
                } `}
              >
                <li className="flex items-center ml-2">
                  <img src="./problem.ico" alt="solucion" className="h-6" />
                  <p className="2xl:text-lg">Resolucion de problemas</p>
                </li>
                <li className="flex items-center ml-2">
                  <img
                    src="./digital.ico"
                    alt="competencias"
                    className="h-6 stroke-cyan-100"
                  />
                  <p className="2xl:text-lg">Competencias digitales</p>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./gear.ico" alt="adaptable" className="h-6" />
                  <p className="2xl:text-lg">Adaptabilidad</p>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./comu.ico" alt="comunicacion" className="h-6" />
                  <p className="2xl:text-lg">Comunicación</p>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./equipo.ico" alt="equipo" className="h-6" />
                  <p className="2xl:text-lg">Trabajo en equipo</p>
                </li>
                <li className="flex items-center ml-2">
                  <img src="./auto.ico" alt="control" className="h-6" />
                  <p className="2xl:text-lg"> Autocontrol</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white w-full p-1 flex ">
            <img
              src="./diploma.jpg"
              alt="diploma"
              className=" rounded-lg h-full  shadow-2xl shadow-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};
