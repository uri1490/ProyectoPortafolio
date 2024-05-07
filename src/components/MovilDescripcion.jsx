import React from "react";
import { ImagenesLogros } from "./ImagenesLogros";
import { TextoDescripcion } from "./TextoDescripcion";
import { CaracteristicasMovilDescripcion } from "./CaracteristicasMovilDescripcion";
export const MovilDescripcion = () => {
  return (
    <>
      <div className="hidden max-[767px]:flex flex-col h-full w-full items-center gap-2">
        <img
          src="./perfil3.PNG"
          alt=""
          className=" sm:h-[20%] w-[30%] sm:w-[40%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] "
        />
        <h1 className="border-t-2 border-b-2 font-semibold text-xl 2xl:text-lg text-[#14FFEC] text-center">
          Ing.José Uriel Reyes Vargas
        </h1>
        <div className=" text-white ">
          <h1 className=" md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
            Acerca de mi
          </h1>
          <TextoDescripcion></TextoDescripcion>
        </div>
        <div className="flex flex-col items-center h-80 w-full  text-xs gap-6 text-white">
          <CaracteristicasMovilDescripcion />
          <ImagenesLogros />
        </div>
      </div>
    </>
  );
};
