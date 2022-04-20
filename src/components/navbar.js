import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to={"/"}>
        <nav className="text-center bg-slate-800 text-white h-10 flex flex-col text-xl justify-center">
          Fan Star Wars
        </nav>
      </Link>
    </header>
  );
}
