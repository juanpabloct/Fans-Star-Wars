import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Person from "../schemas/queryCharacter";
import CarruselPeliculas from "../components/characters/CarruselPeliculas"
export default function InformationCharacter() {
  const { Id } = useParams();
  const { data, loading } = Person(Id);
  const [iterador, setIterador] = useState(0);
  console.log(data);
  if (loading) {
    return (
      <>
        <div className="text-center w-full h-screen flex items-center justify-center">Cargando...</div>
      </>
    );
  }
  const { id, name, created, height, mass, hairColor, eyeColor, skinColor, birthYear, gender, filmConnection, homeworld } =
    data.person;
  const { films } = filmConnection

  const DatoPersonaje = () => {
    return (
      <div className="bg-white w-3/4 md:w-2/3 m-auto p-4 border border-black rounded-xl" key={id}>
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
            { name: " Planeta Natal", value: homeworld.name },
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
  const longitudPeliculas = films.length - 1;
  const peliculas = films[iterador];
  console.log(films);
  return (
    <main className="flex flex-col justify-center items-center bg-gradient-to-b from-zinc-300 to-slate-200">
      <section className="w-full text-center bg-white flex flex-col">
        <div className="bg-[red] text-white mb-3">
          <h2 className="text-lg font-semibold text-center font-mono leading-relaxed">Información Del Personaje</h2>
        </div>
        <DatoPersonaje />
      </section>
      <section className="w-full flex justify-center items-center bg-white">
        <div className="w-3/4 md:w-2/3 text-center mt-3 mb-3 ">

          <h2 className="text-lg text-zinc-100 font-semibold bg-slate-800 rounded-lg">Peliculas En Las que aparecio</h2>
          <div>{<CarruselPeliculas peliculas={peliculas} />}</div>
          <div className={`w-full flex h-7 bg-slate-800  rounded-md items-center justify-center gap-2`}>
            {films.map((film, i) => (iterador === i ?
              <span className="cursor-pointer">
                <Icon icon="material-symbols:circle" className="text-white" onClick={() => setIterador(i)} key={i} />
              </span> :
              <span className="cursor-pointer">
                <Icon icon="material-symbols:circle-outline" className="text-white" onClick={() => setIterador(i)} key={i} />
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
