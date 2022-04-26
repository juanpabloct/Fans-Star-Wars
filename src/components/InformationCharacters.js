import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CarruselPeliculas from "./CarruselPeliculas";
import Person from "../queryCharacter";

export default function InformationCharacter() {
  const { Id } = useParams();
  const { data, loading } = Person(Id);
  const [iterador, setIterador] = useState(0);
  if (loading) {
    return (
      <>
        <div className="text-center w-full h-screen flex items-center justify-center">Cargando...</div>
      </>
    );
  }
  const { id, name, created, height, mass, hairColor, eyeColor, skinColor, birthYear, gender, films, homeWorld } =
    data.people;
  const DatoPersonaje = () => {
    return (
      <div className="bg-white w-3/4 md:w-2/3 m-auto py-4  rounded-xl" key={id}>
        <h2 className="text-xl md:text-2xl font-bold leading-loose font-mono ">{name}</h2>
        <ol className="grid md:grid-cols-3 justify-items-start items-center justify-around capitalize ml-6 text-base md:text-lg font-sans">
          {[
            {
              name: "Fecha de creación",
              value: created,
            },
            { name: " Anchura", value: height },
            { name: " Masa", value: mass },
            { name: " Cabello", value: hairColor },
            { name: " Ojos", value: eyeColor },
            { name: " Color de piel", value: skinColor },
            { name: " Cumpleaños", value: birthYear },
            { name: " Genero", value: gender },
            { name: " Planeta Natal", value: homeWorld.name },
          ].map((value, i) => {
            const { name } = value;
            return (
              <li key={i} className="text-left text-xs sm:text-sm">
                <span className="font-semibold">{name}: </span>
                {value.value}
              </li>
            );
          })}
        </ol>
      </div>
    );
  };
  const longitudPeliculas = films.edges.length - 1;
  const peliculas = films.edges[iterador].node;
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-zinc-300 to-slate-200">
      <section className="w-full text-center">
        <div className="bg-zinc-600 text-white mb-3">
          <h2 className="text-lg font-semibold text-center font-mono leading-relaxed">Información Del Personaje</h2>
        </div>
        {<DatoPersonaje />}
      </section>
      <section className="w-3/4 md:w-2/3 text-center mt-3 mb-3 ">
        <h2 className="text-lg text-zinc-100 font-semibold bg-slate-800 rounded-lg">Peliculas En Las que aparecio</h2>
        <div>{<CarruselPeliculas peliculas={peliculas} />}</div>
        <div className="w-full flex h-7 bg-slate-800 justify-evenly rounded-md">
          <Icon
            color="white"
            icon="octicon:chevron-left-16"
            className="w-full hover:bg-slate-300 h-full"
            onClick={() => setIterador(iterador > 0 ? iterador - 1 : longitudPeliculas)}
          />
          <Icon
            icon="octicon:chevron-right-16"
            color="white"
            className="w-full hover:bg-slate-300 h-full"
            onClick={() => setIterador(iterador < longitudPeliculas ? iterador + 1 : 0)}
          />
        </div>
      </section>
    </main>
  );
}
