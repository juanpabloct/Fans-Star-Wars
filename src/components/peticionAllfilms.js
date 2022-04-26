import { gql, useQuery } from "@apollo/client";
export default function PeticionAllfilms() {
  const datos = gql`
    query {
      allFilms {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(datos);
  return { data, loading };
}
