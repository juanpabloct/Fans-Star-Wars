import { useParams } from "react-router-dom";
import { CaratulaPeliculas } from "../components/peliculas/caratulaPeliculas"
import PlantillaPeliculas from "../components/peliculas/plantilla-peliculas";
import PeticionPeliculas from "../schemas/peticionPelicula";
export default function Pelicula() {
  const { id } = useParams();
  const { data } = PeticionPeliculas(id);
  const datos = CaratulaPeliculas(data ? data : "");
  if (datos) {
    return <PlantillaPeliculas datos={datos} />;
  }
}
