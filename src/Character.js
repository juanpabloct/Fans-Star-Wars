import { useNavigate } from "react-router-dom"

export const AllCharacters = ({ node }) => {
  const { name, eyeColor, birthYear, skinColor, gender, id } = node;
  const history = useNavigate()
  function Personaje() {
    history(`/personaje/${id}`)
  }
  return (
    <>
      <section className="col-span-2 lg:col-span-1 justify-items-center flex flex-col items-center border-2 border-b-gray-200 rounded-2xl mt-5 mb-6 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 w-10/12 lg:w-11/12 ">
        <div className="w-3/4 bg-white flex flex-col items-center rounded-lg">
          <div className=" mt-4 w-2/3 flex flex-col items-center justify-center mb-4">
            <div>
              <h2 className="font-semibold text-lg inline">{name}</h2>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-10/12 m-auto mb-4 ">
              <h2 className="text-center text-lg font-medium"> Caracteristicas</h2>
              <div className="flex flex-col items-center justify-center">
                <ul>
                  <li>Ojos: {eyeColor}</li>
                  <li>Nacimiento: {birthYear}</li>
                  <li>Color: {skinColor}</li>
                  <li>Genero: {gender}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-slate-600 w-1/3 rounded-lg mb-4 hover:bg-slate-800 text-white"
          onClick={() => Personaje()}
        >
          ver más
        </button>
      </section>
    </>
  );
};
