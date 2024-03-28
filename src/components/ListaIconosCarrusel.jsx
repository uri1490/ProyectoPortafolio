import React from "react";

export const ListaIconosCarrusel = () => {
  const listIconos = [
    { icono: "./git.ico", id: "github" },
    { icono: "./lab.ico", id: "gitlab" },
    { icono: "./tor.ico", id: "tortoise" },
    { icono: "./sharp.ico", id: "csharp" },
    { icono: "./java.ico", id: "java" },
    { icono: "./mysql.ico", id: "mysql" },
    { icono: "./js.ico", id: "javascript" },
    { icono: "./css.ico", id: "css" },
    { icono: "./ts.svg", id: "typescript" },
    { icono: "./ang.svg", id: "angular" },
    { icono: "./sql.svg", id: "sql" },
    { icono: "./tw.svg", id: "tailwind" },
    { icono: "./rea.svg", id: "react" },
    { icono: "./spri.svg", id: "spring" },
    { icono: "./html.ico", id: "html" },
    { icono: "./boot.ico", id: "bootstrap" },
  ];
  return (
    <>
      <div className="flex justify-start items-center  w-full gap-2 animate-infinite-scroll">
        {listIconos.map((item) => (
          <img src={item.icono} alt={item.id} key={item.id} className="h-8" />
        ))}
      </div>
    </>
  );
};
