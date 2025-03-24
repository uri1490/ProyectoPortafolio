import React, { useEffect, useRef, useState } from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";

export const Carrusel2 = () => {
  const { t } = useTranslation();
  const ImagenesCarrusel = [
    {
      id: 1,
      nombre: `${t("Encriptador")}`,
      srcImagen: "./enc2.gif",
      descripcion: `${t("descEncriptador")}`,
    },
    {
      id: 2,
      nombre: "Arix",
      srcImagen: "./ari2.gif",
      descripcion: `${t("descXray")}`,
    },
    {
      id: 3,
      nombre: `${t("Medidor")}`,
      srcImagen: "./atmel.png",
      descripcion: `${t("descBateria")}`,
    },
    {
      id: 4,
      nombre: `${t("Simulador")}`,
      srcImagen: "./mrf.PNG",
      descripcion: `${t("descFrm")}`,
    },
    {
      id: 5,
      nombre: "ApiRest",
      srcImagen: "./ApiTopico.gif",
      descripcion: `${t("DescApi")}`,
    },
    {
      id: 6,
      nombre: `${t("Traductor")}`,
      srcImagen: "./sql.png",
      descripcion: `${t("descTraductor")}`,
    },
    {
      id: 7,
      nombre: "SIPAE",
      srcImagen: "./sipa2.png",
      descripcion: `${t("descSipae")}`,
    },
    {
      id: 8,
      nombre: "SIGENUC",
      srcImagen: "./sige2.png",
      descripcion: `${t("descSige")}`,
    },
  ];

  const listRef = useRef();
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li>img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);
  const scrollToImage = (direction) => {
    console.log(direction);
    if (direction === "prev") {
      setIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === ImagenesCarrusel.length - 1;
      if (!isLastSlide) {
        setIndex((curr) => curr + 1);
      }
    }
  };
  const goToSlide = (slideIndex) => {
    console.log(slideIndex);
    setIndex(slideIndex);
  };
  return (
    <div className=" relative hidden max-[767px]:flex slideProyect h-3/4 flex-col pt-4 items-center">
      <TiArrowLeftOutline
        className="absolute left-0 top-1/4 h-10 w-10 fill-cyan-400 z-50"
        onClick={() => scrollToImage("prev")}
      />
      <TiArrowRightOutline
        className="absolute right-0 top-1/4 h-10 w-10 fill-cyan-400  z-50"
        onClick={() => scrollToImage("next")}
      />
      <ul
        ref={listRef}
        className="touch-none flex no-scrollbar   max-[500px]:max-w-sm max-w-lg overflow-x-auto scroll-smooth snap-x  rounded-md"
      >
        {ImagenesCarrusel.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-col bg-fondoCard-enc bg-cover p-2"
            >
              <img
                src={item.srcImagen}
                alt=""
                className="h-3/4 max-[500px]:max-w-sm max-w-lg rounded-t-md"
              />
              <div className="  ">
                <h1 className="font-semibold text-center text-yellow-400">
                  {item.nombre}
                </h1>
                <hr className="h-1" />
                <p className="bg-black/70 text-white">{item.descripcion}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="  space-x-4  flex">
        {ImagenesCarrusel.map((_, idx) => (
          <div
            key={idx}
            className={`  rounded-full w-7 h-7 ${
              idx === currentIndex ? " bg-cyan-400" : "bg-transparent"
            } border border-solid`}
            onClick={() => goToSlide(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};
