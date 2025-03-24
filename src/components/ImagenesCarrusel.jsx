import React from "react";
import { useTranslation } from "react-i18next";
const { t } = useTranslation();
export const ImagenesCarrusel = [
  {
    id: 1,
    srcImagen: "./enc2.gif",
    descripcion: `${t("descEncriptador")}`,
  },
  {
    id: 2,
    srcImagen: "./ari2.gif",
    descripcion: `${t("descXray")}`,
  },
  {
    id: 3,
    srcImagen: "./atmel.png",
    descripcion: `${t("descBateria")}`,
  },
  { id: 4, srcImagen: "./mrf.PNG", descripcion: `${t("descFrm")}` },
  {
    id: 5,
    srcImagen: "./ApiTopico.gif",
    descripcion: `${t("DescApi")}`,
  },
  { id: 6, srcImagen: "./sql.png", descripcion: `${t("descTraductor")}` },
  {
    id: 7,
    srcImagen: "./sipa2.png",
    descripcion: `${t("descSipae")}`,
  },
  {
    id: 8,
    srcImagen: "./sige2.png",
    descripcion: `${t("descSige")}`,
  },
];
