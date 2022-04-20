import { useParams } from "react-router-dom";
import { Datos } from "../CharacterList";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CarruselPeliculas from "./CarruselPeliculas";

export default function InformationCharacter() {
  const { nombre } = useParams();
  const { data } = Datos();
  const datos = data?.allPeople?.edges;
  const personaje = [];
  const [iterador, setIterador] = useState(0);
  if (!datos) {
    return (
      <>
        <div className="text-center w-full h-screen flex items-center justify-center">
          Cargando...
        </div>
      </>
    );
  }
  if (datos)
    datos.forEach((characters) => {
      const datosPersonajes = characters.node;
      if (datosPersonajes.name === nombre) {
        personaje.push(datosPersonajes);
      }
    });
  const {
    name,
    created,
    height,
    mass,
    hairColor,
    eyeColor,
    skinColor,
    birthYear,
    gender,
    films,
    homeWorld,
  } = personaje[0];
  const datoPersonaje = personaje?.map((value) => {
    return (
      <div
        className="bg-slate-300 w-11/12 md:w-3/4 m-auto py-4  rounded-xl"
        key={value.id}
      >
        <h2 className="text-lg md:text-xl">{name}</h2>
        <ol className="grid justify-items-start justify-around capitalize ml-6 text-base md:text-lg">
          <li>
            <span className="font-semibold">Fecha de Creación:</span> {created}
          </li>
          <li>
            <span className="font-semibold">Anchura del personaje:</span>{" "}
            {height}
          </li>
          <li>
            <span className="font-semibold">Masa del personaje:</span> {mass}
          </li>
          <li>
            <span className="font-semibold">Color del cabello:</span>{" "}
            {hairColor}
          </li>
          <li>
            <span className="font-semibold">Color de los Ojos: </span>{" "}
            {eyeColor}
          </li>
          <li>
            <span className="font-semibold">Color de la piel:</span> {skinColor}
          </li>
          <li>
            <span className="font-semibold">Fecha de Cumpleaños:</span>{" "}
            {birthYear}
          </li>
          <li>
            <span className="font-semibold">Genero:</span> {gender}
          </li>
          <li>
            <span className="font-semibold">Mundo Natal:</span> {homeWorld.name}
          </li>
        </ol>
      </div>
    );
  });
  const longitudPeliculas = films.edges.length - 1;
  const peliculas = films.edges[iterador].node;
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="w-full text-center">
          <div className="bg-zinc-100 mb-3">
            <h2 className="text-lg text-zinc-100 font-semibold text-center">
              Información Del Personaje
            </h2>
          </div>
          {datoPersonaje}
        </section>
        <section className="w-3/4 md:w-2/3 text-center mt-5 mb-3 ">
          <h2 className="text-lg text-zinc-100 font-semibold bg-slate-800 rounded-lg">
            Peliculas En Las que aparecio
          </h2>
          <div>
            <CarruselPeliculas peliculas={peliculas} />
          </div>
          <div className="w-full flex h-7 bg-slate-400 justify-evenly rounded-md">
            <Icon
              icon="octicon:chevron-left-16"
              className="w-full hover:bg-slate-300 h-full"
              onClick={() =>
                setIterador(iterador > 0 ? iterador - 1 : longitudPeliculas)
              }
            />
            <Icon
              icon="octicon:chevron-right-16"
              className="w-full hover:bg-slate-300 h-full"
              onClick={() =>
                setIterador(
                  iterador < films.edges.length - 1 ? iterador + 1 : 0
                )
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
