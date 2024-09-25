import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";

function Detail() {
  const { pokemonId } = useParams();
  console.log(pokemonId);
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  console.log(pokemon);
  return (
    <div
      className="
    flex flex-col 
    justify-center 
    items-center 
    border 
    border-[gray]
    rounded-[10px]
    p-[30px]
    "
    >
      <div className="text-[20px] mb-[10px]">{pokemon.name}</div>
      <div className="whitespace-pre-wrap text-center">{pokemon.desc}</div>
      <img className="w-[200px]" src={pokemon.front_img} />
    </div>
  );
}

export default Detail;
