import { useSelector } from "react-redux";
import Card from "../components/Card";

function Main() {
  const pokemonData = useSelector((state) => state.pokemon);
  return (
    <>
      {pokemonData.data.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}

export default Main;
