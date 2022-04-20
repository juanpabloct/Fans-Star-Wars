import { ApolloClient, InMemoryCache } from "@apollo/client";

const Peliculas = new ApolloClient({
  uri: "https://swapi.loquenecesito.co/graphql/",
  cache: new InMemoryCache(),
});
export default Peliculas;
