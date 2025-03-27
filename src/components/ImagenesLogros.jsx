import React from "react";
import { useTranslation } from "react-i18next";
export const ImagenesLogros = () => {
  const { t } = useTranslation();
  const test = `${t("CedulaTexto")}`;
  const descripcionImagen = [
    {
      imagen: "./titulo2.png",
      descripcion: `${t("CedulaTexto")}`,
      id: 4,
    },
    {
      imagen: "./diploma.jpg",
      descripcion: `${t("InstructorTexto")}`,
      id: 1,
    },

    {
      imagen: "./oscar.webp",
      descripcion: `${t("ReconocimientoTexto")}`,
      id: 3,
    },
    {
      imagen: "./challenge3.png",
      descripcion: `${t("InsigniaTexto")}`,
      id: 2,
    },
    {
      imagen: "./cisco.webp",
      descripcion: `${t("CertificadoTexto")}`,
      id: 5,
    },
  ];
  {
    /* <ul className="bg-white gap-1 max-[500px]:max-w-sm max-w-lg flex rounded-md overflow-x-auto scroll-smooth snap-x text-xs ">
      {descripcionImagen.map((item) => (
        <li
          key={item.id}
          className="relative flex justify-center     snap-start bg-gradient-to-b from-cyan-400 to-slate-900 p-2"
        >
          <img
            src={item.imagen}
            alt="imagen"
            className=" rounded-lg snap-center h-full object-contain max-[500px]:max-w-sm max-w-lg "
          />
          <p className="my-32 absolute font-mono w-full bg-cyan-500/30 text-sm p-2">
            <b>{item.descripcion}</b>
          </p>
        </li>
      ))}
    </ul> */
  }
  return (
    <>
      {descripcionImagen.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center w-3/4  bg-slate-900/30 rounded gap-1 p-1"
        >
          <div className="bg-slate-300 flex justify-center rounded-md p-1">
            <img src={item.imagen} alt="imagen" className="rounded-md w-9/12" />
          </div>
          <div>
            <p className="font-thin   text-sm p-2 text-slate-300">
              <b>{item.descripcion}</b>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
