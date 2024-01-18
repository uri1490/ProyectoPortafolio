import React from "react";
import { FaUserAstronaut } from "react-icons/fa6";
export const Credencial = () => {
  return (
    <>
      <div
        id="tarjeta"
        className="bg-hero-pattern flex flex-col-reverse w-3/4 h-4/5  md:w-1/2 rounded-2xl md:flex-row md:h-[50%] overflow-hidden"
      >
        <div
          id="descripcion"
          className="flex flex-col   justify-between md:justify-around h-4/6 md:h-full md:w-9/12"
        >
          <div>
            <span className="flex justify-center">Hola, Soy</span>
            <span className="flex justify-center text-[3rem] text-cyan-500">
              Uriel RV
            </span>
            <span className="flex justify-center">Soy Desarrollador Web</span>
          </div>

          <div className="flex flex-row justify-center space-x-6 p-1">
            <img src="./code.png" alt="code" className="w-10 h-10" />
            <img src="./linkedin.png" alt="link" className="w-10 h-10" />
          </div>
        </div>
        <div
          id="foto"
          className=" flex justify-center  items-center w-full h-1/3 md:w-1/4 md:h-full"
        >
          <div className=" w-32 h-32 rounded-2xl border-solid border-2 border-indigo-600 overflow-hidden">
            <FaUserAstronaut className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
