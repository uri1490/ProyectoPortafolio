import React from "react";

import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { IoClose } from "react-icons/io5";
export const Encabezado = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => setOpenNav(!openNav);
  const closeMobileMenu = () => setOpenNav(false);
  console.log(openNav);
  return (
    <>
      <nav className="navbar bg-red-950 flex bg-dark w-full justify-between text-red-500 h-[5vh] md:h-[5vh] sticky top-0">
        <div className="z-50">logo</div>
        <div className="z-40 md:hidden">
          <button onClick={handleClick}>
            {openNav ? (
              <IoClose className="w-7 h-7"></IoClose>
            ) : (
              <ImMenu3 className="w-7 h-7"></ImMenu3>
            )}
          </button>
        </div>
        <div
          className={`absolute  md:static md:flex  bg-pink-400 ${
            openNav ? "flex" : "hidden"
          } justify-center w-full md:w-1/2 h-[100vh] md:h-full items-center z-10`}
        >
          <ul className="flex w-full bg-slate-300 justify-center space-y-10 md:space-y-0 flex-col md:flex-row md:justify-between">
            <li className="flex justify-center">
              <a href="#home">Home</a>
            </li>
            <li className="flex justify-center">
              <a href="#about">About</a>
            </li>
            <li className="flex justify-center">
              <a href="#projects">Proyectos</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
