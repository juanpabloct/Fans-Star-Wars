import CharacterList from "../schemas/QueryCharacters";
import Navbar from "../components/navbar";
import { useEffect, useRef, useState } from "react";
import Busqueda from "../components/characters/busqueda"

export const Characters = () => {
  const [busqueda, setBusqueda] = useState("");
  const [contenedorPadre, setContenedorPadre] = useState(false);
  const container = useRef();
  useEffect(() => {
    setContenedorPadre(container);
  }, [busqueda]);
  if (busqueda) {
    if (busqueda.length > 1) {
      const hijos = contenedorPadre.current.children;
      for (let i of hijos) {
        const hijo = i.children[0].children[0].children[0].children[0].innerText;
        i.style.display = "none";
        if (hijo.toLowerCase().includes(busqueda.toLowerCase())) {
          i.style.display = "flex";
        }
      }
    } else {
      const hijos = contenedorPadre.current.children;
      for (let i of hijos) {
        i.style.display = "flex";
      }
    }
  }
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section className="text-center text-2xl mt-3 font-semibold font-mono">Personajes De Star Wars</section>
        <Busqueda setBusqueda={setBusqueda} />
        <div
          className=" grid grid-cols-2 xl:grid-cols-3 mt-2  w-11/12 justify-items-center gap-4 lg:gap-5"
          ref={container}
        >
          <CharacterList buscar={busqueda} />
        </div>
      </main>
    </>
  );
}


