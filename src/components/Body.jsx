import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
export const Body = () => {
  return (
    <div className="bg-green-300 grid grid-rows-[95vh_95vh_95vh] snap-y">
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
};
