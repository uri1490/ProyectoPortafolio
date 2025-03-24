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
  ];

  return (
    <ul className="bg-white gap-1 max-[500px]:max-w-sm max-w-lg flex rounded-md overflow-x-auto scroll-smooth snap-x text-xs ">
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
    </ul>
  );
};
