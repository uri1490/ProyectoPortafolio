import React from "react";
import { ImagenesLogros } from "./ImagenesLogros";
import { TextoDescripcion } from "./TextoDescripcion";
import { CaracteristicasMovilDescripcion } from "./CaracteristicasMovilDescripcion";
import { useTranslation } from "react-i18next";
export const MovilDescripcion = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden max-[767px]:flex flex-col h-full w-full items-center gap-2">
        <div className="relative w-full  flex justify-center">
          <div className="absolute bg-fondoCard-wave bg-cover  w-full h-1/2 -z-1"></div>
          <img
            src="./perfil3.PNG"
            alt=""
            className="z-10  sm:h-full w-[30%] sm:w-[40%] md:w-[50%] lg:w-[60%] 2xl:w-[70%] "
          />
        </div>
        <h1 className="border-t-2 border-b-2 font-semibold text-xl 2xl:text-lg text-[#14FFEC] text-center">
          Ing.José Uriel Reyes Vargas
        </h1>
        <div className=" text-white bg-slate-950 rounded-md p-1">
          <h1 className=" md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
            {t("About")}
          </h1>
          <TextoDescripcion></TextoDescripcion>
        </div>
        <div className="flex flex-col items-center w-full   gap-6 text-white">
          <CaracteristicasMovilDescripcion />
          <h1 className="md:text-[20px] lg:text-3xl text-yellow-500 font-semibold">
            {t("Logros")}
          </h1>
          <ImagenesLogros />
        </div>
      </div>
    </>
  );
};
