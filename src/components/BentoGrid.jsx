import React from "react";
import { useTranslation } from "react-i18next";
export const BentoGrid = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" hoverBento h-[100vh]    md:grid-rows-12  md:grid-cols-12 md:gap-1 hidden md:grid">
        <div className=" group opacidadApi fondoGradiante  contApi relative col-start-1 row-start-1 col-span-6 row-span-5  rounded-md grid grid-cols-4 grid-rows-4 overflow-hidden">
          {/* <div className="bg-api-enc absolute z-20 api w-full h-full bg-cover  bg-no-repeat "></div> */}
          <div className="bg-api-enc col-span-4 col row-span-4 m-1 rounded-md"></div>
          <div className="bg-red-500  absolute w-1/2 h-full justify-self-end p-1 rounded-md -z-0 translate-x-full  transition duration-500 ease-in-out   group-hover:translate-x-0 group-hover:z-50  group-cursor-pointer ">
            <div>
              <h1 className="text-center">Api Rest</h1>
              <hr className=" text-center" />
            </div>
            <p className="">{t("DescApi")}</p>
          </div>

          {/* <div className="bg-red-500 descripcionApi absolute w-full h-full">
            <h1 className="">Api Rest</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              voluptate assumenda, corporis enim nostrum atque impedit tenetur
              eum! Non saepe tempora dicta eum perferendis suscipit temporibus
              ipsa nesciunt quis et.
            </p>
          </div> */}
        </div>

        <div className="  fondoGradiante show border-4 border-white relative flex justify-center items-center  col-start-10 row-start-1 col-span-3 row-span-4 overflow-hidden rounded-md">
          <div className="bg-iray-enc estrella absolute w-full h-full bg-center bg-contain  bg-no-repeat"></div>
          <div className="most absolute flex w-full items-center justify-end flex-col h-full   ">
            <h1 className="tit">IRay</h1>
            <p className="tit2 text-sm text-justify">{t("descDetector")}</p>
          </div>
          {/* <div className="bg-green-950">a</div>
          <div className="bg-green-400">b</div>
          <div className="bg-green-200">c</div>
          <div className="bg-green-800">d</div> */}
        </div>
        <div className=" cont bordeGradiante col-span-3 row-span-4 col-start-1 row-start-9 rounded-md">
          <div className="mrf   w-full h-full relative rounded-md">
            <div className="bg-atmel-enc border-4  rounded-md front absolute bg-contain w-full h-full bg-center bg-no-repeat "></div>
            <div className=" back absolute w-full h-full flex flex-col items-center justify-center rounded-md back">
              <h1 className="font-bold">Medidor de voltaje</h1>
              <span>{t("descBateria")}</span>
            </div>
          </div>
        </div>
        <div className="bg-white contMRF border-4 border-white relative  flex justify-center items-center  col-start-7 row-start-1 col-span-3 row-span-4 overflow-hidden rounded-md">
          <div className="bg-mrf-enc z-10 absolute w-full h-full bg-center bg-contain bg-no-repeat "></div>
          <div className="bg-yellow-300 div2 flex flex-col items-center justify-center">
            <h1 className="descripcionMRF">MRF</h1>
            <p className="descripcionMRF  text-justify">{t("descFrm")}</p>
          </div>
        </div>

        <div className="fondoGradiante p-1 col-start-4 row-start-9 col-span-5 row-span-4 rounded-md">
          <div className="bg-ari-enc w-full h-full bg-center bg-contain  bg-no-repeat rounded-lg">
            <div className="opacity-0 transition ease-in-out duration-500 hover:opacity-100 bg-black/70 h-full flex flex-col p-1">
              <div className="glitch-wrapper ">
                <div className="glitch" data-text={t("TituloXray")}>
                  {t("TituloXray")}
                </div>
              </div>
              <div className="text-white mt-10">{t("descXray")}</div>
            </div>
          </div>
        </div>
        <div className="fondoGradiante p-1 col-start-1 row-start-6 col-span-4 row-span-3 rounded-md">
          <div className="bg-sige8-enc w-full h-full bg-center bg-cover bg-no-repeat rounded-md overflow-hidden">
            <div className="bg-green-400 h-full opacity-0 transition ease-linear duration-500 hover:rotate-[360deg] hover:opacity-100">
              <h1 className="text-center">SIGENUC</h1>
              <p>{t("descSige")}</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-4 border-white contenedorSipae relative col-start-5 row-start-6 col-span-3 row-span-3 rounded-md overflow-hidden">
          <div className="bg-yellow-400 descripcionSipae absolute flex items-center justify-center flex-col h-full w-full rounded-md">
            <h1 className="text-white font-semibold">SIPAE</h1>
            <p className="text-white">{t("descSipae")}</p>
          </div>
          <div className="bg-sipae-enc fondoSipae absolute w-full h-full bg-center bg-contain bg-no-repeat "></div>
        </div>
        <div className="cardGlass bg-white border-4 border-white relative col-start-9 row-start-9 col-span-4 row-span-4 overflow-hidden rounded-md">
          <div className="bg-sql-enc absolute w-full h-full bg-center bg-contain bg-no-repeat  "></div>
          <div className="glass absolute flex items-center justify-center flex-col left-96 h-full w-full rounded-md backdrop-blur-sm bg-white/30">
            <h1 className="text-white font-semibold">Traductor SQL</h1>
            <p className="text-white">{t("descTraductor")}</p>
          </div>
        </div>
        <div className="bg-white  p-1 col-start-8 row-start-5 col-span-5 row-span-4 rounded-md">
          <div className="bg-enc-enc relative contenedorEncrip w-full h-full flex flex-col items-center  bg-center  bg-contain bg-no-repeat overflow-hidden ">
            <img
              src="./ovni.gif"
              alt=""
              className="ovni h-[15%] w-[10%] absolute "
            />
            <div className="bg-fondoOvni-enc bg-contain flex flex-col items-center justify-center descripcionEncrip h-full w-full absolute ">
              <h1 className="text-white font-semibold">Traductor SQL</h1>
              <p className="text-white">{t("descEncriptador")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
