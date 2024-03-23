import React from "react";
import { Encabezado } from "./Encabezado";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
export const Body = () => {
  return (
    <div className="bg-gradient-to-bl from-black to-gray-600 bg-gradient-to-r grid grid-rows-[5vh_95vh_95vh_95vh] shadow-2xl shadow-cyan-500/50 snap-y p-1">
      <Encabezado></Encabezado>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
};
