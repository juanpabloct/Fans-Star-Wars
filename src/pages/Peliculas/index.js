import Navbar from "../../components/navbar";
import { PeticionAllfilms } from "../../schemas/peticionAllfilms";
import { Item } from "./Item";

export default function AllMovies() {
  const { data, loading } = PeticionAllfilms();
  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <Navbar />
      <h2 className="w-full text-2xl text-center font-semibold capitalize font-mono">Peliculas de Star Wars</h2>
      <section className="w-full flex  items-center justify-center ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center sm:gap-y-2 gap-y-1 mt-10 mb-6 w-11/12 sm:w-full  lg:max-w-6xl">

          {data?.allFilms?.films?.map((film, i) => {

            return <Item key={i} node={film} />
          }
          )}
        </div>
      </section>
    </>
  );
}
