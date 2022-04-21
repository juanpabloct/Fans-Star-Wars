import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import PersonajeNombre from "./pages/personajeNombre";
export default function Url() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personaje/:Id" element={<PersonajeNombre />} />
      </Routes>
    </BrowserRouter>
  );
}
