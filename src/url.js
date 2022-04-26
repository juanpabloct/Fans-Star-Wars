import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovies from "./pages/Peliculas";
import App from "./pages/App";
import Peliculas from "./pages/pelicula";
import PersonajeNombre from "./pages/personajeNombre";
export default function Url() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personaje/:Id" element={<PersonajeNombre />} />
        <Route path="/pelicula/:id" element={<Peliculas />} />
        <Route path="/peliculas" element={<AllMovies />} />
      </Routes>
    </BrowserRouter>
  );
}
