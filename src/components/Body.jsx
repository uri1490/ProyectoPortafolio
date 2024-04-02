import React from "react";
import { Encabezado } from "./Encabezado";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
export const Body = () => {
  return (
    <div className="bg-gradient-to-bl from-gray-600 to-black bg-gradient-to-r grid grid-rows-[5vh_95vh_100%_95vh] md:grid-rows-[5vh_95vh_auto_auto] shadow-2xl shadow-cyan-500/50 snap-y p-1">
      <Encabezado></Encabezado>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
};
