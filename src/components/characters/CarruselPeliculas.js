import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseCaratula from "../../useCaratula";

export default function CarruselPeliculas({ peliculas }) {
  const { title, director, planetConnection } = peliculas;
  const planetas = planetConnection.planets;

  const { urlImage, fetchData } = UseCaratula({ title });
  const navigate = useNavigate()
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const planetasList = planetas.map((value) => {
    const { name, id } = value

    return (
      <li key={id} className="hover:bg-slate-800">
        {name}
      </li>
    );
  });
  function peliculaId(id) {
    navigate(`/pelicula/${peliculas.id}`)
  }
  return (
    <div className="flex flex-col items-center h-auto w-full">
      <div className="w-full rounded-lg ">
        <div
          className="rounded-lg text-black  flex flex-col items-center text-lg  sm:w-2/3 m-auto lg:w-2/5 shadow-lg shadow-black  hover:cursor-pointer mb-1"
          onClick={peliculaId}
        >
          <h2 className="py-1 font-medium">{title}</h2>
          <hr className=" w-1/3 mb-3 bg-black " />
          <img
            src={urlImage}
            alt={title}
            className=" h-44 md:h-80 w-2/3 md:w-2/3 hover:opacity-95 hover:shadow-lg hover:shadow-zinc-400 rounded-md hover:bg-blend-lighten cursor-pointer"
          />
          <p className="mt-3">Director de Pelicula: {director}</p>
          <hr className=" w-1/2 h-1 bg-black mb-1" />
        </div>
      </div>

    </div>
  );
}
