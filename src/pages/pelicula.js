import PeticionPeliculas from "../components/peticionPeliculas";
import { useParams } from "react-router-dom";
import CaratulaPeliculas from "../components/caratulaPeliculas";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";

export default function Peliculas() {
  const { id } = useParams();
  const { data } = PeticionPeliculas(id);
  const datos = CaratulaPeliculas(data ? data : "");
  if (datos) {
    const { title, director, episodeId, openingCrawl, releaseDate, id } = datos.datos;
    return (
      <main>
        <Navbar />
        <section className="flex mt-10">
          <div className="w-1/3">
            <img src={datos.urlImage} alt={title} className="rounded-md  ml-8" />
          </div>
          <div className="w-1/2 grid grid-rows-2">
            <div className=" text-center flex flex-col justify-center">
              <h2 className="font-semibold text-xl ml-5">
                {title} ({releaseDate})
              </h2>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Overview</h2>
              <p>{openingCrawl}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
