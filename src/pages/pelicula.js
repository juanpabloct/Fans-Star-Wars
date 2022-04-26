import PeticionPeliculas from "../components/peticionPelicula";
import { useParams } from "react-router-dom";
import CaratulaPeliculas from "../components/caratulaPeliculas";
import Navbar from "../components/navbar";
import { Icon } from "@iconify/react";
import PlantillaPeliculas from "../components/plantilla-peliculas";

export default function Peliculas() {
  const { id } = useParams();
  const { data } = PeticionPeliculas(id);
  const datos = CaratulaPeliculas(data ? data : "");
  if (datos) {
    return <PlantillaPeliculas datos={datos} />;
  }
}
