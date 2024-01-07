import React from "react";

export const Encabezado = () => {
  return (
    <>
      <nav className="navbar bg-red-950 flex bg-dark w-full justify-between text-red-500 h-[5vh] sticky top-0">
        <div>logo</div>
        <div className="space-x-2">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Proyectos</a>
        </div>
      </nav>
    </>
  );
};
