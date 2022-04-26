import { gql, useQuery } from "@apollo/client";

export default function PeticionPeliculas(id) {
  const pelicula = gql`
    query People($filmId: ID!) {
      film(id: $filmId) {
        title
        id
        director {
          name
        }
        episodeId
        openingCrawl
        releaseDate
        created
      }
    }
  `;
  const peticion = useQuery(pelicula, { variables: { filmId: id } });
  const { loading, data } = peticion;
  return { loading, data };
}
