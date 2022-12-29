import Navbar from "../navbar";
import { Icon } from "@iconify/react";

export default function PlantillaPeliculas({ datos }) {
  const { title, director, episodeID, openingCrawl, releaseDate } = datos.datos;
  const { urlImage } = datos;
  console.log(urlImage);

  return (
    <main className=" h-full sm:h-screen bg-white text-black">
      <Navbar />
      <section className=" ">
        <Icon
          icon="bx:arrow-back"
          width={"2rem"}
          className="ml-3 mt-2 cursor-pointer"
          color="black"
          onClick={() => window.history.back()}
        />
        <div className="flex gap-5 border divide-y divide-x">

          <div className="w-[30%] shadow-lg shadow-black rounded-lg  sm:ml-20 self-center" style={{ height: "50vh" }}>
            <img
              src={urlImage}
              alt={title}
              className="rounded-md  m-auto bg-blend-lighten w-3/4 h-5/6 sm:w-11/12 sm:h-full md:max-w-sm"
            />
          </div>
          <div className="w-3/5 flex justify-center items-center">
            <div className=" text-let sm:col-span-2 w-1/2">
              <h2 className="font-semibold text-2xl ">
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
              <div className="mb-3 ">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p>{openingCrawl}</p>
                <hr />
              </div>
              <div className="flex justify-around font-semibold ">
                <span>Director {director}</span>
                <span>
                  <Icon icon="tabler:device-tv" className="inline-block" width={"1.6rem"} />
                  Episode {episodeID}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
