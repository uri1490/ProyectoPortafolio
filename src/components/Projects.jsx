import { Carrusel } from "./Carrusel";
import { Collage } from "./Collage";
export const Projects = () => {
  return (
    <>
      <div id="projects" className=" bg-cover   scroll-mt-[5vh] ">
        <div className="flex-col h-full  ">
          <h1 className="text-center md:text-[20px] lg:text-[20px] 2xl:text-[30px] text-yellow-500 font-mono">
            <b>Proyectos</b>
          </h1>
          <Collage></Collage>
        </div>
      </div>
    </>
  );
};
