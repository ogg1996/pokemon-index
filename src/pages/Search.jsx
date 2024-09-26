import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import Card from "../components/Card";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const regExp = getRegExp(param, {
    initialSearch: true,
    fuzzy: true,
  });
  const searchData = useSelector(selectPokemonByRegExp(regExp));
  return (
    <>
      {searchData.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}

export default Search;
