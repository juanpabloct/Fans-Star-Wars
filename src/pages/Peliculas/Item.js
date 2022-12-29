import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseCaratula from "../../useCaratula";

export const Item = ({ node }) => {
  const { title } = node;
  const { urlImage, fetchData } = UseCaratula({ title: title });
  const navigate = useNavigate()
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  function masInformacion() {
    navigate("/pelicula/" + node.id)
  }

  return (
    <div
      className="col-span-1 w-1/2 md:w-4/5 bg-gray-700 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-neutral-500"
      onClick={() => {
        masInformacion();
      }}
    >
      <img src={urlImage} alt={title} className="w-full h-80 m-auto rounded-md" />
      <h1 className="text-center text-white">{title}</h1>
    </div>
  );
};
