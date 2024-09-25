import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonID) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonID)
  );
