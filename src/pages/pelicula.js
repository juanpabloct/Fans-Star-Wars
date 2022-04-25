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
    console.log(datos.urlImage);
    return (
      <main className="h-screen bg-gradient-to-br from-red-900 to-slate-900">
        <Navbar />
        <Icon
          icon="bx:arrow-back"
          width={"2rem"}
          className="ml-3 mt-2 cursor-pointer"
          color="white"
          onClick={() => window.history.back()}
        />
        <section className="grid grid-cols-3 mt-2 gap-x-10">
          <div className="w-full shadow-lg shadow-black rounded-lg bg-white ml-4">
            <img src={datos.urlImage} alt={title} className="rounded-md  m-auto bg-blend-lighten" />
          </div>
          <div className=" text-let col-span-2 w-4/5">
            <h2 className="font-semibold text-2xl text-white">
              {title} ({releaseDate})
            </h2>
            <div className="flex">
              <div className="bg-gray-600 w-8 rounded-full flex justify-center items-center cursor-pointer  mr-4">
                <Icon icon="bi:heart-fill" width={"1rem"} color={"white"} />
              </div>
              <div className="bg-gray-600 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
                <Icon icon="bi:star-fill" width={"1rem"} color={"white"} />
              </div>
            </div>
            <div className="mb-3 text-white">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p>{openingCrawl}</p>
              <hr />
            </div>
            <div className="flex justify-around font-semibold text-white">
              <span>Director {director.name}</span>
              <span>
                <Icon icon="tabler:device-tv" className="inline-block" width={"1.6rem"} />
                Episode {episodeId}
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
