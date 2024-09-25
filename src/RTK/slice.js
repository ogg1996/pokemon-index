import { createSlice } from "@reduxjs/toolkit";
import { fetchMutiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  // 동기적 상태 변경
  reducers: {},
  // 비동기적 상태 변경
  extraReducers: (builder) => {
    builder
      .addCase(fetchMutiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMutiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMutiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
