import { Container } from "postcss";
import React from "react";

export const Carrusel = () => {
  return (
    <section className=" p-2 relative hidden max-[767px]:flex flex-col max-[767px]:justify-center items-center h-full ">
      <div className="slider-nav  space-x-2  bottom-1 flex z-10">
        <a href="#1" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#2" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#3" className=" bg-red-600 rounded-full w-7 h-7"></a>
        <a href="#4" className=" bg-red-600 rounded-full w-7 h-7"></a>
      </div>
      <div className="slider-wrapper flex justify-center    max-w-2xl">
        <div className="slider no-scrollbar m-auto  flex gap-6 aspect-video overflow-x-auto scroll-smooth snap-start snap-x snap-mandatory">
          <img
            id="1"
            src="./enc2.gif"
            alt=""
            className="snap-center rounded-md   shadow-xl"
          />

          <img
            id="2"
            src="./atmel.png"
            alt=""
            className="rounded-md snap-center   shadow-xl"
          />
          <img
            id="3"
            src="./mrf.PNG"
            alt=""
            className="rounded-md snap-center   shadow-xl"
          />
          <img
            id="4"
            src="./ApiTopico.gif"
            alt=""
            className="rounded-md snap-center   shadow-xl"
          />
          <div className="bg-sql-enc rounded-md snap-center   shadow-xl w-96 h-96">
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex rem
              dicta fugiat neque corporis molestias explicabo alias eius
              aspernatur illo error modi, maiores quisquam ab natus! Ab
              inventore commodi beatae?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
