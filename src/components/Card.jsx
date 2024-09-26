import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const Card = memo(({ pokemon }) => {
  const [isImgLoading, setIsImgLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <section
      className="
      w-[150px] 
      border-solid 
      border-r-[5px]
      border-b-[5px]
      border-r-[darkgray]
      border-b-[darkgray]
      bg-white
      flex flex-col 
      justify-center 
      items-center 
      gap-[10px] 
      pb-[10px] 
      rounded-[10px]
      hover:scale-[1.1]
      hover:drop-shadow-[0_0_5px_gray]
      duration-300 "
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      {isImgLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => {
          setIsImgLoading(false);
        }}
        src={pokemon.front_img}
        className={isImgLoading ? "hidden" : "block w-[120px]"}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </section>
  );
});

Card.displayName = "Card";

export default Card;
