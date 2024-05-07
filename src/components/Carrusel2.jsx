import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
export const Carrusel2 = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden max-[767px]:flex slideProyect h-3/4 flex-col justify-center items-center ">
      <ul className="flex no-scrollbar  gap-4 max-[500px]:max-w-sm max-w-lg overflow-x-auto scroll-smooth snap-x ">
        <li className="flex flex-col gap-4">
          <img
            id="1"
            src="./enc2.gif"
            alt=""
            className="snap-center h-1/2 max-[500px]:max-w-sm max-w-lg rounded-md   shadow-xl"
          />
          <div>
            <p>{t("descEncriptador")}</p>
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <img
            id="8"
            src="./ari2.gif"
            alt=""
            className="snap-center h-1/2 max-[500px]:max-w-sm max-w-lg rounded-md   shadow-xl"
          />
          <div>
            <p>{t("descXray")}</p>
          </div>
        </li>
        <li className="flex flex-col gap-4">
          <img
            id="2"
            src="./atmel.png"
            alt=""
            className="rounded-md snap-center h-1/2 max-[500px]:max-w-sm max-w-lg   shadow-xl"
          />
          <div>
            <p>{t("descBateria")}</p>
          </div>
        </li>
        <li className="flex flex-col gap-4 items-center snap-center">
          <img
            id="3"
            src="./mrf.PNG"
            alt=""
            className="rounded-md  snap-center h-1/2 max-[500px]:max-w-sm max-w-lg  shadow-xl"
          />
          <div>
            <p>{t("descFrm")}</p>
          </div>
        </li>
        <li className=" flex flex-col gap-4">
          <img
            id="4"
            src="./ApiTopico.gif"
            alt=""
            className="rounded-md snap-center h-1/2 max-[500px]:max-w-sm max-w-lg  shadow-xl"
          />
          <div>
            <p>{t("DescApi")}</p>
          </div>
        </li>
        <li className=" flex flex-col gap-4">
          <img
            id="5"
            src="./sql.png"
            alt=""
            className="rounded-md snap-center h-1/2 max-[500px]:max-w-sm max-w-lg  shadow-xl"
          />
          <div>
            <p>{t("descTraductor")}</p>
          </div>
        </li>
        <li className=" flex flex-col gap-4">
          <img
            id="6"
            src="./sipa2.png"
            alt=""
            className="rounded-md snap-center h-1/2 max-[500px]:max-w-sm max-w-lg  shadow-xl"
          />
          <div>
            <p>{t("descSipae")}</p>
          </div>
        </li>
        <li className=" flex flex-col gap-4">
          <img
            id="7"
            src="./sige2.png"
            alt=""
            className="rounded-md snap-center h-1/2 max-[500px]:max-w-sm max-w-lg  shadow-xl"
          />
          <div>
            <p>{t("descSige")}</p>
          </div>
        </li>
      </ul>
      <div className="  space-x-4  flex">
        <a href="#1" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#8" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#2" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#3" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#4" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#5" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#6" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#7" className=" bg-red-600 rounded-full w-7 h-7"></a>
      </div>
    </div>
  );
};
