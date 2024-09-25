import { useNavigate } from "react-router-dom";

function Card({ pokemon }) {
  const navigate = useNavigate();
  return (
    <section
      className="
      w-[150px] 
      border
      border-solid 
      border-[gray] 
      flex flex-col 
      justify-center 
      items-center 
      gap-[10px] 
      pb-[10px] 
      rounded-[10px]
      "
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <img src={pokemon.front_img} className="w-[120px]" />
      <div>{pokemon.name}</div>
    </section>
  );
}

export default Card;
