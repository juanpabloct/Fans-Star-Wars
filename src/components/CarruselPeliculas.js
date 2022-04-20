import { useEffect } from "react";
import UseCaratula from "../useCaratula";

export default function CarruselPeliculas(props) {
  const peliculas = props.peliculas;
  const { title, director, planets } = peliculas;
  const planetas = planets.edges;
  const { urlImage, fetchData } = UseCaratula({ title });
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const planetasList = planetas.map((value) => {
    const { name, id } = value.node;
    return (
      <div key={id} className="hover:bg-orange-400">
        {name}
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center h-auto w-full">
      <div className="w-full md:w-2/3 rounded-lg bg-neutral-200">
        <div className="bg-white rounded-lg text-black border-2 border-red-400 flex flex-col items-center text-lg  w-2/3 m-auto mb-1 mt-1 shadow-md shadow-orange-300">
          <h2 className="py-1 font-medium">{title}</h2>
          <hr className=" w-1/3 mb-3 bg-black" />
          <img
            src={urlImage}
            alt={title}
            className=" h-48 md:h-80 w-2/3 md:w-2/3"
          />
          <p className="mt-3">Director de Pelicula: {director.name}</p>
          <hr className=" w-1/2 h-1 bg-black mb-1" />
        </div>
      </div>
      <div className="w-full">
        <hr className="" />
        <h3 className="text-zinc-800 gap-1 font-semibold bg-slate-50 text-lg">
          Planetas Que aparecen
        </h3>
        <div className="grid grid-cols-2 text-white bg-blue-500 rounded-md text-lg py-1">
          {planetasList}
        </div>
      </div>
    </div>
  );
}
