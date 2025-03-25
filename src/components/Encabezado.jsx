import React from "react";
import "./general.css";
import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";

import { useTranslation } from "react-i18next";
import "../index.css";
import { FaHome, FaUserAstronaut, FaTools } from "react-icons/fa";
export const Encabezado = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const cambiarIdioma = (leng) => {
    console.log(leng);
    i18n.changeLanguage(leng);
  };
  const [isOn, setIsOn] = useState(false);
  const handleIdioma = () => setIsOn(!isOn);
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => setOpenNav(!openNav);
  const closeMobileMenu = () => setOpenNav(false);
  console.log(openNav);

  return (
    <>
      <nav className=" flex   backdrop-blur-sm w-full justify-between  text-yellow-50 h-[5vh] md:h-[5vh] sticky z-50 top-0">
        <div className="z-50 flex items-center">
          <h1 className=" text-lg font-light backdrop-blur-sm ">
            <b>{t("Portafolio")} &#129299;</b>
          </h1>
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
          className={`absolute  md:static flex ${
            openNav ? "left-0" : "-left-[2000px]"
          } ${
            openNav ? "bg-black/50" : "bg-black/0"
          } justify-center duration-300  w-full md:w-1/2 h-[100vh]  backdrop-blur-sm  md:h-full items-center z-10`}
        >
          <ul className="flex items-center   w-full justify-center space-y-10 md:space-y-0 flex-col md:flex-row md:justify-between ">
            <li className="flex justify-center items-center gap-1">
              <FaHome className="max-[767px]:h-10 max-[767px]:w-10" />
              <a
                href="#home"
                className="font-mono bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-no-repeat bg-bottom bg-[length:100%_2px] hover:bg-[length:100%_100%] transition-[background-size] rounded-sm"
              >
                <span className="max-[767px]:text-4xl  text-lg">
                  {t("Home")}
                </span>
              </a>
            </li>
            <li className="flex justify-center items-center gap-1">
              <FaUserAstronaut className="max-[767px]:h-10 max-[767px]:w-10" />
              <a
                href="#about"
                className="font-mono bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-no-repeat bg-bottom bg-[length:100%_2px] hover:bg-[length:100%_100%] transition-[background-size] rounded-sm"
              >
                <span className="max-[767px]:text-4xl text-lg">
                  {t("About")}
                </span>
              </a>
            </li>
            <li className="flex justify-center  items-center gap-1">
              <FaTools className="max-[767px]:h-10 max-[767px]:w-10" />
              <a
                href="#projects"
                className="font-mono relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-no-repeat bg-bottom bg-[length:100%_2px] hover:bg-[length:100%_100%] transition-[background-size] rounded-sm"
              >
                <span className="max-[767px]:text-4xl text-lg">
                  {t("Proyects")}
                </span>
              </a>
            </li>
            <li className="flex justify-center  items-center gap-1">
              <button
                className="hover:cursor-pointer"
                onClick={() => cambiarIdioma("es")}
              >
                <img src="./Es.png" alt="" className="h-7 w-7" />
              </button>
              <button
                className="hover:cursor-pointer"
                onClick={() => cambiarIdioma("en")}
              >
                <img src="./En.png" alt="" className="h-10 w-10" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
