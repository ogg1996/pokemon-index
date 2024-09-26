import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div
      className="
      bg-white
      flex 
      flex-col 
      justify-center 
      items-center 
      border-[darkgray]
      border-b-[5px]
      border-r-[5px]
      border-solid

      rounded-[10px]
      py-[30px]
      px-[60px]
      "
    >
      <div className="text-[20px] mb-[10px]">
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
      <div className="whitespace-pre-wrap text-center">{pokemon.desc}</div>
      <FlipCard front={pokemon.front_img} back={pokemon.back_img} />
    </div>
  );
}

export default Detail;
