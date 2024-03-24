import React from "react";
import { FaTrophy, FaGraduationCap } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiDiploma, GiTeacher, GiSkills } from "react-icons/gi";

export const MonitorDescripcion = () => {
  return (
    <>
      <div className="hidden md:flex flex-col h-full border border-solid border-red-600 ">
        <div className="w-full h-full  flex">
          <div className="flex flex-col md:w-[20%] lg:w-[25%] 2xl:w-[30%] justify-center items-center border border-solid border-red-600  ">
            <img
              src="./f2.jpg"
              alt=""
              className=" h-[40%] md:w-[65%] lg:w-[60%] 2xl:w-[70%] mt-3 mb-3"
            />
            <div className="flex h-[60%] text-xs  text-white">
              <div className=" w-full">
                <div className="flex items-center">
                  <FaGraduationCap className="h-5 w-5 fill-[#14FFEC]" />
                  <h1 className="font-light text-xl 2xl:text-3xl text-[#14FFEC]">
                    <b>Estudios</b>
                  </h1>
                </div>

                <ul className="ml-2">
                  <li className="flex items-center ml-2 ">
                    <img src="./lapiz.svg" alt="empresa" className="h-6" />
                    <p className=" 2xl:text-lg ">
                      Universidad Politecnica de Querétaro
                    </p>
                  </li>
                  <li className="flex items-center ml-2">
                    <img src="./curso.svg" alt="empresa" className="h-6" />
                    <p className="2xl:text-lg">Oracle Next Education</p>
                  </li>
                </ul>
                <div className="">
                  <div className="flex items-center">
                    <FaTools className="h-6 w-5 fill-[#14FFEC]" />
                    <h1 className="font-light text-xl 2xl:text-3xl text-[#14FFEC]">
                      <b>Empresas</b>
                    </h1>
                  </div>

                  <ul className="ml-2">
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
                <div className="flex items-center">
                  <GiSkills
                    src="./aptitud.ico"
                    alt="solucion"
                    className="h-6 w-6 fill-[#14FFEC]"
                  />
                  <h1 className="font-light text-xl 2xl:text-3xl text-[#14FFEC]">
                    <b>Aptitudes</b>
                  </h1>
                </div>

                <ul className="ml-2">
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
          </div>

          <div className="flex flex-col md:w-[80%] lg:w-[75%] 2xl:w-[70%] border border-solid border-red-600  gap-2 ">
            <div className="min-[1500px]:h-[40%] h-[30%] text-white">
              <h1 className=" md:text-[20px] lg:text-3xl  text-yellow-500 font-mono">
                <b>Acerca de mi</b>
              </h1>
              <p className="md:text-[13px] lg:text-xs xl:text-xs 2xl:text-base font-mono">
                Cuento con un titulo como Ingeniero en sistemas Computacionales,
                como introducción al mundo laboral comencé realizando practicas
                profesionales dentro de mi universidad creando un repositorio
                para el control de documentación. Trabaje como desarrollador
                front-end en una consultoría, al principio fue para realizar mi
                estadía profesional y después me reclutaron para trabajar de
                tiempo completo. Posteriormente trabaje en una compañía dedicada
                a la distribución de equipo radiológico en la cual desempeñe
                diversas labores tales como programar, documentar, revisar
                equipos de rayos x, testear software, impartir cursos de los
                equipos de rayos x, etc. Dentro de los lenguajes y tecnologías
                con los cuales tuve la oportunidad de trabajar son: angular,
                typscript, javascript, bootstrap, HTML, CSS, SQL, MySQL, PHP,
                Java, C#, C++, Git, Tortoise SVN, Jira.
              </p>
            </div>
            <div className=" relative min-[1500px]:h-[60%] h-[70%]  grid grid-cols-9 grid-rows-8 gap-1">
              <div className="text-center col-span-9 row-span-1 col-start-1 row-start-1 md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
                Logros
              </div>
              <div className="contDiploma relative flex items-center justify-center  col-span-3 row-span-4 p-1    rounded-lg overflow-hidden">
                <div className="test3 h-[150%] w-[30rem] rounded-full absolute"></div>
                <div className=" bg-black w-full h-full z-10  flex flex-col items-center p-2 gap-2  rounded-lg">
                  <GiTeacher className="h-7 w-7  rounded-md fill-[#14FFEC]" />
                  <p className="text-sm text-white">
                    Participe como instructor en el uso de equipo radiologico y
                    el software de adquisición de imagenes de rayos x en CMR.
                  </p>
                </div>
              </div>
              <div className="logros1 flex absolute mt-16 ml-40 rounded-lg h-1/2 w-1/2 bg-white shadow-2xl shadow-black p-2">
                <img
                  src="./diploma.jpg"
                  alt="diploma"
                  className=" rounded-lg h-full w-full shadow-2xl shadow-black"
                />
              </div>
              <div className="contChalleng relative flex items-center justify-center  z-10 col-span-3 row-span-4 p-1   rounded-lg overflow-hidden">
                <div className="test3 h-[150%] w-[30rem] rounded-full absolute"></div>
                <div className="bg-black z-10 w-full h-full flex flex-col items-center p-2 gap-2  rounded-lg">
                  <GiDiploma className="fill-[#14FFEC] h-7 w-7" />
                  <p className="text-sm text-white">
                    Participe en un bootcamp de programacion en el cual se te
                    otorgaban insignias por terminar los desafios que se
                    presentaban al termino de un curso, uno de ellos fue
                    Springboot y el otro fue con html, css y javascript.
                  </p>
                </div>
              </div>
              <div className="logros2 flex mt-16 2xl:ml-32 ml-40 absolute gap-1 h-1/2 2xl:w-3/5 w-1/2 bg-white rounded-lg shadow-2xl shadow-black p-2 ">
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
              <div className="contPremio relative flex items-center justify-center col-span-3 row-span-4 p-1   rounded-lg overflow-hidden">
                <div className="test3 h-[150%] w-[30rem] rounded-full absolute"></div>
                <div className="bg-black  z-10 rounded-lg flex flex-col items-center  p-2 gap-2 w-full h-full">
                  {/* <img
                    src="./trofeo.svg"
                    alt="oscar"
                    className="h-9 fill-red-500"
                  /> */}
                  <FaTrophy className="fill-[#14FFEC] h-7 w-7" />
                  <p className=" text-sm  text-white">
                    Durante mi estancia en CMR se me otorgo un reconocimiento
                    por el cumplimiento de mis labores.
                  </p>
                </div>
              </div>
              <div className=" logros3 rounded-lg 2xl:mx-48 mx-56 my-16 absolute h-1/2 w-2/5 p-2 bg-white">
                <img
                  src="./oscar.webp"
                  alt="oscar"
                  className="rounded-lg h-full w-full shadow-2xl shadow-black object-fill  "
                />
              </div>
              <div className="  col-span-9 row-span-3 ">
                <div className="w-full h-[30%] flex items-center justify-center">
                  <h1 className="md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
                    Tech stack
                  </h1>
                </div>
                <div className="flex h-[70%] w-full  gap-96 space-x-56 overflow-hidden ">
                  <div className="flex justify-start items-center  w-full gap-2 animate-infinite-scroll">
                    <img src="./git.ico" alt="git" className="h-8" />
                    <img src="./lab.ico" alt="gitlab" className="h-8" />
                    <img src="./tor.ico" alt="tortoise" className="h-8" />
                    <img src="./sharp.ico" alt="csharp" className="h-8" />
                    <img src="./java.ico" alt="java" className="h-8" />
                    <img src="./mysql.ico" alt="mysql" className="h-8" />
                    <img src="./js.ico" alt="js" className="h-8" />
                    <img src="./css.ico" alt="css" className="h-8" />
                    <img src="./ts.svg" alt="typescript" className="h-8" />
                    <img src="./ang.svg" alt="angular" className="h-8" />
                    <img src="./sql.svg" alt="sql" className="h-8" />
                    <img src="./tw.svg" alt="tailwind" className="h-8" />
                    <img src="./rea.svg" alt="react" className="h-8" />
                    <img src="./spri.svg" alt="spring" className="h-8" />
                    <img src="./html.ico" alt="oscar" className="h-8" />
                    <img src="./boot.ico" alt="oscar" className="h-8" />
                  </div>
                  <div className="flex justify-start items-center  w-full gap-2 animate-infinite-scroll">
                    <img src="./git.ico" alt="git" className="h-8" />
                    <img src="./lab.ico" alt="gitlab" className="h-8" />
                    <img src="./tor.ico" alt="tortoise" className="h-8" />
                    <img src="./sharp.ico" alt="csharp" className="h-8" />
                    <img src="./java.ico" alt="java" className="h-8" />
                    <img src="./mysql.ico" alt="mysql" className="h-8" />
                    <img src="./js.ico" alt="js" className="h-8" />
                    <img src="./css.ico" alt="css" className="h-8" />
                    <img src="./ts.svg" alt="typescript" className="h-8" />
                    <img src="./ang.svg" alt="angular" className="h-8" />
                    <img src="./sql.svg" alt="sql" className="h-8" />
                    <img src="./tw.svg" alt="tailwind" className="h-8" />
                    <img src="./rea.svg" alt="react" className="h-8" />
                    <img src="./spri.svg" alt="spring" className="h-8" />
                    <img src="./html.ico" alt="oscar" className="h-8" />
                    <img src="./boot.ico" alt="oscar" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
