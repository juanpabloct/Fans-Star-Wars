import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import InformationCharacter from "./pages/InformationCharacters";
export default function Url() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personaje/:nombre" element={<InformationCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}
