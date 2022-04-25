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
      <div key={id} className="hover:bg-blue-600">
        {name}
      </div>
    );
  });
  function peliculaId(id) {
    window.location.href = `/pelicula/${peliculas.id}`;
  }
  return (
    <div className="flex flex-col items-center h-auto w-full">
      <div className="w-full rounded-lg bg-neutral-200">
        <div
          className="bg-white mb-2  rounded-lg text-black border-2 border-blue-400 flex flex-col items-center text-lg  w-2/3 m-auto mt-1 shadow-md shadow-orange-50 "
          onClick={peliculaId}
        >
          <h2 className="py-1 font-medium">{title}</h2>
          <hr className=" w-1/3 mb-3 bg-black " />
          <img
            src={urlImage}
            alt={title}
            className=" h-40 md:h-80 w-2/3 md:w-2/3 hover:opacity-95 hover:shadow-lg hover:shadow-zinc-400 rounded-md hover:bg-blend-lighten cursor-pointer"
          />
          <p className="mt-3">Director de Pelicula: {director.name}</p>
          <hr className=" w-1/2 h-1 bg-black mb-1" />
        </div>
      </div>
      <div className="xl:w-3/5 md:w-4/5 w-full">
        <hr className="" />
        <h3 className="text-zinc-800 gap-1 font-semibold bg-slate-50 text-lg">Planetas Que aparecen</h3>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 text-white bg-blue-500 rounded-md text-lg py-1">
          {planetasList}
        </div>
      </div>
    </div>
  );
}
