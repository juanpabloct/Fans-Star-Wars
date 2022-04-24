import { useRef, useState } from "react";

export default function Busqueda(props) {
  const setBusqueda = props.valor;
  return (
    <>
      <section className="mt-2">
        <label className="text-xl">Busca tu personaje: </label>
        <input
          type="text"
          placeholder="Busqueda"
          className="bg-white border-2 border-black rounded-lg text-center"
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
        />
      </section>
    </>
  );
}
