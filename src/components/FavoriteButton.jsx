import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispath = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispath(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId: pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId: pokemonId })
        );
      }}
      className={isFavorite && "text-[red]"}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;
