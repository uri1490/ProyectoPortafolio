import React from "react";
import { useTranslation } from "react-i18next";
export function TextoDescripcion() {
  const { t } = useTranslation();
  return (
    <>
      <p className=" font-light sm:text-xs md:text-sm  xl:text-lg 2xl:text-xl">
        {t("Descripcion")}
      </p>
    </>
  );
}
