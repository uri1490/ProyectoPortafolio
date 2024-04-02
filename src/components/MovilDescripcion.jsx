import React from "react";
import { ImagenesLogros } from "./ImagenesLogros";
import { TextoDescripcion } from "./TextoDescripcion";
import { CaracteristicasMovilDescripcion } from "./CaracteristicasMovilDescripcion";
export const MovilDescripcion = () => {
  return (
    <>
      <div className="hidden max-[767px]:flex flex-col h-full w-full items-center gap-2">
        <img
          src="./f2.jpg"
          alt=""
          className=" h-[20%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] "
        />
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
