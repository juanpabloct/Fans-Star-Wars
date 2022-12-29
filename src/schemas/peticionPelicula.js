import { gql, useQuery } from "@apollo/client";

export default function PeticionPeliculas(id) {
  const pelicula = gql`
query Root($filmId: ID) {
  film(id: $filmId) {
    title
    id
    director
    episodeID
    openingCrawl
    releaseDate
    created
  }
}
  `;
  const peticion = useQuery(pelicula, { variables: { filmId: id } });
  const { loading, data, error } = peticion;

  return { loading, data, error };
}
