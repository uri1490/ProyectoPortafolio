import { Link, Outlet } from "react-router-dom";
import { Encabezado } from "./Encabezado";
import { Body } from "./Body";
import { Footer } from "./Footer";
export const Principal = () => {
  return (
    <>
      <div className="w-full lg:w-10/12 max-w-7xl ">
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
};
