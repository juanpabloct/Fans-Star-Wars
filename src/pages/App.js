import CharacterList from "../QueryCharacters";
import Navbar from "../components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section className="text-center text-2xl mt-3 font-semibold">Personajes De Star Wars</section>
        <div className="grid grid-cols-2 mt-2  w-11/12 justify-items-center gap-14">
          <CharacterList />
        </div>
      </main>
    </>
  );
}

export default App;
