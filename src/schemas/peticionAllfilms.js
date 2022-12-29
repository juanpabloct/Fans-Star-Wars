import { gql, useQuery } from "@apollo/client";
export const PeticionAllfilms = () => {
  const datos = gql`
query Root {
  allFilms {
    films {
      id
      title
    }
  }
}
  `;
  const { loading, error, data } = useQuery(datos);

  return { data, loading, error };
}
