import { useSelector } from "react-redux";
import { selectFavoritePoketmons } from "../RTK/selector";
import Card from "../components/Card";

function Favorites() {
  const pokemonData = useSelector(selectFavoritePoketmons());
  return (
    <>
      {pokemonData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}

export default Favorites;
