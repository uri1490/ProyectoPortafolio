import React from "react";

export const ImagenesLogros = () => {
  const descripcionImagen = [
    {
      imagen: "./diploma.jpg",
      descripcion:
        "Participe como instructor en el uso de equipo radiologico y el software de adquisición de imagenes de rayos x en CMR.",
      id: 1,
    },

    {
      imagen: "./oscar.webp",
      descripcion:
        "Durante mi estancia en CMR se me otorgo un reconocimiento por el cumplimiento de mis labores.",
      id: 3,
    },
    {
      imagen: "./challenge3.png",
      descripcion:
        "Participe en un bootcamp de programacion en el cual se te otorgaban insignias por terminar los desafios que se presentaban al termino de un curso, uno de ellos fue Springboot y el otro fue con html, css y javascript.",
      id: 2,
    },
  ];

  return (
    <ul className="bg-white gap-1  max-[500px]:max-w-[400px] max-sm:max-w-[500px] flex rounded-md overflow-x-auto scroll-smooth snap-x ">
      {descripcionImagen.map((item) => (
        <li
          key={item.id}
          className="relative flex justify-center     snap-start bg-green-400"
        >
          <img
            src={item.imagen}
            alt="imagen"
            className=" rounded-lg snap-center h-full object-contain max-[500px]:max-w-sm max-sm:max-w-[500px]"
          />
          <p className="my-32 absolute font-mono w-full bg-cyan-500/30 text-sm">
            <b>{item.descripcion}</b>
          </p>
        </li>
      ))}
    </ul>
  );
};
