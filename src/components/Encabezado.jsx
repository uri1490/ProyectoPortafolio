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
      <nav className="navbar flex bg-dark w-full justify-between bg-stone-700 text-yellow-50 h-[5vh] md:h-[5vh] sticky top-0">
        <div className="z-50 flex items-center font-ubuntu">
          <h1 className="text-blue-500 text-lg">&#8826;uRi&#8827;&#129299;</h1>
        </div>
        <div className="z-40 md:hidden">
          <button onClick={handleClick}>
            {openNav ? (
              <IoClose className="w-9 h-9"></IoClose>
            ) : (
              <ImMenu3 className="w-9 h-9"></ImMenu3>
            )}
          </button>
        </div>
        <div
          className={`absolute  md:static md:flex  ${
            openNav ? "flex" : "hidden"
          } justify-center w-full md:w-1/2 h-[100vh] md:h-full items-center z-10`}
        >
          <ul className="flex w-full justify-center space-y-10 md:space-y-0 flex-col md:flex-row md:justify-between">
            <li className="flex justify-center">
              <a
                href="#home"
                className="transition ease-in-out delay-150 duration-300 hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat"
              >
                Home
              </a>
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
