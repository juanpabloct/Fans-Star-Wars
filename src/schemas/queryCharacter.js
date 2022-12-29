import { gql, useQuery } from "@apollo/client";

export default function Person(Id) {
  const datos = gql`
    query Root($personId: ID) {
  person(id: $personId) {
    created
    name
    id
    height
    mass
    hairColor
    skinColor
    eyeColor
    birthYear
    gender
    homeworld {
      name
    }
    filmConnection {
      films {
        id
        title
        director
        planetConnection {
          planets {
            name
            id
          }
        }
      }
    }
  }
}
  `;
  const { loading, error, data } = useQuery(datos, {
    variables: { personId: Id },
  });

  return { loading, error, data };
}
