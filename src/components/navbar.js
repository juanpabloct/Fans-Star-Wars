import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to={"/"}>
        <nav className="text-center bg-slate-800 text-white h-10 flex flex-col text-xl justify-center">
          Fan Star Wars
        </nav>
      </Link>
      <div className="bg-zinc-400 flex justify-evenly">
        <Link to={"/"} className="hover:bg-zinc-600 w-full text-center">
          Personajes
        </Link>
        <Link to={"/peliculas"} className="hover:bg-zinc-600 w-full text-center">
          Peliculas
        </Link>
      </div>
    </header>
  );
}
