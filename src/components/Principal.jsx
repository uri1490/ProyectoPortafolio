import { Link, Outlet } from "react-router-dom";
import { Encabezado } from "./Encabezado";
import { Body } from "./Body";
import { Footer } from "./Footer";
export const Principal = () => {
  return (
    <>
      <Encabezado></Encabezado>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};
