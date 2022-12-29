import { gql, useQuery } from "@apollo/client";
import { AllCharacters } from "../Character";
const allData = gql`
  query Root {
  allPeople {
    people {
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
      homeworld {
        name
      }
    }
  }
}
`;
export function Datos() {
  const { error, loading, data } = useQuery(allData);
  return { error, loading, data };
}
export default function CharacterList({ buscar }) {

  const { loading, data } = Datos();
  console.log(data)
  console.log(buscar);
  if (loading) return <p className="col-span-2  justify-center">Cargando...</p>;
  const characters = data.allPeople.people.map((people) => {

    return <AllCharacters key={people.id} node={people} />;
  });
  return <>{characters}</>;
}
