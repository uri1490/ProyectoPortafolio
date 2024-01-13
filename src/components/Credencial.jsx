import React from "react";
import { FaUserAstronaut } from "react-icons/fa6";
export const Credencial = () => {
  return (
    <>
      <div
        id="tarjeta"
        className="bg-blue-300 flex flex-col-reverse w-1/2 rounded-2xl md:flex-row h-[50%] overflow-hidden"
      >
        <div
          id="descripcion"
          className="bg-red-600 flex flex-col justify-around md:w-9/12"
        >
          <div>
            <span className="flex justify-center">Hola, Soy</span>
            <span className="flex justify-center text-[3rem]">Uriel RV</span>
            <span className="flex justify-center">Soy Desarrollador Web</span>
          </div>

          <div className="flex flex-row justify-center space-x-6">
            <img src="./code.png" alt="code" className="w-10 h-10" />
            <img src="./linkedin.png" alt="link" className="w-10 h-10" />
          </div>
        </div>
        <div
          id="foto"
          className="bg-green-200 flex justify-center items-center w-full md:w-1/4 h-full"
        >
          <div className=" w-20 h-20 rounded-full border-solid border-2 border-indigo-600 overflow-hidden">
            <FaUserAstronaut className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};
