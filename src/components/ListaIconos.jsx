import React from "react";

export const ListaIconos = () => {
  let state = {
    // lenguajes: [12, 34, 23, 10, 40, 50, 15, 21, 34, 19, 12, 34, 23, 10],
    lenguajes: [
      { logo: "./vite.svg", time: 17 },
      { logo: "./ja.svg", time: 34 },
      { logo: "./sharp.ico", time: 23 },
      { logo: "./ht.svg", time: 40 },
      { logo: "./sql.svg", time: 19 },
      { logo: "./git.ico", time: 12 },
      { logo: "./rea.svg", time: 16 },
      { logo: "./spri.svg", time: 21 },
      { logo: "./ts.svg", time: 24 },
      { logo: "./cm.svg", time: 37 },
      { logo: "./ang.svg", time: 25 },
      { logo: "./js.svg", time: 20 },
      { logo: "./tw.svg", time: 10 },
      { logo: "./lab.ico", time: 15 },
      { logo: "./mysql.ico", time: 31 },
      { logo: "./tor.ico", time: 28 },
    ],
  };
  return (
    <>
      {state.lenguajes.map((item) => (
        <img
          src={item.logo}
          alt="iconos animados"
          key={item.time}
          className="iconos w-8 h-8 max-[767px]:w-5 max-[767px]:h-5"
          style={{ "--i": item.time }}
        ></img>
      ))}
    </>
  );
};
