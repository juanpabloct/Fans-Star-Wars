import Navbar from "../../components/navbar";
import PeticionAllfilms from "../../components/peticionAllfilms";
import { Item } from "./Item";

export default function AllMovies() {
  const { data, loading } = PeticionAllfilms();
  if (loading) return <div>Cargando...</div>;
  return (
    <>
      <Navbar />
      <h2 className="w-full text-2xl text-center font-semibold capitalize font-mono">Peliculas de Star Wars</h2>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-5 mt-10 mb-6">
        {data?.allFilms?.edges?.map(({ node }, i) => (
          <Item key={i} node={node} />
        ))}
      </section>
    </>
  );
}
