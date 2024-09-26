import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonID) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonID)
  );

export const selectPokemonByRegExp = (regExp) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.filter((el) => el.name.match(regExp))
  );

export const selectFavoritePoketmons = () =>
  createSelector(
    (state) => state.pokemon.data,
    (state) => state.favorite,
    (pokemon, favorite) => {
      return pokemon.filter((el) => favorite.includes(el.id));
    }
  );
