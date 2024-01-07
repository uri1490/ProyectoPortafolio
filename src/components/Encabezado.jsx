import React from "react";

export const Encabezado = () => {
  return (
    <>
      <nav className="navbar bg-red-950 flex bg-dark w-full justify-between text-red-500">
        <div>logo</div>
        <div className="space-x-2">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Proyectos</a>
        </div>
      </nav>
    </>
  );
};
