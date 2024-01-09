import React from "react";

export const Descripcion = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime.
      Accusamus aliquam voluptas ipsa hic quod, eos modi quaerat beatae ratione
      commodi ducimus obcaecati! Ad aperiam fugit perferendis veniam rerum.
      <div className="flex w-full justify-center">
        <a
          href="../../public/certificado.pdf"
          //   download={"../..public/certificado.pdf"}
          target="_blank"
        >
          <button className="flex items-center py-1 px-4 bg-blue-500 border border-blue-700 rounded space-x-3">
            <img src="./src/assets/CV1.ico" alt="" />
            <span>CV</span>
          </button>
        </a>
      </div>
    </div>
  );
};
