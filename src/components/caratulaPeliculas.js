import { useEffect, useState } from "react";
import UseCaratula from "../useCaratula";

export default function CaratulaPeliculas(data) {
  const [datos, setDatos] = useState();
  useEffect(() => {
    setDatos(data.film);
  }, [data]);
  const { title } = datos ? datos : "";
  const { fetchData, urlImage } = UseCaratula({ title });
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (datos) {
    return { urlImage, datos };
  }
}
