import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovies from "./pages/Peliculas";
import PersonajeNombre from "./pages/personajeNombre";
import { Characters } from "./pages/Characters";
import Pelicula from "./pages/pelicula";
export default function Url() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/personaje/:Id" element={<PersonajeNombre />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
        <Route path="/peliculas" element={<AllMovies />} />
      </Routes>
    </BrowserRouter>
  );
}
