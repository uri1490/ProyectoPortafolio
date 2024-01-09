import React from "react";

export const Credencial = () => {
  return (
    <>
      <div
        id="tarjeta"
        className="bg-blue-300 flex justify-center flex-col-reverse md:flex-row h-[50%]"
      >
        <div id="descripcion" className="bg-red-600 flex flex-col">
          <span className="flex justify-center">Uriel RV</span>
          <span className="flex justify-center">Desarrollador Web</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            nobis.
          </span>
          <div></div>
          <div className="flex flex-row justify-center space-x-6">
            <img src="./code.png" alt="code" className="w-10 h-10" />
            <img src="./linkedin.png" alt="link" className="w-10 h-10" />
          </div>
        </div>
        <div
          id="foto"
          className="bg-green-200 flex justify-center md:items-center"
        >
          <div className="bg-black w-14 h-14 rounded-full"></div>
        </div>
      </div>
    </>
  );
};
