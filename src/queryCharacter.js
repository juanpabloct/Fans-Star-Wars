import { gql, useQuery } from "@apollo/client";

export default function Person(Id) {
  const datos = gql`
    query People($id: ID!) {
      people(id: $id) {
        name
        id
        height
        mass
        hairColor
        skinColor
        eyeColor
        birthYear
        gender
        homeWorld {
          name
        }
        films {
          edges {
            node {
              id
              title
              director {
                name
              }
              planets {
                edges {
                  node {
                    name
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(datos, {
    variables: { id: Id },
  });
  return { loading, error, data };
}
