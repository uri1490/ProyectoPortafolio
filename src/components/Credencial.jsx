import React from "react";

export const Credencial = () => {
  return (
    <>
      <div
        id="tarjeta"
        className="bg-blue-300 flex justify-center flex-col-reverse md:flex-row h-[50%]"
      >
        <div id="descripcion" className="bg-red-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          nobis.
        </div>
        <div id="foto" className="bg-green-200 flex items-center">
          foto
        </div>
      </div>
    </>
  );
};
