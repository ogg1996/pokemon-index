import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMutiplePokemonById = createAsyncThunk(
  "pokemon/fetchMutiplePokemonById",
  async (maxPokemonId) => {
    const newArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    const fetchAPI = async (pokemonId) => {
      // fetch 사용
      // json 변환하는 작업이 필요
      // const response = await fetch("https://pokeapi.co/api/v2/");
      // const data = await response.json();

      // axios(get) 사용
      // json 형태로 반환해 주기 때문에 변환이 따로 필요없음
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = response.data;

      // 1 세대 1 ~ 151
      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        desc: data.flavor_text_entries.find((el) => el.language.name === "ko")
          .flavor_text,
        front_img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back_img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      return pokemonData;
    };

    return await Promise.all(newArray.map((el) => fetchAPI(el)));
  }
);
