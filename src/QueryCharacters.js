import { gql, useQuery } from "@apollo/client";
import { AllCharacters } from "./Character";
const allData = gql`
  query {
    allPeople {
      edges {
        node {
          id
          name
          created
          height
          mass
          hairColor
          eyeColor
          skinColor
          birthYear
          gender
          homeWorld {
            name
          }
        }
      }
    }
  }
`;
export function Datos() {
  const { error, loading, data } = useQuery(allData);
  return { error, loading, data };
}
export default function CharacterList() {
  const { loading, data } = Datos();
  if (loading) return <p className="col-span-2  justify-center">Cargando...</p>;
  const characters = data?.allPeople?.edges.map((edge) => {
    const { node } = edge;
    return <AllCharacters key={node.id} node={node} />;
  });
  return <>{characters}</>;
}
