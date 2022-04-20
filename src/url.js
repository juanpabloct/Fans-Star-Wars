import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import InformationMovie from "./pages/informationMovie";
export default function Url() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/personaje/:nombre" element={<InformationMovie />} />
      </Routes>
    </BrowserRouter>
  );
}
